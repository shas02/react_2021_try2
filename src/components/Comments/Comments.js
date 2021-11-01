import {useEffect, useState} from 'react';
import Comment from './Comment/Comment';

export default function Comments(props) {
    let {match: {url}} = props;

    let [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments([...value]))
    }, []);

    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value} url={url}/>)}
        </div>
    );
}