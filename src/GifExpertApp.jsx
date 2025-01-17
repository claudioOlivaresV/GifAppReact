import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

  const onAddCategory = (category) => {
    if(categories.includes(category)) return
    setCategories([category, ...categories])
  }

  console.log(categories);

  return (
    <>
      <h1>GifExpertAppss</h1>
      <AddCategory 
         onNewCategory={onAddCategory}
    //   setCategories={setCategories}
      />

      <ol>
        { categories.map(category => {
            return <li key={category}>{category}</li>
        })}
       
      </ol>
    </>
  )
}
