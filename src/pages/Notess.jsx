import { Container } from "@mui/material"
import { useEffect, useState } from "react"
import NoteCard from "../components/NoteCard"
import Masonry from 'react-masonry-css'


const Notess = () => {
    const [allnotes, setAllNotes] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/notes").then((response) => response.json()).then(data => setAllNotes(data))
    }, [])

    const DeleteNote = async (id) => {
        console.log(id);
        await fetch("http://localhost:8000/notes/" + id, {
            method: "DELETE"
        }
        )
        const newNotes = allnotes.filter((note) => note.id !== id)
        setAllNotes(newNotes)
    }

    const brackPoint = {
        default: 3,
        1100: 2,
        700: 1
    }
    return (
        <Container>

            <h1>All notes lorem</h1>
            <Masonry
                breakpointCols={brackPoint}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {allnotes && allnotes.map(ele => {
                    return (
                        <div key={ele.id}>
                            <NoteCard info={ele} DeleteNote={DeleteNote} />
                        </div>
                    )
                })}
            </Masonry>
        </Container>
    )
}

export default Notess