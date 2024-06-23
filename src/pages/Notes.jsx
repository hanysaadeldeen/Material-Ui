import { Button, ButtonGroup, Container, TextField, Typography, } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useState } from "react";
import { Tune } from "@mui/icons-material";


// import makeStyles from '@mui/styles/makeStyles';

// const useStyles = makeStyles({
//   field: {
//     marginTop: 20,
//     marginBottom: 20,
//     display: 'block'
//   }
// })





export default function Notes() {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [descError, setDescError] = useState(false)
  // const Clases = useStyles()


  const getData = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDescError(false)
    if (title !== "" && desc !== "") {
      console.log("title : ", title, "desc : ", desc);
      setTitleError(false)
      setDescError(false)
    } else {
      if (title === "" && desc === "") {
        setTitleError(true)
        setDescError(true)
      }
      title === "" ? setTitleError(Tune) : setTitleError(false)
      desc === "" ? setDescError(Tune) : setDescError(false)

    }
  }
  return (

    <Container>

      <Typography
        variant="h6"
        component="h1"
        color="secondary"
        align="center"
      >
        Learn Material-Ui
      </Typography>
      <Button variant="contained" color="primary" size="medium">Click here</Button>
      <ButtonGroup color="secondary" variant="outlined" size="medium">
        <Button type="submit"
          onClick={() => console.log("you click one")}
        >one</Button>
        <Button type="submit"
          onClick={() => console.log("you click two")}
        >Two</Button>
        <Button type="submit"
          onClick={() => console.log("you click three")}
        >three</Button>


      </ButtonGroup>
      <Button variant="outlined"
        startIcon={<DeleteIcon />}>
        Delete
      </Button>

      <Button variant="contained"
        endIcon={<SendIcon />}>
        Send
      </Button>
      <HomeOutlinedIcon color="secondary" fontSize="large" />
      <HomeOutlinedIcon color="primary" fontSize="smalll" />

      <form noValidate autoComplete="off" onSubmit={getData}>

        <TextField id="outlined-basic"
          onChange={(e) => setTitle(e.target.value)}
          // className={Clases.field}
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          size="small"
          label="Outlined"
          variant="outlined"
          error={titleError}
        />

        <TextField id="filled-basic"
          onChange={(e) => setDesc(e.target.value)}
          color="secondary"
          fullWidth
          required
          size="small"
          label="Filled"
          variant="filled"
          error={descError}
        />
        <Button
          type="submit"
          color="secondary"
          variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </Container>
  )
}
