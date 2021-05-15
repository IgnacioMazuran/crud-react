import React,{useState} from 'react';
import {useHistory } from 'react-router-dom';
import {auth} from '../../firebaseReg';
const Login = () => {
    const historial = useHistory();
    const [email,setEmail] = useState('');
    const [pw,setPw] = useState('');
    const [msgerror,setMsgError] = useState('');

    const registro = async e => {
        e.preventDefault()
        await auth.createUserWithEmailAndPassword(email,pw)
        .then(r =>{ 
            historial.push('/');
            alert('Logeado con éxito')
        })
        .catch(e => {
            if(e.code === 'auth/invalid-email'){
                setMsgError('Email incorrecto');
            }
            if(e.code === 'auth/weak-password'){
                setMsgError('La contraseña es débil: debe tener 6 o más caracteres');
            }
        }) 
    }

    const loginUser = () => {
        auth.signInWithEmailAndPassword(email,pw)
        .then(r =>{ 
            historial.push('/');
            alert('Logeado con éxito')
        })
        .catch((err) =>{ 
            if(err.code === 'auth/wrong-password'){
                setMsgError('Password incorrecta');
            }
        })
    }

    return (
        
        <div className='row mt-5'>
            <div className='col'></div>
                <div className='col'>
                    <form className='form-group'>
                        <input onChange={(e)=> {setEmail(e.target.value)}} 
                        type="text" className='form-control'
                        placeholder='Introduce tu email'/>
                        <input type="password" onChange={(e)=> {setPw(e.target.value)}}
                        className='form-control'
                        placeholder='Introduce tu contraseña'/>
                         <button type="button" onClick={registro} className="btn btn-dark col-12 mt-4">Registrar Usuario</button>
                         <button type="button" onClick={loginUser} className="btn btn-primary col-12 mt-2">Iniciar Sesión</button>

                    </form>
                    
                {
                    msgerror != null ? (
                        <div className='mt-3'>{msgerror}</div>
                    ) : (
                        <span></span>
                    )
                }
            </div>
            <div className='col'></div>
        </div>
    );
};

export default Login;