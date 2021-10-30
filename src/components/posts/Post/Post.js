export default function Post({item, showDetails}) {
    return (
        <div>
            {item.id} -
            {item.title} -
            <button onClick={() => showDetails(item.id)}>details</button>
        </div>
    );
}