import React from 'react';
import './App.css';

function App() {

  const data = [
    {
      image :"https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
      name: "King",
      batch: "5"
    },
    {
      image :"https://media.istockphoto.com/id/479667835/photo/background-elephant.jpg?s=612x612&w=0&k=20&c=DwfinIerTq104FXWcBBwegTWcmw8tf18EGqa5IpEyFk=",
      name: "Jumbo",
      batch: "6"
    },
    {
      image :"https://img.freepik.com/premium-photo/cute-baby-panda-bear-with-big-eyes-3d-rendering-cartoon-illustration_691560-4917.jpg",
      name: "Panda",
      batch: "7"
    }
  ]




  return (
    <div className="App">
      <Profile
      image = {data[0].image}
      name = {data[0].name}
      batch = {data[0].batch}
      />
      <Profile
      image = {data[1].image}
      name = {data[1].name}
      batch = {data[1].batch}
      />
      <Profile
      image = {data[2].image}
      name = {data[2].name}
      batch = {data[2].batch}
      />
    </div>
  );
}

export default App;

// create a new component

function Profile({image, name, batch}){
  return(
    <div className='profile'>
      <img src = {image} alt={name}/>
      <h2>{name}</h2>
      <p>{batch}</p>
    </div>
  )
}

// const props = {
//   image : "",
//   name : "",
//   batch : ""
// }

// const {image, name, batch} = props

// function getName(name){
//   return name
// }

// getName("manoj")

  // return React.createElement(
  //   "div",
  //   {className : "profil-name", id:"profile-id"},
  //   React.createElement("h2",null,"Profile name")
  // )

