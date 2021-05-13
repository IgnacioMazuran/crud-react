import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Usuario = () => {
    const {id} = useParams();
    const [usuario, setUsuario] = useState([]);
    useEffect(() => {
        getUsuario();
    })  //2do param un array vacio??

    const getUsuario = async () => {
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
        const users = await res.data;
        setUsuario(users);
    }
    return (
        <div>
            <h4>Usuario</h4>
            <p>Nombre: {usuario.name} </p>
            <p>E-mail: {usuario.email} </p>
        </div>
    );
};

export default Usuario;