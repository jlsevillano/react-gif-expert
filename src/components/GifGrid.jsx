import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images: images, isLoading } = useFetchGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<p>Cargando...</p>)
                // isLoading 
                // ? <h4>Cargando...</h4>
                // : null
            }

            <div className="card-grid">
                {images.map((image) => (

                    <GifItem
                        key={image.id}
                        {...image}
                    />

                ))}
            </div>

        </>
    )
}

// Validación de props
GifGrid.propTypes = {
    category: PropTypes.string.isRequired, // `category` debe ser una cadena y es obligatorio
};