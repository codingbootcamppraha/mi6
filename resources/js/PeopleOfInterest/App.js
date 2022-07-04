import { useEffect, useState } from 'react'

const App = () => {

    const [data, setData] = useState(null);

    const fetchData = async () => {
        const response = await fetch('/api/people-of-interest')
        const parsedResponse = await response.json()
        console.log(parsedResponse)
        setData(parsedResponse)
    }

    useEffect(fetchData, [])

    return (
        data == null ? 
        <h1>Loading</h1>
        :
        <div>
            {data.map((person) => {
                return <>
                    <p>{person.name} is {person.occupation}</p>
                    <p>Known Aliases:</p>
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