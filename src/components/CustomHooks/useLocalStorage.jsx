import { useState } from "react"

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(defaultValue)
    const saved = localStorage.getItem(key);
    JSON.parse(saved)

  function saveValue(value) {
    setValue(value)
    window.localStorage.setItem(`${key}`, JSON.stringify(value))
  }

  function resetValue(key) {
      window.localStorage.removeItem(key)
      setValue(defaultValue)  
  }

  return { value, saveValue, resetValue };
}
