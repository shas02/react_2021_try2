import {useEffect, useState} from "react";

export default function InventoryDetails(props) {

    let {match: {params: {id}}, location: {state}} = props;

    let [inventory, setInventory] = useState(null);

    useEffect(() => {
        setInventory(state);
    }, [id])


    return (
        <div>
            {inventory &&
            <div>
                <h3>
                    {inventory.id}. {inventory.title} {inventory.category}
                </h3>
                <h3>Category: {inventory.category}</h3>
                <h3>Price: {inventory.price}</h3>
                <h3>Stock: {inventory.stock}</h3>
                <p>{inventory.description}</p>
                <p>Slogan: {inventory.slogan}</p>
            </div>

            }
        </div>
    );
}