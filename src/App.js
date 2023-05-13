import React, { useState } from 'react'
import Header from './Components/Header/Header';
import Grid from './Components/Grid/Grid';
import axios from 'axios';

function App() {

  const [state, setState] = useState({})

  const handleChange = (event) => {
    var name = event.target.name
    var value = event.target.value
    setState({ ...state, [name]: value })
  }
  console.log(state);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('http://103.120.178.195/Sang.Ray.Mob.Api/Ray/PostHSE',JSON.stringify(state))
  //     .then((res) => {
  //       console.log(res);
  //     }).catch((err)=>{
  //       console.log(err);
  //     })
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Append form fields to the formData object
    for (let key in state) {
      formData.append(key, state[key]);
    }

    axios.post("http://103.120.178.195/Sang.Ray.Mob.Api/Ray/PostHSE",formData)
      .then((res) => {
        console.log(res);
      }).catch((err)=>{
        console.log(err);
      })
  };


  return (
    <>
      <Header handleChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <Grid handleChange={handleChange} />
        <button type='submit'>Save</button>
      </form>
      {/* <Grid handleChange={handleChange} handleSubmit={handleSubmit} /> */}
    </>
  );
}

export default App;
