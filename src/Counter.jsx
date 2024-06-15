import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click me
            </button>
        </>
    )
}

export default Counter