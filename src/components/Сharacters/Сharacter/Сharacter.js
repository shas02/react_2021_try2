import {Link} from 'react-router-dom';

export default function Character({item, url}) {

    let first;
    let middle;
    let last;

    if (item.name) {
        first = item.name.first;
        middle = item.name.middle;
        last = item.name.last;


    } else {
        first = 'Noname';
        middle = '';
        last = '';
    }


    return (
        <div>
            <img src={item.images.main} alt="photo"/>
            <h3>
                {item.id}. {first} {middle} {last}
            </h3>
            <div>
                <Link to={{pathname: `${url}/${item.id}`, state: item}}>Show character details</Link>
            </div>
            <br/>
        </div>
    );
}