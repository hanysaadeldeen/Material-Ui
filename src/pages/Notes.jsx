import { Button, ButtonGroup, Container, Typography } from "@mui/material";


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
    </Container>
  )
}
