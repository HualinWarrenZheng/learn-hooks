import {useEffect, useState} from 'react'

const UseEffectComponent = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
      let timer = setTimeout(() => {
        setCount(count => count + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }, [count]);

  return (
    <div>This page has been rendered {count} {count > 1 ? 'times' : 'time'}!</div>
  )
}

export default UseEffectComponent