import { ReactNode, createContext, useState } from "react";
export const SidebarContext = createContext({});
export const SidebarContextProvider = ({children} : {children : ReactNode}) =>{
    const [isToggled, setIsToggled] = useState(false);
    return (
        <SidebarContext.Provider value={{isToggled, setIsToggled}}>
            {children}
        </SidebarContext.Provider>
    )

}