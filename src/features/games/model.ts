export type Categories = {
    id: number;
    name: string;
};

export type Games = {
  name: string;
  description: string;
  icon: string;
  code: string;
  categoryIds: number[];
};

