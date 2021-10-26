// import { useEffect, useState } from "react";
// import Row from "./row";

// const App = () => {

//   const url = "https://ourapi.pythonanywhere.com/api/users/"
//   // const url = "https://swapi.dev/api/people/"

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchHandler();
//   }, []);
  
//   const fetchHandler = () => {
//     console.log("Fetching dagta...");
//     fetch(url).then(response => {
//       return response.json();
//     }).then(result => {
//       setData(result);
//     }).catch(error => {
//       console.log(`Error: ${error}`);
//     })
//   }

//   console.log(data);

//   return (
//     <div>
//       <h1>Api integration</h1>
//       <button onClick={fetchHandler}>Fetch</button> <br /> <br />
//       <table border="1">
//         <th>
//           <tr>Id</tr>
//           <tr>Name</tr>
//           <tr>Email</tr>
//           <tr>City</tr>
//           <tr>Action</tr>
//         </th>
//         <Row users={data} />
//       </table>
//     </div>
//   )
// }

// export default App;
