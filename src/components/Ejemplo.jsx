import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Ejemplo = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState('Nacho');
    useEffect(() => {
        setTimeout(() => {
            setNombre('Ignacio');
        }, 2000);
        getUsuarios();
    },[])

    const getUsuarios = async () => {
        const res = await axios.get('http://jsonplaceholder.typicode.com/users');
        const users = await res.data;
        setUsuarios(users);
    }

    const { name } = useParams()
    return (
        <div>
            <h1>Ejemplo de {nombre}</h1>
            {name}
            <h1>Lista de users:</h1>
            {
                usuarios.map((item) => (
                    <div>
                        <Link to={`/usuario/${item.id}`} key={item.id}>
                            {item.name} 
                        </Link>
                        -
                        <div key={item.id}>
                            {item.username}
                        </div>
                    </div>

                ))
            }
        </div>
    );
};  //y en el link puedo usar un componente para renderizar cada usuario por separado

export default Ejemplo;