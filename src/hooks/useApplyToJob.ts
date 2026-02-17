import { useState } from 'react';
import { applyToJob } from '../services/api';
import type { Candidate } from '../types';

export const useApplyJob = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitApplication = async (candidate: Candidate, jobId: number, repoUrl: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await applyToJob({
        uuid: candidate.uuid,
        candidateId: candidate.candidateId,
        applicationId: candidate.applicationId,
        jobId,
        repoUrl
      });
      setSuccess(true);
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Error al enviar la postulación';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return { submitApplication, loading, success, error };
};