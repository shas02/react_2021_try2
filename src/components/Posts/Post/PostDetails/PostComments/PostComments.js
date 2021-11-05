import {useEffect, useState} from 'react';

export default function PostComments(props) {

    console.log(props)
    let {match: {url, params: {id}}} = props;

    let [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => value.filter(value => value.postId == id))
            .then(value => setComments([...value]))
    }, [id]);

    return (
        <div>
            {
                comments.map(value =>
                    <div key={value.id}>
                        <h4>{value.id}. {value.name}</h4>
                        <p>Email: {value.email}</p>
                        <p>Comment: {value.body}</p>
                    </div>)
            }
        </div>
    )
}