import { useState } from "react";

export default function Form() {
  const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   
   let user = {
       fname: '',
       lname: ''
   }

  const handleFnameChange = (e) => { 
        setFname(e.target.value);
  };
  
   const handlelnameChange = (e) => {   
        setLname(e.target.value);  
  };
  
  const handleSubmit = (e) => {
      e.preventDefault();
      if(user.fname == fname && user.lname === lname){
          alert("user already created");
      }else{
          user = {
              fname: fname,
              lname: lname
          }
          
          alert("user created succesfully");
      }
  }

  return (
    <div className="App">
      <form>
        <div>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={(e) => handleFnameChange(e)}
          />
        </div>
         <div>
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={(e) => handlelnameChange(e)}
          />
        </div>
        <div>
            <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
      </form>
    </div>
  );
}
