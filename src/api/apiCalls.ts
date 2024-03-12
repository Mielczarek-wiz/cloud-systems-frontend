type Record = {
  country: string;
  confirmed: number;
  deaths: number;
  recovered: number;
  active: number;
  newCases: number;
  newDeaths: number;
  newRecovered: number;
  confirmedLastWeek: number;
  whoId: number;
};

export const getAll = async () => {
  try {
    const response = await fetch("http://localhost:8080/object", {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllByRegionId = async (regionId: number) => {
  try {
    const response = await fetch(`http://localhost:8080/region/${regionId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getOneById = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:8080/object/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createOrUpdate = async (record: Record, method: string) => {
  try {
    await fetch(`http://localhost:8080/object`, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
  } catch (error) {
    console.error(error);
  }
};

export const getStats = async () => {
  try {
    const response = await fetch("http://localhost:8080/stats");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
