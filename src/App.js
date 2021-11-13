import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    startPostsLoading,
    setPosts,
    stopPostsLoading,
    setPostsError,
    setComments,
    setCommentsError,
    startCommentsLoading,
    stopCommentsLoading
} from './redux'

const Comments = () => {
    const data = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    const commentsFetcher = async () => {
        try {
            dispatch(startCommentsLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/comments')
            const data = await resp.json();

            dispatch(setComments(data));
        } catch (e) {
            console.log(e);

            dispatch(setCommentsError('failed to fetch data'))
        } finally {
            dispatch(stopCommentsLoading())
        }
    }
    useEffect(() => {
        commentsFetcher();
    }, []);

    if (data.isCommentsLoading) {
        return (
            <h1>Comments are loading...</h1>
        )
    }

    return (
        <div>
            {data.comments.map(({id, name, body}) => (
                <div key={id}>
                    <p>{name}</p>
                    <p>{body}</p>
                </div>
            ))}
        </div>
    )
}
const Posts = () => {
    const data = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    const postsFetcher = async () => {
        try {
            dispatch(startPostsLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await resp.json();

            dispatch(setPosts(data));
        } catch (e) {
            console.log(e);

            dispatch(setPostsError('failed to fetch data'))
        } finally {
            dispatch(stopPostsLoading())
        }
    }
    useEffect(() => {
        postsFetcher();
    }, []);

    if (data.isPostsLoading) {
        return (
            <h1>Posts are loading...</h1>
        )
    }

    return (
        <div>
            {data.posts.map(({id, title, body}) => (
                <div key={id}>
                    <p>{title}</p>
                    <p>{body}</p>
                    <hr/>
                </div>
            ))}
        </div>
    )
}

function App() {
    const [postsIsOn, setPostsIsOn] = React.useState(false);
    const [commentsIsOn, setCommentsPostsIsOn] = React.useState(false);

    return (
        <div className="App">
            <div>
                <h2>Posts</h2>
                <button onClick={() => {
                    setPostsIsOn(prev => !prev)
                }
                }>toggle
                </button>
                {postsIsOn && <Posts/>}
                <button onClick={() => {
                    setPostsIsOn(prev => !prev)
                }
                }>toggle
                </button>
            </div>
            <hr/>
            <div>
                <h2>Comments</h2>
                <button onClick={() => {
                    setCommentsPostsIsOn(prev => !prev)
                }
                }>toggle
                </button>
                {commentsIsOn && <Comments/>}
                <button onClick={() => {
                    setCommentsPostsIsOn(prev => !prev)
                }
                }>toggle
                </button>
            </div>
        </div>
    );
}

export default App;