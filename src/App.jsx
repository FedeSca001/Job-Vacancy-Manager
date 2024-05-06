import './App.css'
import AddCard from './Componentes/AddCard';

function App() {
  const status =['INTERESTED', 'APPLIED', 'RECRUITER INTERVIEW', 'TECH INTERVIEW', 'CLIENT INTERVIEW', 'HR INTERVIEW', 'OFFER', 'NOT SELECTED']
  return (
    <>
      <h1>Tech jobs tracker</h1>
      <h3>Add and control the vacancies you are interested in</h3>
      {status.map((item, index) => {
        return (
          <div key={index} className='card-container'>
            <div className='left-content'>
              <h4>{item}</h4>
              <AddCard nameCard={item}/>
            </div>
            <div className='right-content'>ACA VA EL CONTENIDO LUEGO</div>
          </div>
        );
      })}
    </>
  )
}

export default App
