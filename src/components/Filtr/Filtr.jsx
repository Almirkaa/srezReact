import s from './Filtr.module.css'
import { Link } from 'react-router-dom';
import { products } from '../../assets/data';


export function Filtr() {
    const materials = ['Все', 'Шерсть', 'Шелк', 'Синтетика'];



    const CarpetFilter = () => {
        const [selectedMaterial, setSelectedMaterial] = useState('Все');


        const filteredCarpets = products.filter(carpet => {
            const materialFilter = selectedMaterial === 'Все' || carpet.material === selectedMaterial;

            return materialFilter;
        });
        return (
            <>
                <div className={s.filtrs}>
                    <p>Категории:</p>
                    <div className={s.link_btn}>

                        {materials.map(material => (
                            <button key={material} onClick={() => setSelectedMaterial(material)}>
                                {material}
                            </button>
                        ))}
                    </div>
                </div>

            </>
        )
    }
}