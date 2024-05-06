import React, { useState } from 'react';
import './AddCard.css'

function AddVacancy(props) {
    const [companyName, setCompanyName] = useState('');
    const [roleVacancy, setRoleVacancy] = useState('');
    const [expectedSalary, setExpectedSalary] = useState('');
    const [description, setDescription] = useState('');
    const [comments, setComments] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Estado para la fecha actual
    const [workType, setWorkType] = useState(''); // Estado para el tipo de trabajo

    const handleDescriptionChange = (event) => {
        const { value } = event.target;
        if (value.length <= 200) {
            setDescription(value);
        }
    };

    const handleCommentsChange = (event) => {
        const { value } = event.target;
        if (value.length <= 80) {
            setComments(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Valores introducidos:", companyName, roleVacancy, expectedSalary, date, workType);
        // Aquí puedes hacer lo que quieras con los datos introducidos
        // Por ejemplo, enviarlos al servidor
        setCompanyName('');
        setRoleVacancy('');
        setExpectedSalary('');
        setDate(new Date().toISOString().split('T')[0]); // Resetear la fecha a la fecha actual
        setWorkType('');
        setDescription('');
        setComments('');
    };

    return (
        <div className="form-container">
            <div className="input-container">
                <input type="text" name="companyName" id="companyName" placeholder='Company Name' value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
            </div>
            <div className="input-container">
                <input type="text" name='roleVacancy' id='roleVacancy' placeholder='Role' value={roleVacancy} onChange={(e)=> setRoleVacancy(e.target.value)}/>
            </div>
            <div className="input-container">
                <input type="date" name='date' value={date} onChange={e => setDate(e.target.value)}/>
            </div>
            <div className="input-container">
                <input type="text" name='expectedSalary' placeholder='Expected Salary' value={expectedSalary} onChange={ e => setExpectedSalary(e.target.value)}/>
            </div>
            <div className="input-container">
                <select value={workType} onChange={e => setWorkType(e.target.value)}>
                    <option value="">Seleccione un tipo de trabajo</option>
                    <option value="remote">Trabajo Remoto</option>
                    <option value="hybrid">Trabajo Híbrido</option>
                    <option value="inPerson">Trabajo Presencial</option>
                </select>
            </div>
            <div className="input-container">
                <textarea name="job-description" id="job-description" placeholder='Job Description' value={description} onChange={handleDescriptionChange}></textarea>
                <span className="character-count">{description.length}/200</span>
            </div>
            <div className="input-container">
                <textarea name="comments" id="comments" placeholder='Comments' value={comments} onChange={handleCommentsChange}></textarea>
                <span className="character-count">{comments.length}/80</span>
            </div>
            <div className="button-container">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default AddVacancy;
