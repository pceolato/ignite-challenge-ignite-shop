import { ReactNode, createContext, useState } from "react";

export interface IProduct {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    numberPrice: number;
    description: string;
    defaultPrice: string;
}

interface CartContextProps {
    cartItems: IProduct[];
    cartTotal: number;
    addToCart: (product: IProduct) => void;
    removeCartItem: (productId: string) => void;
    checkIfItemAlreadyExists: (productId: string) => boolean;
}

interface CartContextProviderProps {
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<IProduct[]>([])

    const cartTotal = cartItems.reduce((total, product) => {
        return total + product.numberPrice
    }, 0)

    function addToCart(product: IProduct) {
        setCartItems((prevState) => [...prevState, product])
    }

    function removeCartItem(productId: string) {
        const filteredItems = cartItems.filter((product) => product.id !== productId)
        setCartItems(filteredItems)
    }

    function checkIfItemAlreadyExists(productId: string) {
        return cartItems.some((product) => product.id === productId)
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeCartItem,
                checkIfItemAlreadyExists,
                cartTotal
            }}
        >
            {children}
        </CartContext.Provider>
    )
}