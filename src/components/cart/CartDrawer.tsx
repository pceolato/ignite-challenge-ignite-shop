import { X } from "@phosphor-icons/react";
import { BagContent, CheckoutSummary, DrawerClose, DrawerContainer, DrawerContent, FooterCart, ItemList } from "../../styles/drawer";
import { useDrawer } from "../../context/DrawerContext";
import { ProductCart } from "./ProductCart";

export function CartDrawer() {
    const { handleSetDrawer } = useDrawer()

    function setDrawerClose() {
        handleSetDrawer(false)
    }

    return (
        <DrawerContent>
                <DrawerClose onClick={setDrawerClose}>
                    <X size={24} weight="bold" color="#8D8D99" />
                </DrawerClose>
            <DrawerContainer>
                <BagContent>
                    <h3>Sacola de compras</h3>

                    <ItemList>
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                    </ItemList>

                </BagContent>
                <FooterCart>
                    <CheckoutSummary>
                        <div>
                            <span>Quantidade</span>
                            <span>3 itens</span>
                        </div>
                        <div>
                            <strong>Valor total</strong>
                            <strong>R$ 270,00</strong>
                        </div>
                    </CheckoutSummary>

                    <button>Finalizar compra</button>
                </FooterCart>
            </DrawerContainer>
        </DrawerContent>
    )
}