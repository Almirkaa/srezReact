import CardOne from '../Card/Card';
import { Search } from '../Search/Search';
import s from './Catalog.module.css'
import { useState } from "react";
import { products } from '../../assets/data';
import { Filtr } from '../Filtr/Filtr';

export function Catalog() {
    const [query, setQuery] = useState('');
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(query.toLowerCase());
    })

    const [selectedMaterial, setSelectedMaterial] = useState('Все');
    const filteredCarpets = products.filter(carpet => {
        const materialFilter = selectedMaterial === 'Все' || carpet.material === selectedMaterial;

        return materialFilter;
    });
    return (

        <div className="container">
            <h2 className={s.h2}>Каталог товаров</h2>
            <Search handleChange={handleChange}></Search>
            <Filtr />

            <div className={s.cards}>

                {
                    // filteredCarpets.map(product => {
                    //     return (
                    //         <div key={product.id}><CardOne id={product.id} image={product.image} title={product.title} price={product.price} categories={product.categories} ></CardOne></div>
                    //     )
                    //     })


                        filteredProducts.length ? filteredProducts.map((product)=>{
                                return(
                    <CardOne id={product.id} image={product.image} title={product.title} price={product.price} ></CardOne>
                    )
                            }) : <p className='error'>Ничего не найдено по запросу "{query}"</p>
                }
            </div>
        </div>

    )
}