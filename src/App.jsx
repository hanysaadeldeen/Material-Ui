import './App.css'

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {

  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Hello, Material-UI with Vite!
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>

  )
}

export default App
