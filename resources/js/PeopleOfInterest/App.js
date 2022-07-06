import { useEffect, useState } from 'react'
import StatusFilter from './StatusFilter';
import axios from 'axios';

const App = () => {

    const [data, setData] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/people-of-interest?status_id=' + encodeURIComponent(selectedStatus));
            setData(response.data);
        } catch (error) {
            console.log(error); // information about the error
        }
    }

    useEffect(() => {
        fetchData();
    }, [selectedStatus])

    return (
        data == null ?
            <h1>Loading</h1>
            :
            <div>
                <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
                {data.map((person) => {
                    return <>
                        <p>{person.name} is {person.occupation}</p>
                        {person.aliases.lenght > 0 ? <p>Known Aliases:</p> : ''}
                        <ul>
                            {person.aliases.map((alias) => (
                                <li>{alias.alias}</li>
                            ))}
                        </ul>
                    </>
                })}

            </div>
    )
}

export default App