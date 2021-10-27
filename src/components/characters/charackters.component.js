import './charackters.style.css'

function CharacktersComponent(props) {
    let cls = props.description === 'Ksenobait' ? 'Ksenobait-class' : 'Melisa-class';

    return <div className={cls}>
        <h2>{props.description}</h2>
        <img
            src={props.image}
            alt=""/>

    </div>;
}

export default CharacktersComponent;