import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Posts from './Posts/Posts';
import PostDetails from './Posts/PostDetails/PostDetails';

function App() {
    return (
        <div className="App">
            <Router>
                <Link to={'/'}>Home page</Link>
                <br/>
                <Link to={'/Posts'}>Posts</Link>

                <Switch>
                    <Route exact path={'/'} render={() => <div>Home page must be here</div>}/>
                    <Route exact path={'/Posts'} render={(props) => <Posts {...props}/>}/>
                    <Route path={'/Posts/:id'} component={PostDetails}/>
                </Switch>
            </Router>


        </div>
    );
}

export default App;
