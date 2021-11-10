import { Container } from "./style";
const Card = ({ cart, set}) => {
    const removeItem = (id) => {
        const newListItem = cart.filter(item => item.id !== id)
        set(newListItem)
    }
    return (
        <Container>
            <ul>
                {cart.map(drink => <li key={drink.id}>
                    <img src={`${drink.image_url}`} alt="Imagem da Bebida" />
                    <span>{drink.name}</span>
                    <span>Data de Fabricação: {drink.first_brewed}</span>
                    <span>Volume do Barríl: {drink.volume.value} {drink.volume.unit}</span>
                    <button onClick={()=>removeItem(drink.id)}>Remover Item</button>
                </li>)
                }
            </ul>
        </Container>
    )
}
export default Card;