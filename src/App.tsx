import { JobList } from './components/JobList';
import { useCandidate } from './hooks/useCandidate';
import { useJobs } from './hooks/useJobs';
import './App.css';

const MY_EMAIL = "gianmagliotti03@gmail.com";

function App() {
  const candidate= useCandidate(MY_EMAIL);
  const jobs = useJobs();
  const isLoading = candidate.loading || jobs.loading;
  const error = candidate.error || jobs.error;

  if (isLoading) {
    return <div className="loading">Cargando aplicación...</div>;
  }

  if (error) {
    return <div className="error">Ocurrió un error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Bienvenido, {candidate.candidate?.firstName}</h1>
      <JobList 
        jobs={jobs.jobs} 
        candidate={candidate.candidate} 
      />
    </div>
  );
}

export default App;