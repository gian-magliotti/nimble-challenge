import type { Job, Candidate } from '../types';
import { JobItem } from './JobItem';

interface Props {
  jobs: Job[];
  candidate: Candidate | null;
}

export const JobList = ({ jobs, candidate }: Props) => {
  return (
    <div className="job-grid">
      {jobs.map((job) => (
        <JobItem 
          key={job.id} 
          job={job} 
          candidate={candidate} 
        />
      ))}
    </div>
  );
};