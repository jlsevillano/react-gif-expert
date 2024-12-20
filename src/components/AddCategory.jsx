
import PropTypes from 'prop-types';
import { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        
        if (inputValue.trim().length <= 2) {
            return;
        }
        // setCategories(categories => [...categories, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search Gifs..."
                name="category"
                id="category"
                value={inputValue}
                // onChange={(e) => setInputValue(e.target.value)}
                onChange={onInputChange}
            />
            {/* <button type="submit">Add</button> */}
        </form>
    )
}

// Validación de props
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired, // `setCategories` debe ser una función y es obligatorio
};