import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Users from './Components/Users/Users';
import UserDetails from './Components/Users/User/UserDetails/UserDetails';


function App() {
    return (
        <div className="App">
            <Router>

                <div className={'menu'}>
                    <Link to={'/'}>Home</Link>
                    <br/>
                    <Link to={{pathname: '/Users', search: '?page=1'}}>Users</Link>
                    <br/>
                </div>

                <div className={'page'}>
                    <Switch>
                        <Route exact path={'/'} component={Users}/>
                        <Route exact path={'/Users'} component={Users}/>
                        <Route exact path={'/Users/:id'} component={UserDetails}/>
                    </Switch>
                </div>

            </Router>
        </div>
    );
}

export default App;
