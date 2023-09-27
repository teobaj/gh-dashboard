import { FC } from 'react';
import { useContributions } from '../hooks/useContributions';
import { ContributionCell } from './ContributionCell';

export const Board: FC = () => {
  const [contributions, error, isPending] = useContributions('teobaj', '2022');
  if (isPending) {
    return <div>...Loading </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: `repeat(${contributions.length}, 1fr)`,
        gridTemplateColumns: `repeat(${contributions[0].length}, 1fr)`,
      }}
    >
      {contributions.map((weekDay) =>
        weekDay.map((day) => <ContributionCell {...day} />)
      )}
    </div>
  );
};
