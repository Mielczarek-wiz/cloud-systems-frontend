export type Inputs = {
  id: number;
  country: string;
  confirmed: string;
  deaths: string;
  recovered: string;
  active: string;
  newCases: string;
  newDeaths: string;
  newRecovered: string;
  confirmedLastWeek: string;
  whoId: number;
};

export type Data = {
  id: number;
  country: string;
  confirmed: string;
  deaths: string;
  recovered: string;
  active: string;
  newCases: string;
  newDeaths: string;
  newRecovered: string;
  confirmedLastWeek: string;
  region: string;
};
export type Regions = {
  id: number;
  region: string;
};
