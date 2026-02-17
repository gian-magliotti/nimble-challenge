import axios from 'axios';
import type { ApplicationRequest, Candidate, Job } from '../types';

const api = axios.create({
  baseURL: "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api"
});

export const getCandidate = async (email: string) => {
  const response = await api.get<Candidate>(`/candidate/get-by-email?email=${email}`);
  return response.data;
};

export const getJobs = async () => {
  const response = await api.get<Job[]>('/jobs/get-list');
  return response.data;
};

export const applyToJob = async (payload: ApplicationRequest) => {
  const response = await api.post('/candidate/apply-to-job', payload);
  return response.data;
};