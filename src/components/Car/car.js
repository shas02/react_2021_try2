export default function Car(props) {
    let {model, deskription, power, volume} = props;

    return (
        <div>
            <h2>{model}</h2>
            <p>{deskription}</p>
            <p>{power} {volume}</p>
        </div>
    )
}