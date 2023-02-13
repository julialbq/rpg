import { useState } from "react"

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue)

  const handleInput = (event) => {
    setValue(event.target.value)
  }

  return {value, setValue, handleInput}
}
