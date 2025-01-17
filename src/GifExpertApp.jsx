import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Pokemon']);

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

      
        { categories.map(category => 
            (
                <GifGrid key={category} category={category}/>
            )
        )}
       
      
    </>
  )
}
