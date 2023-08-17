import { useState } from 'react'
import Parent from './Parent'

function GrandParent() {
  const [data, setData] = useState('')

  return (
    <div className='grandparent-component'>
      <h1>GrandParent Component 🧓</h1>
      <h3>{data}</h3>
      <Parent />
    </div>
  )
}

export default GrandParent
