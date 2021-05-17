import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseReg';
import { useHistory } from 'react-router-dom';


const Menu = () => {
    const historial = useHistory();
    const [usuario, setUsuario] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(user.email);
            }
        })
    }, [])

    const cerrarSesion = () => {
        auth.signOut();
        setUsuario(null);
        historial.push('/');

    }

    return (
        <div>

            <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-1 ' >
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/formulario'>Formulario</Link>
                    </li>
                    <li className='nav-item'>{
                        !usuario ? (
                            <Link className='nav-link' to='/admin'>Admin</Link>

                        ) : (
                            <span></span>
                        )}
                    </li>
                    <li className='nav-item'>
                        {
                            !usuario ? (
                                <Link className='nav-link' to='/login'>Login</Link>

                            ) : (
                                <span></span>
                            )
                        }
                    </li>
                </ul>


                <form className="container-fluid">
                </form>

                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <form class="d-flex">{
                            usuario ? (
                                <button onClick={cerrarSesion} className='btn btn-danger float-right'>Cerrar Sesión</button>
                            ) :
                                (
                                    <span></span>
                                )
                        }


                        </form>
                    </div>
                </nav>
            </nav>


        </div>


    );
};

export default Menu;