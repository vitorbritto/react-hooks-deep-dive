import { useState, useMemo } from  'react'

const MemoHook = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  return (
    <div>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

const slowFunction = (num: number) => {
  console.log('Calling slow function')
  for (let i = 0; i <= 10000; i++) {}
  return num * 2
}

export default MemoHook