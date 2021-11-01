import {Link} from 'react-router-dom';

export default function Comment({item, url}) {
    return (
        <div>
            {item.id}. {item.name}
            <Link to={url + '/' + item.id}> comment details</Link>
        </div>
    );
}