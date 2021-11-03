import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Characters from './components/Сharacters/Сharacters';
import CharacterDetails from './components/Сharacters/Сharacter/СharactersDetails/СharacterDetails';
import Inventories from './components/Inventories/Inventories';
import InventoryDetails from './components/Inventories/Inventory/Inventory';

function App() {
    return (
        <Router>

            <div className="App">

                <div className='menubar'>
                    <Link to={'/'}>Home</Link>
                    <br/>
                    <Link to={'/Characters'}>Characters</Link>
                    <br/>
                    <Link to={'/Inventories'}>Inventories</Link>
                    <br/>

                </div>

                <br/>

                <div className={'page'}>
                    <Switch>
                        <Route exact path={'/'} render={() => <div>Home page</div>}/>
                        <Route exact path={'/Characters'} component={Characters}/>
                        <Route path={'/Characters/:id'} component={CharacterDetails}/>
                        <Route exact path={'/Inventories'} component={Inventories}/>
                        <Route path={'/Inventories/:id'} component={InventoryDetails}/>
                    </Switch>
                </div>
            </div>

        </Router>


    );
}

export default App;
