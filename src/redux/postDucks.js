import axios from 'axios'

//constantes
const dataInicial = {
    array : [],
    filtrados: []
}
//tipos
const GET_POSTS_EXITO = 'GET_POSTS_EXITO'
const DELETE_POST_EXITO = 'DELETE_POST_EXITO'
const FILTRO_EXITO = 'FILTRO_EXITO'
//reducer
export default function postReducer(state = dataInicial, action){
    switch (action.type) {
        case GET_POSTS_EXITO:
            return {...state, array: action.payload}
        case DELETE_POST_EXITO:
            return {...state, array:action.payload, filtrados:action.payload}
        case FILTRO_EXITO:
            return {...state, filtrados: action.payload}
    
        default:
            return state
    }
}
//acciones
export const getPosts = () => async (dispatch, getState) =>{
    try {
        const res = await axios.get('http://localhost:3001/api/entries/get')
        dispatch({
            type: GET_POSTS_EXITO,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id)=> async(dispatch, getState)=>{
    console.log('eliminando post con id: ' + id)
    const aux = getState().entries.array
    const filtrado = aux.filter(post => post.id !== id)
    dispatch({
        type: DELETE_POST_EXITO,
        payload: filtrado
    })
    try {
        const res = await axios.delete(`http://localhost:3001/api/entries/delete/${id}`)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
export const createPost = (titulo, desc) => async (dispatch, getState) => {
    const config = {
        "postName": titulo,
        "postDescription": desc
    }
    try {
        const res = await axios.post('http://localhost:3001/api/entries/create', config)
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}
export const buscar = (filtro) => (dispatch, getState) => {
    const filtrado = []
    const aux = getState().entries.array
    aux.map(post => {
        let titulo = post.nombre.toLowerCase()
        if (titulo.indexOf(filtro.toLowerCase()) !== -1){
            filtrado.push(post)
        }
    })
    dispatch({
        type: FILTRO_EXITO,
        payload: filtrado
    })
}
