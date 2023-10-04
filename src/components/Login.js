import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('https://dummyjson.com/auth/login', {
            username,
            password
        })
        .then(response => {
            // Si l'authentification réussit, stockez les informations d'authentification dans le localStorage
            localStorage.setItem('token', response.data.token);
            // Redirigez l'utilisateur vers la page de commentaire (ou autre page protégée)
            window.location.reload(); // Rafraîchissez la page pour re-render le composant CommentForm
        })
        .catch(error => {
            // Gérez les erreurs d'authentification ici
            console.error("Erreur d'authentification :", error);
        });
    };

    return (
        <div className='connexion'>
            <h2>Connexion</h2>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Nom d'utilisateur</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Mot de passe</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;