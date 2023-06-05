// create a component student form and add four input boxes and collect student
//  information Create a submit button and on click
// of submit button, read all the values from the form and show it in a table

// import React, { useState } from "react";
// import styles from "./Task.module.css"; 
// function Task() {
//   const[data,setData]=useState([])  
//   const [students, setStudents] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     age: "",
//     number: "",
//     address: "",
//   });
//   const[studentsData,setStudentsData]=useState([])
//   function handleInput(e) {
//     const{name,value}=e.target
//     setStudents((prevStudents)=>({
//           ...prevStudents ,[name]:value
//     }))
//   }
//   function handleFormSubmit(e){
//      e.preventDefault()
//      setStudentsData((prevStudents)=> [...prevStudents,students])
//      let newData=[...data,students]
//      setData(newData)
//      localStorage.setItem('studentsData', JSON.stringify(newData))
//      setStudents({
//         firstName: "",
//         lastName: "",
//         age: "",
//         number:"",
//         email: "",
//         address: ""
//       });
//   }
//   return (
//     <div>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type="text"
//           name="firstName"
//           value={students.firstName}
//           placeholder="enter first name here"
//           onChange={handleInput}
//         />
//         <br />
//         <input
//           type="text"
//           name="lastName"
//           value={students.lastName}
//           placeholder="enter last name here"
//           onChange={handleInput}
//         />
//         <br />
//         <input
//           type="email"
//           name="email"
//           value={students.email}
//           placeholder="enter email here"
//           onChange={handleInput}
//         />
//         <br />
//         <input
//           type="number"
//           name="age"
//           value={students.age}
//           placeholder="enter age here"
//           onChange={handleInput}
//         />
//         <br />
//         <input
//           type="number"
//           name="number"
//           value={students.number}
//           placeholder="enter number here"
//           onChange={handleInput}
//         />
//       <br />
//         <textarea
//           name="address"
//           placeholder="Address"
//           value={students.address}
//           onChange={handleInput}
//         ></textarea>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       {studentsData.length>0 && (
//         <table>
//             <thead>
//                 <tr>
//                     <th>First Name</th>
//                     <th>Last Name</th>
//                     <th>Email-Id</th>
//                     <th>Age</th>
//                     <th>Mobile-Number</th>
//                     <th>Address</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {studentsData.map((student,index)=>(
//                     <tr key={index}>
//                         <td>{student.firstName}</td>
//                         <td>{student.lastName}</td>
//                         <td>{student.email}</td>
//                         <td>{student.age}</td>
//                         <td>{student.number}</td>
//                         <td>{student.address}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default Task;



import React, { useState } from "react";
import styles from "./Task.module.css";

function Task() {
  const [data, setData] = useState([]);
  const [students, setStudents] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    number: "",
    address: "",
  });
  const [studentsData, setStudentsData] = useState([]);

  function handleInput(e) {
    const { name, value } = e.target;
    setStudents((prevStudents) => ({
      ...prevStudents,
      [name]: value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setStudentsData((prevStudents) => [...prevStudents, students]);
    let newData = [...data, students];
    setData(newData);
    localStorage.setItem("studentsData", JSON.stringify(newData));
    setStudents({
      firstName: "",
      lastName: "",
      age: "",
      number: "",
      email: "",
      address: "",
    });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          value={students.firstName}
          placeholder="Enter first name here"
          onChange={handleInput}
          className={styles.formControl}
        />
        <br />
        <input
          type="text"
          name="lastName"
          value={students.lastName}
          placeholder="Enter last name here"
          onChange={handleInput}
          className={styles.formControl}
        />
        <br />
        <input
          type="email"
          name="email"
          value={students.email}
          placeholder="Enter email here"
          onChange={handleInput}
          className={styles.formControl}
        />
        <br />
        <input
          type="number"
          name="age"
          value={students.age}
          placeholder="Enter age here"
          onChange={handleInput}
          className={styles.formControl}
        />
        <br />
        <input
          type="number"
          name="number"
          value={students.number}
          placeholder="Enter number here"
          onChange={handleInput}
          className={styles.formControl}
        />
        <br />
        <textarea
          name="address"
          placeholder="Address"
          value={students.address}
          onChange={handleInput}
          className={styles.textArea}
        ></textarea>
        <br />
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      {studentsData.length > 0 && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email-Id</th>
              <th>Age</th>
              <th>Mobile-Number</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((student, index) => (
              <tr key={index}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.number}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Task;
