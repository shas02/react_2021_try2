import {useState, useEffect} from 'react';
import User from './user/User';
import './Users.style.css'
import axiosInstance from '../services/api'

export default function Users() {

    let [users, setUsers] = useState([]);
    let [singleUser, setSingleUser] = useState();

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(value => value.json())
    //         .then(value => {
    //             setUsers([...value])
    //         })
    // }, [])

    useEffect(() => {
        axiosInstance.get('/users').then(value => setUsers([...value.data]))
    }, [])

    const showDetails = (id) => {
        let findedUser = users.find(value => value.id === id);
        setSingleUser(findedUser);
    }

    return (
        <div className={'wrapper'}>
            <div className={'users-box'}>
                {
                    users.map(value => <User key={value.id} item={value} showDetails={showDetails}/>)
                }
            </div>
            <div className={'single-user-box'}>
                {singleUser &&

                <div>
                    <h4>{singleUser.id}. {singleUser.name}</h4>
                    <p>email: {singleUser.email}</p>
                    <p>phone: {singleUser.phone}</p>
                </div>

                }
            </div>
        </div>
    );
}