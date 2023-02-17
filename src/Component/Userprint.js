const Userprint=(props)=>{
    const mystyle=()=>{
        props.onhandle(props.userid);
    }
    return (
        <>
            <h4 onClick={mystyle}>{props.username} and age is : {props.userage} id is {props.userid}</h4>
        </>
    );
}

export default Userprint;