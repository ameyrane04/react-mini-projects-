import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
    //Provider ke andar wrap to kardiya but konsi values ka access dere hai vo bhi specify karna padta hai
    // to uska ek property hai "value" karke usme saara data pass karne ka object bana ke 
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider