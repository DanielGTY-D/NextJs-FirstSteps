import type { Metadata } from "next"

export const metadata : Metadata = {
    title: 'Pricing Page',
    description: 'Esta es la pagina de precios de mi servicio',
    keywords: ['buys', 'precios', 'compras']
}

export default function Princing() {
    return (
        <>
            <span className='text-7xl'>Princing page</span>
        </>
    )
}