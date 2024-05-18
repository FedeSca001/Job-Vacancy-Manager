import React, { useState } from 'react';
import './AddCard.css';

function AddVacancy() {
  const [companyName, setCompanyName] = useState('');
  const [roleVacancy, setRoleVacancy] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [workType, setWorkType] = useState('');
  const [statusType, setStatusType] = useState('');

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
    console.log("Submitted values:", companyName, roleVacancy, expectedSalary, date, workType, statusType);
    // Handle form submission here
    setCompanyName('');
    setRoleVacancy('');
    setExpectedSalary('');
    setDate(new Date().toISOString().split('T')[0]);
    setWorkType('');
    setDescription('');
    setComments('');
    setStatusType('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input type="text" placeholder="Company Name" value={companyName} onChange={(event) => setCompanyName(event.target.value)} />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Role" value={roleVacancy} onChange={(e) => setRoleVacancy(e.target.value)} />
        </div>
        <div className="input-container">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Expected Salary" value={expectedSalary} onChange={(e) => setExpectedSalary(e.target.value)} />
        </div>
        <div className="input-container">
          <select value={workType} onChange={(e) => setWorkType(e.target.value)}>
            <option value="">Select Work Type</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="inPerson">In Person</option>
          </select>
        </div>
        <div className="input-container">
          <textarea placeholder="Job Description" value={description} onChange={handleDescriptionChange}></textarea>
          <span className="character-count">{description.length}/200</span>
        </div>
        <div className="input-container">
          <textarea placeholder="Comments" value={comments} onChange={handleCommentsChange}></textarea>
          <span className="character-count">{comments.length}/80</span>
        </div>
        <div className="input-container">
          <select value={statusType} onChange={(e) => setStatusType(e.target.value)}>
            <option value="">Select Status</option>
            <option value="INTERESTED">INTERESTED</option>
            <option value="APPLIED">APPLIED</option>
            <option value="RECRUITER INTERVIEW">RECRUITER INTERVIEW</option>
            <option value="TECH INTERVIEW">TECH INTERVIEW</option>
            <option value="CLIENT INTERVIEW">CLIENT INTERVIEW</option>
            <option value="HR INTERVIEW">HR INTERVIEW</option>
            <option value="OFFER">OFFER</option>
            <option value="NOT SELECTED">NOT SELECTED</option>
          </select>
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddVacancy;
