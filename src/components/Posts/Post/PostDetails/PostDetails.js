import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export default function PostDetails(props) {

    let {match: {url, params: {id}}, location: {state}} = props;

    let [post, setPost] = useState(null);

    useEffect(() => {
        setPost(state);
    }, [id]);

    return (
        <div>
            {post &&
            <div>
                <h3>{post.id}. {post.title}</h3>
                <p>{post.body}</p>
                <div>
                    <Link to={{pathname: `${url}/Comments`}}> Show post's comments</Link>
                </div>
            </div>
            }
        </div>
    );
}