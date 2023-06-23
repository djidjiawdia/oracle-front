import { Country } from './country.type';

export type Location = {
  location_id: number;
  postal_code: string;
  city: string;
  state_province: string;
  country: Country;
};
