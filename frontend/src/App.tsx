import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header";
import Home from "./routes/Home";
import Records from "./routes/Records";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="records" element={<Records/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
