import React, { useState, setState, setErrors } from 'react';


function Registration() {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [gender, setGender] = useState('');
    const [subjects,setSubjects] = useState('');

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        //console.log(event.target);
        //console.log(event.target.value); takes value each keystroke/event
        if (id === "firstname") {
            setFirstName(value)
        }
        if (id === "lastname") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "confirmPassword") {
            setConfirmPassword(value);
        }
        if ( id === "gender"){
            setGender(value);
        }
        if (id === "subjects"){
            // console.log(value);
            setSubjects(value);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(subjects);      
          
    }

    return (
        <div className='form-div'>
        <form onSubmit={handleSubmit}>
            <input id='firstname' type='text' value={firstname} onChange={handleInputChange} placeholder='first name'/>
            <br/>

            <input id='lastname' type='text' value={lastname} onChange={handleInputChange} placeholder='last name'/>
            <br/>

            <input type="email" id="email" value={email} onChange={handleInputChange} placeholder="Email" /> 
            <br/>

            <input type="password" id="password" value={password} onChange={handleInputChange} placeholder="Password" /> 
            <br/>

            <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" />
            <br/>

            <input type="radio" id="gender" name="gender" value="Male" checked={gender === 'Male'} onChange={handleInputChange} /> Male
            <input type="radio" id="gender" name="gender" value="Female" checked={gender === 'Female'} onChange={handleInputChange} /> Female
            <br/>

            <select id="subjects" onChange={handleInputChange}> Subjects
                <option value={"DSA"}>DSA</option>
                <option value={"ADBMS"}>ADBMS</option>
                <option value={"AWT"}>AWT</option>
            </select>
            <br/>

            <button type="submit">Register</button>
        </form>
        </div>
    )
}


export default Registration;

