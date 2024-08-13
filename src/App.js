import './App.css';
import Employees from './Employees';
import Footer from './Footer';
import Header from './Header';
import GroupedTeamMembers from './GroupTeamMembers';
import Nav from './Nav';
import NotFound from './NotFound';
import React, { useState,useEffect } from "react";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {


  const [selectedTeam,setTeam]=useState(JSON.parse(localStorage.getItem('selectedTeam'))||"TeamB");
  const [employees, setEmployees] = useState( JSON.parse(localStorage.getItem('employeeList'))||[
    {
      id: 1,
      fullName: "Amith",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Ashna",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Sreelakshmi",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Amal",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "Anekh",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Ayushma",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "Jerin",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Golda",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Anu",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Abhin",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Ayush",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Arun",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);

  useEffect(()=>{
    localStorage.setItem('employeeList',JSON.stringify(employees));
  },[employees]);

  useEffect(()=>{
    localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));
  },[selectedTeam]);

  function handleTeamSelectionChange(event){
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event){
const transformedEmployees=employees.map((employee)=>
  employee.id === parseInt(event.currentTarget.id)?(employee.teamName===selectedTeam)?{...employee,teamName:''}:{...employee,teamName:selectedTeam}:employee);
setEmployees(transformedEmployees);
  }
  return (
    
      <Router>
        <Nav />
     <Header selectedTeam={selectedTeam} teamMemberCount={employees.filter((employee)=>employee.teamName===selectedTeam).length}/>
      <Routes>

   <Route path='/' element={<Employees employees={employees} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} handleTeamSelectionChange={handleTeamSelectionChange}/>}>
     
     </Route>
     <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers  employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />}>
     </Route>

     <Route path='*' element={<NotFound/>}>

</Route>
     </Routes>
     <Footer/>
     </Router>
  );
}

export default App;
