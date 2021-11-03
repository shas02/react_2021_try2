import {useEffect, useState} from 'react';
import Character from './Сharacter/Сharacter';

export default function Characters(props) {

    let {match: {url}} = props;

    let [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch('https://api.sampleapis.com/futurama/characters')
            .then(value => value.json())
            .then(value =>
                setCharacters([...value])
            )
    }, []);

    return (
        <div>
            {
                characters.map(value => <Character key={value.id} item={value} url={url}/>)
            }
        </div>
    )
}
