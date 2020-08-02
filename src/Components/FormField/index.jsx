import React from 'react';

import {FormFieldCamp} from '../styled';

function FormField({type, value, onChange, placeholder}){
    return(
        <FormFieldCamp>
            <FormFieldCamp.Input
                type={type} 
                value={value} 
                onChange={onChange}
                placeholder={placeholder}  
            />
         
        </FormFieldCamp>
    )
}

export default FormField;