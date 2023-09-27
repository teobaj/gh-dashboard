type Contribution = {
  count: number;
  name: string;
  month: string;
  day: number;
  year: number;
  level: number;
};

type ContributionsResponse = Array<Contribution | null>[];
