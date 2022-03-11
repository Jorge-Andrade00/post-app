import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../redux/postDucks'

const Formulario = (props) => {
    const dispatch = useDispatch()
    const [titulo, setTitulo] = useState('')
    const [desc, setDesc] = useState('')

    const sendPost = (e) => {
        e.preventDefault()
        dispatch(createPost(titulo,desc))
        setTitulo('')
        setDesc('')
    }

    return (
        <div className = 'container text-center'>
            <div className ='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4'>
                <h1 className="display-4 py-2">Bienvenido</h1>
                <div className="px-2">
                    <form onSubmit={sendPost} className="justify-content-center">
                        <div className="form-group mb-2">
                            <input value={titulo} type="text" className="form-control" placeholder="Ingresa el titulo de tu post" onChange={(e)=>setTitulo(e.target.value)}/>
                        </div>
                        <div className="form-group mb-2">
                            <input value={desc} type="text" className="form-control" placeholder="Ingresa la descripción de tu post" onChange={(e)=>setDesc(e.target.value)}/>
                        </div>
                        <div className = 'd-grid gap-2'>
                            <button className='btn btn-success btn-block' type="submit">Crear post</button>
                        </div>
                    </form>
                    <div className = 'd-grid gap-2 mt-4'>
                            <button className='btn btn-primary btn-block' type="submit" onClick = {()=>props.history.push('/posts')}>Ver otros posts</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formulario

