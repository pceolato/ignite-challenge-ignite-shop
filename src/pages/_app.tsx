import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";
import { DrawerContextProvider, useDrawer } from "../context/DrawerContext";
import { HeaderNav } from "../components/Header";
import { CartContextProvider } from "../context/CartContext";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <CartContextProvider>
        <DrawerContextProvider>
          <Container>
            <HeaderNav />
            <Component {...pageProps} />
          </Container>
        </DrawerContextProvider>
    </CartContextProvider>
  )
}
