import { useState } from 'react'
import Child from './Child'

export default function Parent({ passGrandParent }) {
  const [data, setData] = useState('')

  const handleData = (data) => {
    setData(data)
    passGrandParent(data)
  }

  return (
    <div className='parent-component'>
      <h1>Parent Component 🧑</h1>
      <h3>{data}</h3>
      <Child passParent={handleData} />
    </div>
  )
}
