import Card from "../../Components/CardItem";
import Header from "../../Components/Header";
import { useFormatura } from "../../Provider/Formatura";
import { Container } from "../Home/style";

const Formatura = () =>{
    const { carFormatura, setCarFormatura } = useFormatura()

    return (
        <>
       
            <Header />
            Formatura Items para este Evento  <strong>{`${carFormatura.length}`}</strong>
            <Container>
                <Card cart={carFormatura} set={setCarFormatura}/>
            </Container>
        </>
    )
}
export default Formatura;