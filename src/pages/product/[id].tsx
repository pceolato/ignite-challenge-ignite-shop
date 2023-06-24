import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import Stripe from "stripe"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { useCart } from "../../hooks/useCart"
import { IProduct } from "../../context/CartContext"

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { addToCart, checkIfItemAlreadyExists } = useCart()

  const itemAlreadyExistsInCart = checkIfItemAlreadyExists(product.id)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl}  width={520} height={480} alt={product.name}/>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button disabled={itemAlreadyExistsInCart} onClick={() => addToCart(product)}>
            {itemAlreadyExistsInCart ? 'Produto já está no carrinho' : 'Colocar na sacola'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await stripe.products.list()

  const ids = response.data.map(product => product.id)

  return {
    paths: [
      { params: { id:  ids[0]} }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price


  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', { //price is in cents
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        numberPrice: price.unit_amount / 100,
        description: product.description,
        defaultPriceId: price.id,

      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
