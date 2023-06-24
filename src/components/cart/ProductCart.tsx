 import Image from 'next/image'
import imgTshirt from '../../assets/imgTshirt.png'
import { ImageContainer, InfoProduct, ProductContainer } from '../../styles/drawer'
import { useCart } from '../../hooks/useCart'

interface ProductCartProps {
    id: string
    imageUrl: string
    name: string
    price: string
}

export function ProductCart({ id, imageUrl, name, price }: ProductCartProps) {
    const { removeCartItem } = useCart()
    
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={imageUrl}  width={94} height={94} alt=""/>
            </ImageContainer>
            <InfoProduct>
                <p>{name}</p>
                <strong>{price}</strong>
                <button
                    onClick={() => removeCartItem(id)}
                >
                    Remover
                </button>
            </InfoProduct>
        </ProductContainer>
    )
}