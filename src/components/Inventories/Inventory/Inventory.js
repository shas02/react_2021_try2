import {Link} from 'react-router-dom';

export default function Inventory({item, url}) {

    return (
        <div>
            <h3>
                {item.id}. {item.title}
            </h3>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
            <Link to={{pathname: `${url}/${item.id}`, state: item}}>Show details</Link>
        </div>
    );
}