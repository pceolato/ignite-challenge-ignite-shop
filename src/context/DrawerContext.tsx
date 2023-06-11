import { ReactNode, createContext, useContext, useState } from "react";
import { CartDrawer } from "../components/cart/CartDrawer";

interface DrawerContextProviderProps {
    children: ReactNode
}

interface DrawerContextProps {
    drawerIsOpen: boolean
    handleSetDrawer:(value: boolean) => void;
}

const DrawerContext = createContext({} as DrawerContextProps)

export function DrawerContextProvider({ children }: DrawerContextProviderProps) {
    const [ drawerIsOpen, setDrawerIsOpen ] = useState(false)

    function handleSetDrawer(value: boolean) {
        setDrawerIsOpen(value)
    }

    return (
        <DrawerContext.Provider value={{ drawerIsOpen, handleSetDrawer}}>
            {
                drawerIsOpen && (
                    <CartDrawer />
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