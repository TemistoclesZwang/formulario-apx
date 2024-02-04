import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { FooterPagination } from "./Hooks/FooterPagination";
import { FormAudio } from "./pages/FormAudio";
import { Home } from "./pages/Home";
import { MyRouter } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <FormAudio></FormAudio> */}
        {MyRouter}
      </BrowserRouter>
      {/* <Home></Home> */}
      {/* <FooterPagination></FooterPagination> */}
    </>
  );
}

export default App;
