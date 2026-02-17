import { useState, useEffect } from 'react';
import type { Candidate } from '../types';
import { getCandidate } from '../services/api';

export const useCandidate = (email: string) => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        setLoading(true);
        const data = await getCandidate(email);
        setCandidate(data);
      } catch (err: any) {
        setError(err.message || 'Error al cargar candidato');
      } finally {
        setLoading(false);
      }
    };

    if (email) fetchCandidate();
  }, [email]);

  return { candidate, loading, error };
};