import Card from "../../Components/CardItem";
import { Container } from "../Home/style";
import Header from "../../Components/Header";
import { useConfra } from "../../Provider/Confraternização";

const Confraternizacao = () => {
    const { carConfra, setCarConfra } = useConfra()

    return (
        <>

            <Header />
            Confraternizacao Items para este Evento  <strong>{`${carConfra.length}`}</strong>
            <Container>
                <Card cart={carConfra} set={setCarConfra}/>
            </Container>
        </>
    )
}
export default Confraternizacao;