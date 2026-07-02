import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const CounterNew = () => {
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <h2>{count}</h2>
            <Button variant='danger' onClick={() => setCount(count - 1)}>-</Button>
            <Button variant='primary' onClick={() => setCount(0)}>reset</Button>
            <Button variant='success' onClick={() => setCount(count + 1)}>+</Button>
            <p>{count % 2 === 0 ? 'Numri është çift' : 'Numri është tek'}</p>
        </div>

    )
}

export default CounterNew