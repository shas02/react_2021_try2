import './App.css';
import {useState} from 'react';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


function App() {

    let [counter, setCounter] = useState(0);

    const increment = () => {

        setCounter(++counter);
    }

    const decrement = () => {

        setCounter(--counter);
    }

    const reset = () => {

        setCounter(0);
    }

    return (
        <div className="App">
            <div><h2>{counter}</h2>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
            </div>

            {/*<h1></h1>*/}
            {/*<Users/>*/}
            {/*<h1></h1>*/}
            {/*<Posts/>*/}

            <Router>
                <Link to={'/users'}>to users</Link>
                <br/>
                <Link to={'/posts'}>to posts</Link>
                <Switch>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                    <Route path={'/posts'} render={() => (<Posts/>)}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
