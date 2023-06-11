 import Image from 'next/image'
import imgTshirt from '../../assets/imgTshirt.png'
import { ImageContainer, InfoProduct, ProductContainer } from '../../styles/drawer'

export function ProductCart() {
    return (
        <ProductContainer>
            <ImageContainer>
                <Image src={imgTshirt}  width={94} height={94} alt=""/>
            </ImageContainer>
            <InfoProduct>
                <p>Camiseta Beyond the Limits</p>
                <strong>R$ 79,90</strong>
                <button>Remover</button>
            </InfoProduct>
        </ProductContainer>
    )
}