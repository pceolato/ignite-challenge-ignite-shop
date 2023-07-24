import Image from "next/image";
import { ButtonBag, CountBag, Header } from "../styles/pages/app";
import { Handbag } from "@phosphor-icons/react";

import logoImg from '../assets/logo.svg'
import { useDrawer } from "../context/DrawerContext";
import { useCart } from "../hooks/useCart";

export function HeaderNav() {
    const { handleSetDrawer } = useDrawer()
    const { cartItems } = useCart()

    function handleOpenCart() {
        handleSetDrawer(true)
      }
    
    return (
        <Header>
            <Image src={logoImg.src} width={130} height={52} alt="" />
            <ButtonBag onClick={handleOpenCart}>
                {cartItems.length > 0 && (
                    <CountBag>
                        <span>
                            {cartItems.length}
                        </span>
                    </CountBag>
                )}
                <Handbag size={24} />
            </ButtonBag>
        </Header>
    )
}