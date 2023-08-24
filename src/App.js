import "./App.css";
import { useState } from "react";
// import Card from "./components/Card";
// import Navbar from "./components/Navbar";
// import Tags from "./components/Tags";

function App() {
  // const postsData = [
  //   {
  //     name: "Lorem ipsum",
  //     id: 1,
  //     body: "dolor sit amet consectetur adipisicing elit. Minima inventore aut aspernatur reiciendis, optio soluta voluptatem est possimus vel nobis eligendi nam, doloribus error repellat adipisci voluptate, eos cum dolorum.",
  //     comments: 4,
  //   },
  //   {
  //     name: "Github",
  //     id: 2,
  //     body: "inventore aut aspernatur reiciendis, optio soluta voluptatem est possimus vel nobis eligendi nam, doloribus error repellat adipisci voluptate, eos cum dolorum.",
  //     comments: 5,
  //   },
  //   {
  //     name: "Ldfgoremsdffsg ipsudsasm",
  //     id: 3,
  //     body: "dolor sit amet consectetur adipisicing elit. Minima inventore aut aspernatur reiciendis, optio soluta voluptatem est possimus vel nobis eligendi nam, doloribus error repellat adipisci voluptate, eos cum dolorum.",
  //     comments: 1,
  //   },
  //   {
  //     name: "Lasddforasfegfm iphjsum",
  //     id: 4,
  //     body: "dolor sit amet consectetur adipisicing elit. Minima inventore aut aspernatur reiciendis, optio soluta voluptatem est possimus vel nobis eligendi nam, doloribus error repellat adipisci voluptate, eos cum dolorum.",
  //     comments: 0,
  //   },
  //   {
  //     name: "Ldfghsforem ihfghjpsum",
  //     id: 5,
  //     body: "dolor sit amet consectetur adipisicing elit. Minima inventore aut aspernatur reiciendis, optio soluta voluptatem est possimus vel nobis eligendi nam, doloribus error repellat adipisci voluptate, eos cum dolorum.",
  //     comments: 2,
  //   },
  // ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    isStudent: false,
    hobby: [],
  });
  function handleStudent(e) {
    setFormData({
      ...formData,
      isStudent: e.target.checked,
    });
  }
  return (
    <div className={"App"}>
      <form
        action=''
        style={{
          padding: "100px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <label htmlFor='name'>Name </label>
        <input
          value={formData.name}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
          type='text'
          name='name'
          id='name'
        />
        <label htmlFor='email'>Email </label>
        <input
          value={formData.email}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
          type='email'
          name='email'
          id='email'
        />
        <div>
          <label>Student</label>
          <input
            type='checkbox'
            onChange={handleStudent}
            checked={formData.isStudent}
          />
        </div>
        {/* <div>
          <label >Student</label>
          <input type='radio' />
          <label >Teacher</label>
          <input type='radio' />
        </div> */}
        <button type='submit' style={{ width: "10%" }}>
          Submit
        </button>
      </form>

      {/* <Navbar />
      <div className={"main"}>
        <div className={"cards"}>
          {postsData.map((post,index)=>(
            <Card key={index} postData={post}/>
          ))}
        </div>
        <Tags/>
      </div> */}
    </div>
  );
}

export default App;
