import { FC } from 'react';
import { useContributions } from '../hooks/useContributions';
import { ContributionCell } from './ContributionCell';

export const Board: FC = () => {
  const [contributions, error, isPending] = useContributions('teobaj', '2023');
  if (isPending) {
    return <div>...Loading </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        gridTemplateRows: `repeat(${contributions.length}, 16px)`,
        gridTemplateColumns: `repeat(${contributions[0].length}, 16px)`,
      }}
      className="grid gap-1 p-4 border-2 border-gray-600 rounded-md content-center w-fit bg-slate-900"
    >
      {contributions.map((weekDay) => weekDay.map((contribution, i) => <ContributionCell {...contribution} key={i} />))}
    </div>
  );
};
