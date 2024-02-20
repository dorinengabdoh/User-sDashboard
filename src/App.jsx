import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useState } from "react";
import "./App.css";
import Landing from "./Components/Landpage/First_page";
import Login from "./Components/Loginpage/Loginpage";
import Display from "./Components/Displaypage/display";
import Update from "./Components/Updatelogin/update";
import Edit from "./Components/editComponent/Edit";
import { Delete } from "./Components/deleteComponent/delete";

function App() {
  // const [formData, setFormData] = useState("Dorine");
  // const handleFormSubmit = (values) => {
  //   setFormData(values);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Loginpage" element={<Login />} />
        <Route path="/dispaly" element={<Display />} />
        <Route path="/Updatepage" element={<Update />} />
        <Route path="/editpage" element={<Edit />} />
        <Route path="/deletepage" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
