import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography, } from "@mui/material";

import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { Tune } from "@mui/icons-material";


import { useNavigate } from "react-router-dom"

export default function Create() {

  const history = useNavigate()
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [titleError, setTitleError] = useState(false)
  const [descError, setDescError] = useState(false)
  const [category, setCategory] = useState("")


  const getCategory = (e) => {
    setCategory(e)
    console.log(e);
  }

  const getData = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDescError(false)
    if (title !== "" && desc !== "") {
      console.log("title : ", title, "desc : ", desc);
      fetch("http://localhost:8000/notes",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ title, details: desc, category })
        }
      ).then(history("/"))
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
      {/* <Button variant="contained" color="primary" size="medium">Click here</Button>
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


      </ButtonGroup> */}
      {/* <Button variant="outlined"
        startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
      {/* 
      <Button variant="contained"
        endIcon={<SendIcon />}>
        Send
      </Button>
      <HomeOutlinedIcon color="secondary" fontSize="large" />
      <HomeOutlinedIcon color="primary" fontSize="smalll" /> */}

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
          label="title"
          variant="outlined"
          error={titleError}
        />

        <TextField id="filled-basic"
          onChange={(e) => setDesc(e.target.value)}
          color="secondary"
          fullWidth
          required
          size="small"
          label="details"
          variant="filled"
          error={descError}
        />

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => getCategory(e.target.value)}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="test" control={<Radio />} label="test" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
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
