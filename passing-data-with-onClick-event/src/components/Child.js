import { useState } from 'react'

export default function Child({ passParent }) {
  const [data, setData] = useState("Child's data")

  const handleChange = (e) => {
    setData(e.target.value)
  }

  const handleClick = () => {
    passParent(data)
  }

  return (
    <div className='child-component'>
      <h1>Child Component 👶</h1>
      <h3>{data}</h3>
      <input type='text' value={data} onChange={handleChange} />
      <button onClick={handleClick}>Send data </button>
    </div>
  )
}
