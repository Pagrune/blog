import React from 'react';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import {Link} from 'react-router-dom';

const NewsCard = ({article}) => {
    return (

            <Card
                        style={{
                            width: '18rem',
                            height: '660px'
                        }}
                        >
                        <img
                            alt="Sample"
                            src="https://picsum.photos/300/200"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                            {article.title}
                            </CardTitle>
                            <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                            >
                            {article.tags}
                            </CardSubtitle>
                            <CardText>
                            {article.body}
                            </CardText>
                            <Button className='bouton'>
                                <Link to={`/post/${article.id}`}>Voir l'article</Link>

                            </Button>
                        </CardBody>
                    </Card>

    );
};

export default NewsCard;