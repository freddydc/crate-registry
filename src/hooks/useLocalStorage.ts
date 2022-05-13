import { Dispatch, SetStateAction, useEffect, useState } from 'react'

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const storedData = localStorage.getItem(key)
  const data = storedData !== null ? JSON.parse(storedData) : initialValue
  const [value, setValue] = useState(data)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

export { useLocalStorage }
