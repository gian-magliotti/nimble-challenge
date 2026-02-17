import { useState } from 'react';
import { useApplyJob } from '../hooks/useApplyTOJob';
import type { Job, Candidate } from '../types';

interface Props {
  job: Job;
  candidate: Candidate | null;
}

export const JobItem = ({ job, candidate }: Props) => {
  const [repoUrl, setRepoUrl] = useState('');
  const { submitApplication, loading, success, error } = useApplyJob();

  const handleSubmit = () => {
    if (!repoUrl.trim() || !candidate) return;
    submitApplication(candidate, job.id, repoUrl);
  };

  if (success) {
    return (
      <div className="job-card" style={{ borderColor: '#28a745', background: '#f0fff4' }}>
        <h3 className="job-title">{job.title}</h3>
        <div className="job-body" style={{ textAlign: 'center', padding: '10px' }}>
          <p style={{ color: '#28a745', fontWeight: 'bold', fontSize: '1.2em' }}>
           ¡Postulación Enviada!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      
      <div className="job-body">
        <input 
          type="text" 
          placeholder="URL de tu repo GitHub..." 
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
          disabled={loading}
          className="job-input"
        />

        <button 
          onClick={handleSubmit} 
          disabled={loading || !repoUrl.trim()}
          className="job-button"
        >
          {loading ? 'Enviando...' : 'Postularme'}
        </button>

        {error && (
          <p className="error-msg" style={{ color: '#dc3545', marginTop: '10px' }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};