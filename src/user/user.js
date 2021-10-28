export default function User(props) {
    let {id, name, username, email, phone, website} = props;

    let allTexts = document.getElementsByClassName('userInformation');


    const showInformation = (ev) => {
        for (let i = 0; i < allTexts.length; i++) {
            if (ev.target.classList[1] === allTexts[i].classList[1]) {
                if (allTexts[i].hidden === true) {
                    allTexts[i].hidden = false;
                    return;
                }
                allTexts[i].hidden = true;
            }
        }
    }


    return (
        <div className={['userDiv', id].join(' ')}>
            <h2>{id}. {name}</h2>
            <button className={['userInformationButton', id].join(' ')} onClick={showInformation}>Розгорнути коментар
            </button>
            <div className={['userInformation', id].join(' ')} hidden={true}>
                <p>Username: {username}</p>
                <p>email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
            </div>
        </div>
    )
}