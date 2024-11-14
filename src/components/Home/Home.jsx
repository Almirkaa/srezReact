// import s from './HomePage.module.css'

import Accardeon from "../Accardeon/Accardeon";
import { Catalog } from "../Catalog/Catalog";

export function Home() {
    return (
        <>
            <section className='container'>
                <Accardeon />
            </section>

            

            <section className='container'><Catalog /></section>
        </>
    )
}