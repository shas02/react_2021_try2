import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import PostDetails from './components/Posts/Post/PostDetails/PostDetails';
import Comments from './components/Comments/Comments';
import CommentDetails from './components/Comments/Comment/CommentDetails/CommentDetails';

function App() {
    return (
        <Router>

            <div className="App">

                <div className='menubar'>
                    <Link to={'/'}>Home</Link>
                    <br/>
                    <Link to={'/Users'}>Users</Link>
                    <br/>
                    <Link to={'/Posts'}>Posts</Link>
                    <br/>
                    <Link to={'/Comments'}>Comments</Link>
                    <br/>
                </div>

                <h1></h1>

                <div className={'page'}>
                    <Switch>
                        <Route exact path={'/'} render={() => <div>Home page</div>}/>
                        <Route path={'/Users'} component={Users}/>
                        <Route exact path={'/Posts'} component={Posts}/>
                        <Route path={'/Posts/:id'} component={PostDetails}/>
                        <Route exact path={'/Comments'} component={Comments}/>
                        <Route path={'/Comments/:id'} component={CommentDetails}/>
                    </Switch>
                </div>
            </div>

        </Router>


    );
}

export default App;
