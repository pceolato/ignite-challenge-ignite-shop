import { X } from "@phosphor-icons/react";
import { BagContent, CheckoutSummary, DrawerClose, DrawerContainer, DrawerContent, FooterCart, ItemList } from "../../styles/drawer";
import { useDrawer } from "../../context/DrawerContext";
import { ProductCart } from "./ProductCart";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import axios from "axios";

export function CartDrawer() {
    const { handleSetDrawer } = useDrawer()
    const { cartItems, cartTotal } = useCart()
    const cartQuantity = cartItems.length

    const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession ] = useState(false)

    const formattedCartTotal = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(cartTotal)

    function setDrawerClose() {
        handleSetDrawer(false)
    }

    async function handleCheckout() {
        try {
            setIsCreatingCheckoutSession(true)

            const response = await axios.post('/api/checkout', {
                products: cartItems
            })

            const { checkoutUrl } = response.data;
            window.location.href = checkoutUrl
        } catch(err) {
            setIsCreatingCheckoutSession(false)
            alert('Falha ao redirecionar para o checkout!!')
        }
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

                    <button
                        onClick={handleCheckout}
                        disabled={isCreatingCheckoutSession || cartQuantity <= 0}
                    >
                        Finalizar compra
                    </button>
                </FooterCart>
            </DrawerContainer>
        </DrawerContent>
    )
}