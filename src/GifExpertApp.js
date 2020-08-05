import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( categoria => 
                        <GifGrid 
                            key={ categoria }
                            category={ categoria } 
                        />
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
