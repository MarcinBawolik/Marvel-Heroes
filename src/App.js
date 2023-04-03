import { Main } from "./Components/Main";
import { Route, Routes } from "react-router-dom";
import { Marvel } from "./MarvelHeroes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Marvel-Heroes" element={<Main />} />
        <Route path="/:id" element={<Marvel />} />
      </Routes>
    </>
  );
}

export default App;
