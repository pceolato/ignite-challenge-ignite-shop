import { ReactNode, createContext, useContext, useState } from "react";
import { DrawerContent } from "../styles/drawer";

interface DrawerContextProviderProps {
    children: ReactNode
}

interface DrawerContextProps {
    handleSetDrawerIsOpen:() => void;
}

const DrawerContext = createContext({} as DrawerContextProps)

export function DrawerContextProvider({ children }: DrawerContextProviderProps) {
    const [ drawerIsOpen, setDrawerIsOpen ] = useState(false)

    function handleSetDrawerIsOpen() {
        console.log('teste')
        const currentDrawerState = drawerIsOpen
        setDrawerIsOpen(!currentDrawerState)
    }

    return (
        <DrawerContext.Provider value={{handleSetDrawerIsOpen}}>
            {
                drawerIsOpen && (
                    <DrawerContent>
                    </DrawerContent>
                )
            }
            {children}
        </DrawerContext.Provider>
    )
}

export function useDrawer() {
    const context = useContext(DrawerContext)

    return context
}