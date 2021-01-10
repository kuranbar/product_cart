export type ElementData = {
  pid: string;
  name: string;
  price: string;
  max?: number;
  min?: number;
  quantity?: number;
  isBlocked?: boolean;
};

type Quantity = {
  updateTotalPrice: () => void;
};

export type CartElementData = ElementData & Quantity;

export type PartialData = {
  state: string;
  error?: string;
  data?: {
    pid: string;
    name: string;
    price: string;
    max?: number;
    min?: number;
    quantity?: number;
    isBlocked?: boolean;
  }[];
};
