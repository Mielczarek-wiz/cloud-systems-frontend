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
const backendUrl = "http://localhost:6789";
export const getAll = async () => {
  try {
    const response = await fetch(`${backendUrl}/object`, {
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
    const response = await fetch(`${backendUrl}/region/${regionId}`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getOneById = async (id: number) => {
  try {
    const response = await fetch(`${backendUrl}/object/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createOrUpdate = async (record: Record, method: string) => {
  try {
    await fetch(`${backendUrl}/object`, {
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
    const response = await fetch(`${backendUrl}/stats`, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const getRegions = async () => {
  try {
    const response = await fetch(`${backendUrl}/region`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
