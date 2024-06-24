import { Container, Grid, Paper } from "@mui/material"
import { useEffect, useState } from "react"


const Notess = () => {

    const [allnotes, setAllNotes] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/notes").then((response) => response.json()).then(data => setAllNotes(data))
    }, [])
    return (
        <Container>

            <h1>All notes</h1>
            <Grid container>


                {allnotes && allnotes.map(ele => {
                    return (
                        <Grid key={ele.id} item sm={12} md={6} lg={4}>
                            <div >
                                <Paper>
                                    <h3>{ele.title}</h3>
                                    <p>{ele.details}</p>
                                    <p>{ele.category}</p>
                                </Paper>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Notess