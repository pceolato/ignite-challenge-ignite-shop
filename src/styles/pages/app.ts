import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh'
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
})

export const ButtonBag = styled('button', {
    border: 'none',
    padding: '0.75rem',
    borderRadius: '6px',
    background: '$gray800',
    color: '$gray500',
    cursor: 'pointer',
    position: 'relative',
})

export const CountBag = styled('div', {
    background: '$gray900',
    color: '$white',
    padding: '0.25rem',
    borderRadius: '50%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    'z-index': 1,

    top: 'calc(0px - 1rem)',
    right: 'calc(0px - 1rem)',

    span: {
        width: '1.5rem',
        height: '1.5rem',
        background: '$green500',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})