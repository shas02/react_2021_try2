import {useState, useEffect} from 'react';
import Post from './Post/Post';
import './Posts.style.css';
import axiosInstance from '../services/api';

export default function Users() {

    let [posts, setPosts] = useState([]);
    let [singlePost, setSinglePost] = useState();

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(value => value.json())
    //         .then(value => {
    //             setPosts([...value])
    //         })
    // }, [])

    useEffect(() => {
        axiosInstance.get('/posts').then(value => setPosts([...value.data]))
    }, [])


    const showDetails = (id) => {
        let findedPost = posts.find(value => value.id === id);
        setSinglePost(findedPost);
    }

    return (
        <div className={'wrapper'}>
            <div className={'posts-box'}>
                {
                    posts.map(value => <Post key={value.id} item={value} showDetails={showDetails}/>)
                }
            </div>
            <div className={'single-post-box'}>
                {singlePost &&

                <div>
                    <h4>{singlePost.id}. {singlePost.title}</h4>
                    <p>{singlePost.body}</p>

                </div>

                }
            </div>
        </div>
    );
}