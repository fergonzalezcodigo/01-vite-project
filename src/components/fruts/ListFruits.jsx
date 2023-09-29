import ItemFruit from "./ItemFruit"

const ListFruits = ({fruits}) => {

  //const fruits = ['manzana', 'banana', 'pera']

  return (
    <ul>
      {
        fruits.map((fruit2, index) => (
          <ItemFruit key={index} fruit1={fruit2}/>
        ))
      }
    </ul>
  )
}

export default ListFruits