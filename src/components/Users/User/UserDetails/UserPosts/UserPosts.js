import {useEffect, useState} from 'react';

export default function UserPosts(props) {

    let {match: {url, params: {id}}} = props;

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => value.filter(value => value.userId == id))
            .then(value => setPosts([...value]))
    }, [id]);

    return (
        <div>
            {
                posts.map(value =>
                    <div key={value.id}>

                        <h4>{value.id}. {value.title}</h4>
                        <p>userId: {value.userId}</p>
                        <p>{value.body}</p>
                    </div>)
            }
        </div>
    )
}