import { useEffect, useMemo, useRef, useState } from 'react';
import { ContributionsResponse } from '../models/Contribution';

const GH_CONTRIBUTIONS_API = 'https://gh-contributions-api.vercel.app/';

const cache = new Map<string, ContributionsResponse>();
export const useContributions = (user: string, year: string): [ContributionsResponse, string | null, boolean] => {
  const [contributions, setContributions] = useState<ContributionsResponse>([[]]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const caches = useRef(cache);

  useEffect(() => {
    const cachedRespose = caches.current.get(`${user}-${year}`);
    console.log(cachedRespose);
    if (cachedRespose) {
      setContributions(cachedRespose);
    } else {
      const url = new URL(`${GH_CONTRIBUTIONS_API}${user}/${year}`);
      setIsPending(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setContributions(data);
          caches.current.set(`${user}-${year}`, data);
        })
        .catch((err) => setError(err.message))
        .finally(() => setIsPending(false));
    }
  }, [user, year]);

  return [contributions, error, isPending];
};
