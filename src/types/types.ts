export type TCard = {
  id: number;
  title: string;
  stage: string;
  project: string | boolean;
  score: number;
};

export type TColumn = {
  id: number;
  sort: number;
  name: string;
  code: string;
};
