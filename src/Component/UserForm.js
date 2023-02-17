import {useState} from "react";
const UserForm =(props)=>{

    const [usernamein,setUserNameIn]=useState('')
    const [useragein,setUserAgeIn]=useState('');
    const username=(event)=>{
        setUserNameIn(event.target.value)
    }
    const userage=(event)=>{
        setUserAgeIn(event.target.value)
    }
    const submitform=(event)=>{
        event.preventDefault();
        if(usernamein.trim().length>0&&useragein.trim().length>0){
            const objtopush={
                user:usernamein,
                age:useragein,
                id:Math.random(),
            }
            
            
            props.onNewMy(objtopush);
            setUserAgeIn('');
            setUserNameIn('');
        }
    }
    return (
        <>
            <form onClick={submitform}>
                <label>Username</label>
                <input  value={usernamein} type="text" onChange={username}></input>
                <label>Age</label>
                <input value={useragein} type="number" onChange={userage}></input>
                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default UserForm;