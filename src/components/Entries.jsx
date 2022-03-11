import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost, buscar } from "../redux/postDucks";

const Entries = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("entre");
    dispatch(getPosts());
  }, [dispatch]);

  const entries = useSelector((store) => store.entries.array);
  const filtrados = useSelector((store) => store.entries.filtrados);


  return (
    <div className="container">
      <h1>Posts</h1> <br />
      <button
        className="btn btn-success float-end"
        onClick={() => props.history.push("/")}
      >
        Escribe un post
      </button>
      <input
        onChange={(e) => dispatch(buscar(e.target.value))}
        type="text"
        placeholder="Busca un post especifico"
      />
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descropción</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.length !== 0
            ? filtrados.map((post) => (
                <tr key={post.id}>
                  <td>{post.nombre}</td>
                  <td>{post.descripcion}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deletePost(post.id))}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            : entries.map((post) => (
                <tr key={post.id}>
                  <td>{post.nombre}</td>
                  <td>{post.descripcion}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deletePost(post.id))}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      {entries.length === 0 ? <h1>No hay posts</h1> : null}
    </div>
  );
};

export default Entries;

