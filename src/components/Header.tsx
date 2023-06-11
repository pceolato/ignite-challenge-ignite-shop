import Image from "next/image";
import { ButtonBag, Header } from "../styles/pages/app";
import { Handbag } from "@phosphor-icons/react";

import logoImg from '../assets/logo.svg'
import { useDrawer } from "../context/DrawerContext";

export function HeaderNav() {
    const { handleSetDrawer } = useDrawer()

    function handleOpenCart() {
        handleSetDrawer(true)
      }
    
    return (
        <Header>
            <Image src={logoImg.src} width={130} height={52} alt="" />
            <ButtonBag onClick={handleOpenCart}>
            <Handbag size={24} />
            </ButtonBag>
        </Header>
    )
}