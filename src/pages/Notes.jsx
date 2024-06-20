import { Button, ButtonGroup, Container, Typography } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
export default function Notes() {
  return (

    <Container>

      <Typography
        variant="h6"
        component="h1"
        color="primary"
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
      <HomeOutlinedIcon color="secondary" fontSize="smalll" />
    </Container>
  )
}
