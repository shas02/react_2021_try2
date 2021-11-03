import {useEffect, useState} from "react";

export default function CharacterDetails(props) {

    let {match: {params: {id}}, location: {state}} = props;

    let [character, setCharacter] = useState(null);

    useEffect(() => {
        setCharacter(state);
    }, [id])

    return (
        <div>
            {character && <div>
                {character.images ? <img src={character.images.main} alt=""/> : <img
                    src='https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                    alt='/'/>}
                <br/>
                {character.name ?
                    <div>Name: {character.name.first} {character.name.middle} {character.name.last}</div> :
                    <div>Name: No name</div>}
                <br/>
                Age: {character.age}.
                <br/>
                Gender: {character.gender}.
                <br/>
                Species: {character.species}.
                <br/>
                Home planet: {character.homePlanet}
            </div>
            }
        </div>
    );
}