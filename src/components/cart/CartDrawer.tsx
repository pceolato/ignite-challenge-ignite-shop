import { X } from "@phosphor-icons/react";
import { BagContent, CheckoutSummary, DrawerClose, DrawerContainer, DrawerContent, FooterCart, ItemList } from "../../styles/drawer";
import { useDrawer } from "../../context/DrawerContext";
import { ProductCart } from "./ProductCart";
import { useCart } from "../../hooks/useCart";

export function CartDrawer() {
    const { handleSetDrawer } = useDrawer()
    const { cartItems, cartTotal } = useCart()
    const cartQuantity = cartItems.length

    const formattedCartTotal = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(cartTotal)

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

                    { cartQuantity <= 0 && <p>Parece que seu carrinho está vazio : (</p> }

                    <ItemList>
                        { 
                            cartItems.map(cartItem => (
                                <ProductCart
                                    key={cartItem.id}
                                    id={cartItem.id}
                                    imageUrl={cartItem.imageUrl}
                                    name={cartItem.name}
                                    price={cartItem.price}
                                />
                            ))
                        }
                    </ItemList>

                </BagContent>
                <FooterCart>
                    <CheckoutSummary>
                        <div>
                            <span>Quantidade</span>
                            <span>{cartQuantity} {cartQuantity === 1 ? 'item' : 'itens'}</span>
                        </div>
                        <div>
                            <strong>Valor total</strong>
                            <strong>{formattedCartTotal}</strong>
                        </div>
                    </CheckoutSummary>

                    <button>Finalizar compra</button>
                </FooterCart>
            </DrawerContainer>
        </DrawerContent>
    )
}