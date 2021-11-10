
import Header from "../../Components/Header";
import { useCasamento } from "../../Provider/Casamento";
import { useConfra } from "../../Provider/Confraternização";
import { useDrink } from "../../Provider/Drinks";
import { useFormatura } from "../../Provider/Formatura";
import { Container } from "./style";
const DashBoard = () => {
    const { drink } = useDrink();
    const {setCarCasamento, carCasamento} = useCasamento();
    const {setCarFormatura, carFormatura} = useFormatura();
    const {setCarConfra, carConfra} = useConfra();


    const handleCart = (item) =>{
        setCarCasamento([...carCasamento, item])   
    }
    const handleCartFormatura = (item) =>{
        setCarFormatura([...carFormatura, item])
    }
    const handleCartConfra = (item) =>{
        setCarConfra([...carConfra, item])
    }
    return (
        
        <>
           <Header/>
            <div>
                <h1>
                    Armazém 
                </h1>
            </div>

            <Container>
                <ul>

                    {drink.map(drink => <li key={drink.id}>
                        <img src={`${drink.image_url}`} alt="Imagem da Bebida" />
                        <span>{drink.name}</span>
                        <span>Data de Fabricação: {drink.first_brewed}</span>
                        <span>Volume do Barríl: {drink.volume.value} {drink.volume.unit}</span>
                       
                        <div>
                        <summary><details><span>{drink.description}</span></details></summary>
                            <button onClick={()=>{handleCartFormatura(drink)}}>Formatura</button>
                            <button onClick={()=>{handleCart(drink)}}>Casamento</button>
                            <button onClick={()=>{handleCartConfra(drink)}}>Confraternização</button>
                        </div>
                      
                    </li>)}
                </ul>
            </Container>
        </>
    )
}
export default DashBoard;