import {useEffect, useState} from 'react';
import User from './User/User';
import './Users.style.css';

export default function Users(props) {


    let {match: {url}} = props;

    let [total_pages, setTotal_pages] = useState(null);

    let [page, setPage] = useState(1);

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + page)
            .then(value => value.json())
            .then(value => {
                setTotal_pages(value.total_pages);
                setUsers([...value.data]);
            })

    }, [page])

    let previosPage = function () {
        if (page - 1 > 0) {
            setPage(--page);
            return;
        }
        setPage(total_pages)
    }

    let nextPage = function () {
        if (page + 1 <= total_pages) {
            setPage(++page);
            return;
        }
        setPage(1);
    }


    return (
        <div>
            <div className={'Users'}>

                {
                    users.map(value => <User key={value.id} item={value} url={url}/>)
                }
            </div>
            <br/>
            <div className={'Buttons'}>
                <button onClick={previosPage}>Previos page</button>
                <button onClick={nextPage}>Next page</button>
            </div>
        </div>
    );
}

