import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Notes />} exact path="/" />
        <Route element={<Create />} path="/create" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
