import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting, texto}) => {
    // const {greeting, texto} = props
    const onAdd = (cantidad) => {
        alert (`Agregaste al carrito ${cantidad} productos `)
    }
    return(
        <div>
            <h1>{greeting}</h1>
            <p>{texto}</p>
            <ItemCount stock={12} onAdd={onAdd}/>
        </div>
    )
}
export default ItemListContainer