import { useCasamento } from "../../Provider/Casamento";
import { useConfra } from "../../Provider/Confraternização";
import { useFormatura } from "../../Provider/Formatura";
import { Container } from "./style";
import { useHistory } from 'react-router-dom'

const Header = () => {
    const { carCasamento } = useCasamento()
    const { carFormatura } = useFormatura()
    const { carConfra } = useConfra()

    const history = useHistory();
    return (
        <Container>
            <div className='kenevento-shortCut' onClick={()=> history.push('/')}>

                KenEventos

            </div>
            <div>
                <ul>
                    <li onClick={() => history.push("/formatura")} className="menuItem">Formatura <span>{carFormatura.length}</span></li>
                    <li onClick={() => history.push("/casamento")} className="menuItem">Casamento <span>{carCasamento.length}</span></li>
                    <li onClick={() => history.push("/confraternizacao")} className="menuItem">Confraternização <span>{carConfra.length}</span></li>
                </ul>
            </div>
        </Container>
    )
}
export default Header;