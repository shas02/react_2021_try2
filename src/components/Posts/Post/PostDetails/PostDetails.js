import {useEffect, useState} from 'react';

export default function PostDetails(props) {
    let {match: {params: {id}}} = props;

    let [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => setPost({...value}))
    }, [post]);

    return (
        <div>
            {post &&
            <div>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
            </div>
            }
        </div>
    );
}