import "./App.css";
import { useState } from "react";
// import Card from "./components/Card";
// import Navbar from "./components/Navbar";
// import Tags from "./components/Tags";

function App() {
  const [devices, setDevices] = useState([
    { id: 0, name: "Iphone" },
    { id: 1, name: "Mac" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Linux" },
  ]);
  const [inputDeviceName, setInputDeviceName] = useState("");
  const lis = devices.map((device, i) => {
    device.id = i;
    return (
      <li key={device.id}>
        {" "}
        {device.name}{" "}
        <button type='button' id={device.id} onClick={handleDeleteDevice}>
          Delete
        </button>{" "}
        <button type="button" id={device.id} onClick={handleEditButton}>Edit</button>
      </li>
    );
  });
  const handleInputDevice = () => {
    setDevices([...devices, { name: inputDeviceName }]);
    setInputDeviceName("");
  };
  function handleDeleteDevice(e) {
    const newDevices = [...devices].filter(device => {
      return device.id !== Number(e.target.id)
    })
    setDevices(newDevices)
  }
  function handleEditButton(e){
    const newDevices = devices.map (device =>{
      if (device.id === Number(e.target.id)){
        return {...device, name: device.name+" Lol"}
      }else{
        return device
      }
    })
    setDevices(newDevices)
  }
  return (
    <div className='App'>
      <ul>{lis}</ul>
      <label></label>
      <div>
        <input
          value={inputDeviceName}
          onChange={(e) => {
            setInputDeviceName(e.target.value);
          }}
          type={"text"}
        />
        <button type={"button"} onClick={handleInputDevice}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
