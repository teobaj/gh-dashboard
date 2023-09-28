import { FC } from 'react';
import { getContributionColor } from '../utils/getContributionColor';
import { Contribution } from '../models/Contribution';

export const ContributionCell: FC<Contribution> = (props) => {
  if (!props.name) {
    return <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>;
  }
  return (
    <div
      className="w-3 h-3 cursor-pointer rounded-sm"
      style={{ background: getContributionColor(props.level) }}
      title={`You made ${props.count} contributions on ${props.name}, ${props.day} ${props.month}`}
    ></div>
  );
};
