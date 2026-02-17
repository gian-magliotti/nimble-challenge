export interface Candidate {
  uuid: string;
  candidateId: number;
  applicationId: number; 
  firstName: string;
  lastName: string;
  email: string;
}

export interface Job {
  id: number;
  title: string;
}

export interface ApplicationRequest {
  uuid: string;
  jobId: number;
  candidateId: number;
  applicationId: number;
  repoUrl: string;
}