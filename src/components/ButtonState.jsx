import { useState } from "react";

const ButtonState = () => {

  //let count = 0;

  const [count, setCount]=useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <button
      onClick={handleClick}
    >
      Button state: {count}
    </button>
  )
}

export default ButtonState