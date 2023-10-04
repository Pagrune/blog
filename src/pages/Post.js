import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Login from '../components/Login';
import jwt_decode from "jwt-decode";

const Post = () => {
    const { id } = useParams(); // Accéder aux paramètres d'URL

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [comments, setComments] =useState([]);
    const [message, setMessage] = useState(
        JSON.parse(localStorage.getItem('commentaires')) || []
    );
    const [isOpen, setOpen] = React.useState(
        JSON.parse(localStorage.getItem('is-open')) || false
    );



    const [userAuthenticated, setUserAuthenticated] = useState(localStorage.getItem('token') !== null);

    const onSubmit = (e) => {
        e.preventDefault();
        const commentText = document.querySelector('#id_message').value;

        var token = localStorage.getItem('token');
        // console.log(token);
        var decoded = jwt_decode(token);
        const author_commentText = decoded.firstName;

        
       

        const newMessages = [...message, { id_comment : id, author: author_commentText, text: commentText }];
        setMessage(newMessages);

        localStorage.setItem('commentaires', JSON.stringify(newMessages));
        setOpen(true);  // Ouvrez la section des nouveaux commentaires ici.

        // document.querySelector('#id_message').value = '';  // Effacez le champ de commentaire après l'envoi.
    };

    useEffect(() => {
        localStorage.setItem('is-open', JSON.stringify(isOpen));
    }, [isOpen]);

    useEffect(()=>{
        axios.get(`https://dummyjson.com/posts/${id}`)
            .then(res => { 
                // console.log(res.data);
                setPosts(res.data);
                setIsloading(false);
            })
    }, []);

    useEffect(()=>{
        axios.get(`https://dummyjson.com/posts/${id}/comments`)
            .then(res => { 
                console.log(res.data);
                setComments(res.data.comments);
                setIsloading(false);
            })
    }, []);




    return (
        <div>
            {/* Affichez les détails de l'article en fonction de l'identifiant */}
            {/* <h1>Détails de l'article {id}</h1> */}
            {isLoading ? (
                <p>Chargement en cours...</p>
            ) : (
                <div className='container'>
                    <Link className='breadcrumb' to={`/news`}>Voir tous les articles</Link>
                    <h2>{posts.title}</h2>
                    <p>{posts.body}</p>
                    <p>{posts.tags}</p>

                    <h3>Commentaires :</h3>
                    <div>
                        {comments.map(comment => (
                            <div className='commentaire' key={comment.id}>
                                <p className='author_comment'>De : {comment.user.username}</p>
                                <p className='my_comment'>{comment.body}</p>
                                
                            </div>
                            
                        ))}
                        {isOpen && (
                            <div >
                               {message
                                .filter(msg => msg.id_comment === id) 
                                .map((msg, index) => (
                                    <div className='commentaire' key={index}>
                                        <p className='author_comment'>{msg.author}</p>
                                        <p className='my_comment'>{msg.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {userAuthenticated ? (
                    <form onSubmit={onSubmit}>
                        {/* <div class="form-group">
                            <label for="exampleInputEmail1">Votre nom</label>
                            <input type="text" class="form-control" id="id_nom_author" aria-describedby="emailHelp" placeholder="Votre nom"></input>
                        </div> */}
                        <div class="form-group">
                            <label for="exampleInputPassword1">Votre commentaire</label>
                            <input type="text" class="form-control" id="id_message" placeholder="Ecrire votre commentaire ici"></input>
                        </div>
                        <button type="submit" className='button'>Ajouter un commentaire</button>
                    </form>
                     ) : (
                        <>
                        <h4>Pour ajouter un commentaire, vous devez être connecté</h4>
                        <Login/>
                        </>
                    )}
                    <div>
                
                </div>
                </div>
            )}
        </div>
    );
};

export default Post;
