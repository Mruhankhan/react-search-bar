import React, { useState} from 'react'


export default function SearchBar(props) {
    const [inputValue , setInputValue] = useState('')
    const handleChange = (e) => {

        setInputValue(e.target.value)
  }
  
  const click = () =>{
    setInputValue('')
  }

  const should = inputValue.length > 0

  const filter = props.items.filter((product) =>{
    return product.includes(inputValue)
  })


    return (

    <div>
        <input value={inputValue} onChange={handleChange}/>
       {should &&  <button onClick={click}>Clear</button>}
       

       <ul>
       {filter.map((product) =>{
return <li key={product}>{product}</li>
      })}

       </ul>
   
    </div>
  
  
  )
}
