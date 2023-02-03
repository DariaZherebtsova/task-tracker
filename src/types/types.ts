export type TCard = {
  id: string;
  title: string;
  stage: string;
  project: string | boolean | string[];
  projectName?: boolean | string[];
  score: number;
};

export type TColumn = {
  id: number;
  sort: number;
  name: string;
  code: string;
};

export type TProject = {
  id: number;
  code: string;
  name: string;
  sort: number;
};

export type TLocalData = {
  columns: TColumn[];
  projects: Record<string, TProject>;
  cardsByStage: Record<string, TCard[]>;
};
