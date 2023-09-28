import { FC } from 'react';
import { useContributions } from '../hooks/useContributions';

export const TopContributions: FC = () => {
  const [contributions] = useContributions('teobaj', '2023');
  const sortedContributions = contributions
    .flat()
    .filter(Boolean)
    .sort((current, contribution) => contribution.level - current.level);
  return (
    <ul className="border-2 border-gray-600 rounded-md p-2">
      <li>Teo</li>
    </ul>
  );
};
