import {useState, useEffect} from 'react';

export default function Posts(props) {

    let {match: {url}} = props;

    let [posts, setPosts] = useState([]);
    let [postId, setPostId] = useState(1);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts([...value]))
    }, []);


    function onSelect(event) {
        setPostId(event.target.value);
    }

    return (
        <div>
            <form>
                <select name="post" onChange={onSelect}>
                    {posts.map(value => <option key={value.id} value={value.id}>{value.id}. {value.title}</option>)}
                </select>
                <form method="LINK" action={`${url}/${postId}`}>
                    <input type="submit" value="Show post details"/>
                </form>

            </form>
        </div>
    );
}