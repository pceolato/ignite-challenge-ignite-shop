import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Handbag } from "@phosphor-icons/react";

import logoImg from '../assets/logo.svg'
import { ButtonBag, Container, Header } from "../styles/pages/app";
import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} width={130} height={52} alt="" />
        <ButtonBag>
          <Handbag size={24} />
        </ButtonBag>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
