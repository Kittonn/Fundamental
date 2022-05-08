export interface User {
  name: string;
  age: number;
  country: string;
  address: {
    province: string;
  };
  admin: boolean;
}
