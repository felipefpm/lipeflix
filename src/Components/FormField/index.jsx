import React from 'react';

function FormField({label, type, value, onChange}){
    return(
        <div>
            <label>
            {label} <br/>
            <input
             type={type} 
             value={value} 
             onChange={onChange}
            />
            </label>
        </div>
    )
}

export default FormField;