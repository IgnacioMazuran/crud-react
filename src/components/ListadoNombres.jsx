import React, { useState } from 'react';
import uniqid from 'uniqid';

function ListadoNombres(props) {

    const [nombre, setNombre] = useState('');
    const [listanombres, setListaNombres] = useState([]);
    const [edicion, setEdicion] = useState(false);
    const [id, setId] = useState('');
    const [error, setError] = useState(null);

    const agregarNombres = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            setError('El campo nombre está vacío');
            return
        }
        const nuevoNombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setListaNombres([...listanombres, nuevoNombre]);
        setNombre('');
        setError(null);
    }

    const borrarNombre = (id) => {
        const arreglo = listanombres.filter( item => item.id !== id);
        setListaNombres(arreglo);
    }

    const editar = (item) => {
        setEdicion(true);
        setNombre(item.nombre);
        setId(item.id);
    }

    const editarNombre = (e) => {
        e.preventDefault();
        const nuevoArray = listanombres.map(item => item.id === id ? {id:id, tituloNombre:nombre} : item);
        setListaNombres(nuevoArray);
        setNombre('');
        setEdicion(false);
    }

    return (
        <div>
            <h2 className="d-flex justify-content-center">Apprendiendo Hooks :)</h2>
            <div className='row'>
                <div className='col'>
                    <h2>Nombres</h2>
                    <ul className='list-group'>

                        {
                            listanombres.map(item =>
                                <li key="{item.id}" className='list-group-item'>{item.tituloNombre}
                                <button className="btn btn-danger float-end m-1" 
                                onClick={() => {borrarNombre(item.id)}}>Borrar</button>
                                <button className='btn btn-info float-end m-1'
                                onClick={() => {editar(item)}} >Editar</button>
                                </li>
                            )

                        }

                    </ul>
                </div>
                <div className='col'>
                    <h2>Añadir nombres</h2>
                    <form onSubmit={edicion ? editarNombre : agregarNombres} className='form-group'>
                    <input value={nombre} onChange={(e)=> {setNombre(e.target.value)}} className='form-control mb-3' type='text' placeholder='Ingresar Nombre' />
                        {
                            edicion ? (
                                <button className="btn btn-primary" type="button" onClick={editarNombre}>Editar</button>
                            ) : (
                                <button className="btn btn-primary" type="button" onClick={agregarNombres}>Registrar</button>
                            )
                        }
                   
                    </form>
                    {
                        error != null ? (
                           <div className="alert alert-danger ms-0 mt-3 p-2">{error}</div>
                        ):(
                            <div></div>
                        )
                    }
                </div>

            </div>
        </div>
    );
}

export default ListadoNombres;