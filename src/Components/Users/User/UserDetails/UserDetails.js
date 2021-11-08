import {useEffect, useState} from 'react';

export default function UserDetails(props) {
    let {match: {params: {id}}, location: {state}} = props;

    let [user, setUser] = useState(null)
    useEffect(() => {
        fetch('https://reqres.in/api/users/' + id)
            .then(value => value.json())
            .then(value => setUser({...value.data}));
    }, [id])

    return (
        <div>
            {
                user &&
                <div>
                    <img src={user.avatar} alt="avatar"/>
                    <h3>{user.id}. {user.first_name} {user.last_name}</h3>
                    <p>{user.email}</p>
                </div>
            }
        </div>
    );
}