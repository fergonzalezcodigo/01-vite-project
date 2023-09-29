import imgUno from './assets/images/mono.jpg'
import ButtonState from './components/ButtonState'
import MyButton from './components/MyButton'
import WelcomeText from './components/WelcomeText'
import ListFruits from './components/fruts/ListFruits'

const App = () => {
  const title = "Mi titulo desde una consante"
  const classTitle = "text-center"
  const user2 = false;

const fruits = ['manzana', 'banana', 'pera']
const fruitsTwo = ['fresa', 'melón', 'sandia']
  return (
    <>
      <ButtonState/>
      <h1 className={classTitle}>{title.toUpperCase()}</h1>
      <img src={imgUno} alt={`imagen-${title}`} />

      <MyButton text="boton 1"/>
      <MyButton text="boton 2"/>
      <MyButton text="boton 3"/>
      
      <WelcomeText user1={user2}/>
      <ListFruits fruits={fruits}/>
      <ListFruits fruits={fruitsTwo}/>

    </>
  )
}

export default App