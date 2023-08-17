import { useState } from 'react'
import Parent from './Parent'

function GrandParent() {
  const [data, setData] = useState('')

  const handleData = (data) => {
    setData(data)
  }

  return (
    <div className='grandparent-component'>
      <h1>GrandParent Component 🧓</h1>
      <h3>{data}</h3>
      <Parent passGrandParent={handleData} />
    </div>
  )
}

export default GrandParent
