import { useEffect, useRef, useState } from "react";
import Row from "./row";

const App = () => {

  const url = "https://ourapi.pythonanywhere.com/api/users/"
  // const url = "https://swapi.dev/api/people/"

  const [data, setData] = useState([]);

  const nameField = useRef();
  const emailField = useRef();
  const cityField = useRef();
  

  useEffect(() => {
    fetchHandler();
  }, []);
  
  const fetchHandler = () => {
    console.log("Fetching dagta...");
    fetch(url).then(response => {
      return response.json();
    }).then(result => {
      setData(result);
    }).catch(error => {
      console.log(`Error: ${error}`);
    })
  }

  const postHandler = (event) => {
    event.preventDefault();

    const formData = {
      name: nameField.current.value,
      email: emailField.current.value,
      city: cityField.current.value
    }

    const readyFormData = JSON.stringify(formData);

    fetch(url, {
      method: 'POST',
      body: readyFormData,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json()).then(result => {
      console.log("done");
    }).catch(error => console.log(error));

    fetchHandler();
    
  }

  console.log(data);

  return (
    <div>
      <h1>Api integration</h1>
      <button onClick={fetchHandler}>Fetch</button> <br /> <br />
      <table border="1">
        <th>
          <tr>Id</tr>
          <tr>Name</tr>
          <tr>Email</tr>
          <tr>City</tr>
          <tr>Action</tr>
        </th>
        <Row users={data} action={fetchHandler} />
      </table>

      <h2>Add data to api</h2>

      <form onSubmit={postHandler}>
        <input type="text" placeholder="Name" ref={nameField} required /> <br /> <br />
        <input type="email" placeholder="Email address" ref={emailField} required /> <br /> <br />
        <input type="text" placeholder="City" ref={cityField} required /> <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;