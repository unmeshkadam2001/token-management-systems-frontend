import ExecutiveContext from "./ExecutiveContext";


const ExecutiveState = (props)=>{
    
    const executive = {
        "name":"Rohit",
        "age":"23"
    };

    return(
        <ExecutiveContext.Provider value={ executive }>
            {props.children}
        </ExecutiveContext.Provider>
    )
}

export default ExecutiveState;