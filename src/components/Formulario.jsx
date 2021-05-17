import React,{useState,useEffect} from 'react';
import {store} from '../firebaseReg';

const Formulario = () => {
    const [idUser, setIdUser] = useState('');
    const [nombre,setNombre] = useState('');
    const [telefono,setTelefono] = useState('');
    const [usuariosAgenda,setUsuariosAgenda] = useState([]);
    const [error,setError] = useState('');
    const [edicion, setEdicion] = useState(null);

    useEffect(()=> {
        const getUsuarios = async () =>{
            const {docs} = await store.collection('agenda').get();
            const arreglo = docs.map(item => ({
                id:item.id,
                ...item.data()
            }))
            setUsuariosAgenda(arreglo);
        }
        getUsuarios();
    },[])

    const setUsuarios = async (e) => {
        e.preventDefault();
        if(!nombre.trim()){
            setError('El campo nombre esta vacío');
        }
        if(!telefono.trim()){
            setError('El campo numero esta vacío');
        }
        const usuario = {
            nombre:nombre,
            telefono: telefono
        }
        try{
            // eslint-disable-next-line
            const data = await store.collection('agenda').add(usuario);
            const {docs} = await store.collection('agenda').get();
            const arreglo = docs.map(item => ({
                id:item.id,
                ...item.data()
            }))
            setUsuariosAgenda(arreglo);
            alert('Usuario creado');
        } catch(e){
            console.log(e);
        }
    }

    const updateUsuario = async (id) => {
        
        try {
            const data =  await store.collection('agenda').doc(id).get();
            const {nombre,telefono} = data.data();
            setNombre(nombre);
            setTelefono(telefono);
            setIdUser(id);
            setEdicion(true);
        } catch (error) {
            console.log(error);
        }

    }
    const borrarUsuario = async(id) => {
        try {
            await store.collection('agenda').doc(id).delete();
            const {docs} = await store.collection('agenda').get();
            const arreglo = docs.map(item => ({
                id:item.id,
                ...item.data()
            }))
            setUsuariosAgenda(arreglo);
        } catch (error) {
            console.log(error)
        }
    }

    const setUpdate = async (e) => {
        e.preventDefault();
        if(!nombre.trim()){
            setError('El campo nombre esta vacío');
        }
        if(!telefono.trim()){
            setError('El campo numero esta vacío');
        }
        const usuarioNuevo = {
            nombre:nombre,
            telefono: telefono
        }
        try{
            
            await store.collection('agenda').doc(idUser).set(usuarioNuevo);
            const {docs} = await store.collection('agenda').get();
            const arreglo = docs.map(item => ({
                id:item.id,
                ...item.data()
            }))
            setUsuariosAgenda(arreglo);
        } catch(e){
            console.log(e);
        }
        setNombre('');
            setTelefono('');
            setIdUser('');
            setEdicion(false);
    }
    

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    Formulario Usuarios
            
                <form onSubmit={ edicion ? setUpdate: setUsuarios} className='form-group'>
                    <input value={nombre} onChange={(e)=> {setNombre(e.target.value)}} className='form-control mt-2' type="text" placeholder='Ingresar nombre' />
                    <input value={telefono} onChange={(e)=> {setTelefono(e.target.value)}} type="text" className='form-control mt-2' placeholder='Ingresar numero' />
                    <div className="d-grid gap-2 mt-3">
                        {
                            edicion ? (
                                <button className="btn btn-primary" type="button" onClick={setUpdate}>Editar</button>
                                ) : (
                                    <button className="btn btn-primary" type="button" onClick={setUsuarios}>Registrar</button>
                                )
                        }
                    </div>
                 </form>
                </div>
                
                <div className='col'>
                    <h2>Listado Registrados</h2>
                    <ul className='list-group'>
                    {
                        usuariosAgenda.length !== 0 ? (
                            
                                usuariosAgenda.map(item => (
                                    <li className='list-group-item' key={item.id}>{item.nombre} -- {item.telefono}
                                    
                                    <button onClick={(id) => {borrarUsuario(item.id)}} className='btn btn-danger float-end'>Borrar usuario</button>
                                    <button onClick={(id) => {updateUsuario(item.id)}} className='btn btn-primary float-end me-2'>Actualizar usuario</button>
                                    </li>
                                    
                                ))
                            
                        ) : (
                            <span>No existen usuarios registrados</span>
                        )
                    }
                    </ul>
                </div>
                {
                    error ? (
                        <div>
                            <p>{error}</p>
                        </div>
                    ) : (
                        <span></span>
                    )
                }
            </div>
        </div>
    );
};

export default Formulario;