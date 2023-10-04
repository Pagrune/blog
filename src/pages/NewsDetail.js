import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const {slug} = useParams();
    return (
        <div>
            détail
            {slug}
        </div>
    );
};

export default NewsDetail;