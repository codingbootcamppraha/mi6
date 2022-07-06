import { useEffect, useState } from 'react'
import axios from 'axios';

const StatusFilter = ({ selectedStatus, setSelectedStatus }) => {

    const [statuses, setStatuses] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/statuses');
            setStatuses(response.data);
        } catch (error) {
            console.log(error); // information about the error
            console.log(error.response); // the response object from the failed request
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        setSelectedStatus(e.target.getAttribute("data-status"));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='status-filter'>
            {
                statuses.map((status) => {
                    return <button className={"status-filter__status" + (selectedStatus == status.id ? " status-filter__status_selected" : '')} data-status={status.id} onClick={(e) => { handleClick(e) }}>{status.name}</button>
                })
            }
        </div>
    )
}

export default StatusFilter