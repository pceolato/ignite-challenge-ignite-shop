import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Handbag } from "@phosphor-icons/react";

import logoImg from '../assets/logo.svg'
import { ButtonBag, Container, Header } from "../styles/pages/app";
import Image from "next/image";
import { DrawerContextProvider, useDrawer } from "../context/DrawerContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const { handleSetDrawerIsOpen } = useDrawer()

  function handle() {
    handleSetDrawerIsOpen()
  } 

  return (
    <DrawerContextProvider>
      <Container>
        <Header>
          <Image src={logoImg.src} width={130} height={52} alt="" />
          <ButtonBag onClick={handle}>
            <Handbag size={24} />
          </ButtonBag>
        </Header>

        <Component {...pageProps} />
      </Container>
    </DrawerContextProvider>
  )
}
