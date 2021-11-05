import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


export default function UserDetails(props) {

    let {match: {url, params: {id}}, location: {state}} = props;

    let [user, setUser] = useState(null);

    useEffect(() => {
        setUser(state);
    }, [id]);

    return (
        <div>
            {user &&
            <div>
                <h3>{user.id}. {user.name}</h3>
                <p>email:{user.email}</p>
                <div>
                    <Link to={{pathname: `${url}/Posts`}}> Show user's posts</Link>
                </div>
            </div>
            }
        </div>
    );
}