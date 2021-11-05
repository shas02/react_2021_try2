import {useEffect, useState} from 'react';

export default function CommentDetails(props) {

    let {match: {params: {id}}, location: {state}} = props;

    let [comment, setComment] = useState(null);

    useEffect(() => {
        setComment(state);
    }, [id]);

    return (
        <div>
            {
                comment &&
                <div>
                    <h3>{comment.id}. {comment.name}</h3>
                    <p>Email: {comment.email}</p>
                    <p>Comment: {comment.body}</p>
                </div>
            }
        </div>
    );
}