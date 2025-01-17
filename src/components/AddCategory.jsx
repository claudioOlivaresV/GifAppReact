import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    const category = event.target.value;
    setInputValue(category)
    
  }
  const onSubmit = (event) => {
    event.preventDefault()
    const category = inputValue.trim()
    if(category.length <=1) {
        return;
    }
    onNewCategory(category)
    setInputValue('')
  }
  return (
      <form onSubmit={ onSubmit}>
        <input type="text" placeholder="Buscar" value={inputValue} onChange={onInputChange} />

      </form>
  )
}
