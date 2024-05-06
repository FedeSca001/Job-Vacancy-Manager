import React, { useState } from 'react';

function AddVacancy(props) {
    const [inputValue, setInputValue] = useState('');
    console.log(props);
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes hacer lo que quieras con el valor introducido
        console.log("El valor introducido es:", inputValue);
    };

    return (
        <div>
            <div className="form-contenedor">
                <input type="text" name="vacancyInput" id="vacancyInput" onChange={(event)=>{setInputValue(event.target.value);}} />
                <label htmlFor="vacancyInput">Vacancy:</label>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddVacancy;
