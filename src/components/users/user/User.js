export default function User({item, showDetails}) {
    return (
        <div>
            {item.id} -
            {item.name} -
            {item.email}
            <button onClick={() => showDetails(item.id)}>details</button>
        </div>
    );
}