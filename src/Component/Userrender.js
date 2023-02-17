import Userprint from "./Userprint.js"
const Userrender=(props)=>{
    const passdeleteid=(iddel)=>{
        props.ondel(iddel);
    }
    return (
        <>
            <div>
               {props.send.map(userData=><Userprint username={userData.user} userage={userData.age} userid={userData.id} onhandle={passdeleteid}/>)}
            </div>
        </>
    )
}

export default Userrender;