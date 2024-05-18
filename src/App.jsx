import './App.css';
import AddCard from './Componentes/AddCard';

function App() {
  const status = ['INTERESTED', 'APPLIED', 'RECRUITER INTERVIEW', 'TECH INTERVIEW', 'CLIENT INTERVIEW', 'HR INTERVIEW', 'OFFER', 'NOT SELECTED'];

  return (
    <div className="app-container">
      <h1>Tech Jobs Tracker</h1>
      <h3>Add and control the vacancies you are interested in</h3>
      <section className="sections-container">
        {status.map((item, index) => (
          <div key={index} className="card-container">
            <div className="left-content">
              <h4>{item}</h4>
            </div>
            <div className="right-content">Content goes here</div>
          </div>
        ))}
      </section>
      <AddCard />
    </div>
  );
}

export default App;
