import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['league of legends']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          categories.map(c => (
            <GifGrid
              key={c}
              category={c}
            />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp;