import { useState } from "react";
import UserForm from "./Component/UserForm";
import Userrender from "./Component/Userrender";
import Wrapper from "./Component/Halpers/Wrapper";
const dummy=[];
function App() {

  var [userarr,setUserarr]=useState(dummy);
  const newmyhandler=(props)=>{

    setUserarr(prevState=>[props,...prevState])

  }
  const delhandler=(delid)=>{
 
    setUserarr(userarr.filter(deluser=>deluser.id!==delid));
  }
  
  return (
    <Wrapper>
      <UserForm onNewMy={newmyhandler}></UserForm>
      {userarr.length>0 ? <Userrender send={userarr} ondel={delhandler}/> : <h3> No Data to Show</h3>}
    </Wrapper>
  );
}

export default App;
