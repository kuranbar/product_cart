export type ElementData = {
  pid: string;
  name: string;
  price: string;
  max: number;
  min: number;
};

export type PartialData = {
  state: string;
  error?: string;
  data?: {
    pid: string;
    name: string;
    price: string;
    max: number;
    min: number;
  }[];
};
