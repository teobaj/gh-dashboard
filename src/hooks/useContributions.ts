import { useEffect, useState } from 'react';

const GH_CONTRIBUTIONS_API = 'https://gh-contributions-api.vercel.app/';

export const useContributions = (
  user: string,
  year: string
): [ContributionsResponse, string | null, boolean] => {
  const [contributions, setContributions] = useState<ContributionsResponse>([
    [],
  ]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  useEffect(() => {
    const url = new URL(`${GH_CONTRIBUTIONS_API}${user}/${year}`);
    setIsPending(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setContributions(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsPending(false));
  }, [user, year]);

  return [contributions, error, isPending];
};
