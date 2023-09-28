export type Contribution = {
  count: number;
  name: string;
  month: string;
  day: number;
  year: number;
  level: number;
};

export type ContributionsResponse = Array<Contribution>[];
