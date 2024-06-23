import { useEffect, useState } from "react"


const Notess = () => {

    const [allnotes, setAllNotes] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/notes").then((response) => response.json()).then(data => setAllNotes(data))
    }, [])
    return (
        <div>
            <h1>All notes</h1>
            {allnotes && allnotes.map(ele => {
                return (
                    <div key={ele.id}>
                        <h3>{ele.title}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Notess