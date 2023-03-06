import { useEffect, useRef, useState } from 'react'

const UseRefComponent = () => {

    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);
    const previousInputValue = useRef('');

    // useEffect(() => {
    //     count.current = count.current + 1;
    // }, [inputValue])

    useEffect(() => {
        count.current = count.current + 1;
    })
    
    useEffect(() => {
        previousInputValue.current = inputValue;
    })
    
  return (
    <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <h1>Render Count: {count.current}</h1>
        <h2>Curret Value: {inputValue}</h2>
        <h2>Previoud Value: {previousInputValue.current}</h2>
    </div>
  )
}

export default UseRefComponent