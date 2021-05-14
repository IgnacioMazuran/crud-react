import React,{useState} from 'react';
import {auth} from '../../firebaseReg';
const Login = () => {

    const [email,setEmail] = useState('');
    const [pw,setPw] = useState('');

    const registro = async e => {
        e.preventDefault()
        try{
            await auth.createUserWithEmailAndPassword(email,pw);
            alert('Usuario registrado con Éxito');
        } catch(e) {
            console.log(e);
        }
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
                    </form>
                
            </div>
            <div className='col'></div>
        </div>
    );
};

export default Login;