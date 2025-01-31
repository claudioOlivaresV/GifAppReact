import React, { useEffect, useState } from 'react'
import { getGifts } from '../helpers/getGifs'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
    // pasar a customHook
    // const [images, setImages] = useState([])

    // const getImages = async() => {
    //     const newImages = await getGifts(category);
    //     setImages(newImages)
    // }
    
    // useEffect(() => {
    //     getImages()
    // }, [])

    const { images, isLoading} = useFetchGifs(category) 
  return (
    <>
      <h3>{category}</h3>
      {isLoading ? <h2>Cargando..</h2> : null}
      <div className='card-grid'>
        {
            images.map((img) => (
                <GifItem 
                 key={img.id}
                //  title={img.tile}
                //  url={img.url}
                { ...img }
                 />

            ))

        }
      </div>
    </>
  )
}
