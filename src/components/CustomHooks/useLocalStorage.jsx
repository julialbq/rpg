import { useEffect, useState } from "react"

export const useLocalStorage = (key, defaultValue) => {

  const value = useState(() => {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved)
    return initial || defaultValue
  })

  function setValue(value) {
    window.localStorage.setItem(`${key}`, JSON.stringify(value))
  }

  function resetValue(value) {
      window.localStorage.clear(value)    
  }

  return { value, setValue, resetValue };
}
