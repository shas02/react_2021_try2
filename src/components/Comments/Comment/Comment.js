import {Link} from 'react-router-dom';

export default function Comment({item, url}) {
    return (
        <div>
            {item.id}. {item.name}
            <Link to={{pathname: `${url}/${item.id}`, state: item}}> comment details</Link>
        </div>
    );
}