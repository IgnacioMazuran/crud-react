import React, { useState } from 'react';
import uniqid from 'uniqid';

function ListadoNombres(props) {

    const [nombre, setNombre] = useState('');
    const [listanombres, setListaNombres] = useState([]);

    const agregarNombres = (e) => {
        e.preventDefault();
        const nuevoNombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setListaNombres([...listanombres, nuevoNombre]);
        setNombre('');
    }

    return (
        <div>
            <h2 class="d-flex justify-content-center">App</h2>
            <div className='row'>
                <div className='col'>
                    <h2>Nombres</h2>
                    <ul className='list-group'>

                        {
                            listanombres.map(item =>
                                <li key="{item.id}" className='list-group-item'>{item.tituloNombre}</li>
                            )

                        }

                    </ul>
                </div>
                <div className='col'>
                    <h2>Añadir nombres</h2>
                    <form onSubmit={(e) => agregarNombres(e)} className='form-group'>
                        <input onChange={(e) => { setNombre(e.target.value) }} className='form-control mb-3' type='text' placeholder='Ingresar Nombre' value={nombre}/>
                        <input class="btn btn-success" type="submit" placeholder='Registrar Nombre' />
                    </form>
                </div>

            </div>
        </div>
    );
}

export default ListadoNombres;