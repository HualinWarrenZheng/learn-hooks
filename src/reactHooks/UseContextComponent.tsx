import { useState, createContext, useContext } from "react";

const UserContext = createContext('');

const UseContextComponent = () => {
    const [user, setUser] = useState("Warren");
    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    )
}

const Component2 = () => {
    return (
        <>
            <p>Component2</p>
            <Component3 />
        </>
    )
}

const Component3 = () => {
    return (
        <>
            <p>Component3</p>
            <Component4 />
        </>
    )
}

const Component4 = () => {
    const user = useContext(UserContext);
    return (<p>{`Hello ${user}`}</p>)
}

export default UseContextComponent