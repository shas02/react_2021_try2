import {Link} from 'react-router-dom';

export default function User({item, url}) {

    return (
        <div>
            <img src={item.avatar} alt="avatar"/>
            <h3>{item.id}. {item.first_name} {item.last_name}</h3>
            <p>{item.email}</p>
            <Link to={{pathname: `${url}/${item.id}`, state: item}}>User details</Link>
        </div>
    );
}