import React, { useState } from 'react'
import 'firebase/auth';
import { useFirebaseApp, useUser } from 'reactfire';

export default (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();
    const user = useUser();

    //Iniciar sesión
    const submit = async ()=>{
        await firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    const login = async ()=>{
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }

    //Cerrar sesión
    const logout = async ()=>{
        await firebase.auth().signOut();
    }

    return (
        <div>
            {
            !user &&
                <div>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input htmlFor="email" id="email" onChange={ (ev)=> setEmail(ev.target.value) }/>
                    <label htmlFor="password">Contraseña</label>
                    <input htmlFor="password" id="password" onChange={ (ev)=> setPassword(ev.target.value) }/>
                    <button onClick={submit}> Crear Sesión</button>
                    <button onClick={login}> Iniciar Sesión</button>
                </div>
            }
            {
                user && <button onClick={logout}>Cerrar Sesión</button>
            }
        </div>
    )
}
