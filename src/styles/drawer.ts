import { styled } from "@stitches/react";
import * as Portal from '@radix-ui/react-portal';

export const DrawerContent = styled(Portal.Root, {
    height: '100vh',
    position: 'fixed',
    zIndex: '1000',
    width: '480px',
    top: 0,
    right: 0,
    bottom: 0,
    background: '$gray800'
})

export const DrawerContainer = styled('div', {
    position: 'relative',
    height: '100%',
})

export const DrawerClose = styled('button', {
    position: 'absolute',
    top: '24px',
    right: '24px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer'
})

export const BagContent = styled('div', {
    marginTop: '4.5rem',
    paddingInline: '3rem',

    'h3': {
        color: '$gray100',
        fontSize: '1.25rem',
        fontWeight: 'bold'
    }
})

export const ItemList = styled('div', {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    maxHeight: '16.625rem',
    overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '4px',
  },

  '&::-webkit-scrollbar-thumb': {
    background: 'gray',
    borderRadius: '4px',
  },
})

export const ProductContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem'
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 101,
    height: 94,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    paddingInline: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    }
})

export const InfoProduct = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',

    'p': {
        color: '$gray300',
        fontSize: '1.125rem'
    },

    'strong': {
        color: '$gray100',
        fontSize: '1.25rem',
        fontWeight: 'bold'
    },

    'button': {
        border: 'none',
        background: 'transparent',
        width: 'fit-content',
        color: '$green500',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',

        '&:hover': {
            color: '$green300'
        }
    }
})

export const FooterCart = styled('footer', {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.125rem',
    position: 'absolute',
    bottom: '6rem',
    width: '100%',
    paddingInline: '3rem',

    'button': {
        width: '100%',
        paddingBlock: '1.25rem',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        color: '$white',
        backgroundColor: '$green500',
        border: 'none',
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: '$green300'
        }
    }
})

export const CheckoutSummary = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',

    'div': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})