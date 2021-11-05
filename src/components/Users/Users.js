import {useEffect, useState} from 'react';
import User from './User/User';
import UserDetails from './User/UserDetails/UserDetails';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default function Users(props) {

    let {match: {url}} = props;

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value =>
                setUsers([...value])
            )
    }, []);


    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value} url={url}/>)
            }
        </div>
    );
}