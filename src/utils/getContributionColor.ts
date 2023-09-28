type Color = string;

export const getContributionColor = (level: number): Color => {
  if (level > 10) return '#4dfd00';
  if (level > 7) return '#3dca00';
  if (level > 5) return '#35b100';
  if (level > 2) return '#2e9700';
  if (level > 0) return '#1e6500';
  return '#1F2937';
};
