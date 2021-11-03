import {useEffect, useState} from 'react';
import Inventory from './Inventory/Inventory';

export default function Inventories(props) {

    let {match: {url}} = props;

    let [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/inventory')
            .then(value => value.json())
            .then(value =>
                setInventories([...value])
            )
    }, []);

    return (
        <div>
            {
                inventories.map(value => <Inventory key={value.id} item={value} url={url}/>)
            }
        </div>
    );
}