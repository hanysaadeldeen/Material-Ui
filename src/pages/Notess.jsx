import { Container, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import NoteCard from "../components/NoteCard"


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
    return (
        <Container>

            <h1>All notes</h1>
            <Grid container spacing={3}>


                {allnotes && allnotes.map(ele => {
                    return (
                        <Grid key={ele.id} item sm={12} md={6} lg={4}>
                            <div >
                                <NoteCard info={ele} DeleteNote={DeleteNote} />

                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Notess