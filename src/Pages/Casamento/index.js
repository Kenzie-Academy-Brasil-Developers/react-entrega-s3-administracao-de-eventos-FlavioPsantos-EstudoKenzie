import Card from "../../Components/CardItem";
import { Container } from "../Home/style";
import Header from "../../Components/Header";
import { useCasamento } from "../../Provider/Casamento";

const Casamento = () => {
    const { carCasamento, setCarCasamento } = useCasamento()

    return (
        <>

            <Header />
            <div>
                Casamento Items para este Evento  <strong>{`${carCasamento.length}`}</strong>
            </div>
            <Container>
                <Card cart={carCasamento} set={setCarCasamento} />
            </Container>
        </>
    )

}
export default Casamento;