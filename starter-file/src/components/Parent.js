import { useState } from 'react'
import Child from './Child'

export default function Parent() {
  const [data, setData] = useState('')

  return (
    <div className='parent-component'>
      <h1>Parent Component 🧑</h1>
      <h3>{data}</h3>
      <button>Send data</button>
      <Child />
    </div>
  )
}
