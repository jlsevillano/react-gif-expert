// import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    // console.log(categories);

    const onAddCategory = (newCategory) => {
        // setCategories(categories => [...categories, 'HunterXHunter']);
        // setCategories([...categories, 'HunterXHunter']);
        console.log(newCategory);
        if (categories.map(category => category.toLowerCase()).includes(newCategory.toLowerCase())) {
            return;
        }
        setCategories(cat => [...cat, newCategory]);
    }


    return (
        <>

            <h1>GifExpert App</h1>
            <hr />
            <h2>Add Category</h2>

            <AddCategory
                // setCategories={setCategories} 
                // onNewCategory={event => onAddCategory(event)}
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
            {/* GifItme */}
        </>
    )
}
