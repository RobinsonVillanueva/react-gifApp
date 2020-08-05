import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const hadleInputChange = (e) => {

        setInputValue( e.target.value );
    }

    const hadleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( categories => [ inputValue, ...categories] );
            setInputValue('');    
        }
        
    }

    return (
        <form onSubmit={ hadleSubmit }>
            <input
                type="text"
                value={ inputValue }
                onChange={ hadleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};
