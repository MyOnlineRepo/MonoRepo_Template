export type SaleItem = {
  id: number;
  customer: string;
  status: 'Open' | 'Won' | 'Lost';
  amount: number;
};
