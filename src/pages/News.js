import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import url from '../img/news.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Spinner, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import NewsCard from '../components/NewsCard';


const News = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(()=>{
        axios.get('https://dummyjson.com/posts?skip=5&limit=10')
            .then(res => { 
                console.log(res.data.posts);
                setPosts(res.data.posts);
                setIsloading(false);
            })
    }, []);
    return (
        <div>
            <Header title="Dernières nouvelles" description="Lorem ipsum" url={url} />
            <>
            {isLoading ? (
            <>
            <div className='spinner'>
            <Button
                color="primary"
                disabled
                >
                <Spinner style={{
                    height: '3rem',
                    width: '3rem'
                    }}>
                    Loading...
                </Spinner>
                <span>
                    {' '}Loading
                </span>
                </Button>
            </div>
            
          </>
            
            ) : ( 
                <div className='article_grid'>
                    {posts.map((article, index) => (
                        <NewsCard key={index} article={article}></NewsCard>
                    ))}
                </div>
            )}
            </>
        </div>
    );
};

export default News;