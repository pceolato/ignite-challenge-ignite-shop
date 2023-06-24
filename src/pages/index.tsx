import Image from "next/image"
import Head from "next/head"

import { useKeenSlider } from 'keen-slider/react'

import { ButtonAddToCart, HomeContainer, Product } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import { Bag } from "@phosphor-icons/react"
import { useCart } from "../hooks/useCart"
import { IProduct } from "../context/CartContext"
import { MouseEvent } from "react"

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const { addToCart, checkIfItemAlreadyExists } = useCart()
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      // origin: "center",
      perView: 2,
      spacing: 48
    }
  })

  function handleAddToCard(e: MouseEvent<HTMLButtonElement>, product: IProduct) {
    e.preventDefault();
    addToCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">


        {
          products.map(product => (
            <Product
              href={`product/${product.id}`}
              className="keen-slider__slide"
              key={product.id}
              prefetch={false}
            >
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <div>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </div>
                <ButtonAddToCart
                  disabled={checkIfItemAlreadyExists(product.id)}
                  onClick={(e) => handleAddToCard(e, product)}
                >
                  <Bag size={32} weight="bold" />
                </ButtonAddToCart>
              </footer>
            </Product>
          ))
        }
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })


  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', { //price is in cents
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
      numberPrice: price.unit_amount / 100,
      defaultPrice: price.id
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
