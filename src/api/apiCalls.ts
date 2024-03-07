export const getAll = async () => {
  try {
    const response = await fetch("http://localhost:8080/object", {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getOneById = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:8080/object/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateOne = async (id: number, record: any) => {
  try {
    const response = await fetch(`http://localhost:8080/object/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    console.log(response);
    const data = response.body;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postOne = async (record: any) => {
  try {
    const response = await fetch("http://localhost:8080/object", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    });
    console.log(response);
    const data = response.body;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getStats = async () => {
  try {
    const response = await fetch("http://localhost:8080/stats");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
