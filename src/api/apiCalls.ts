export const getAll = async () => {
  try {
    const response = await fetch("http://localhost:8080/object");
    const data = await response.json();
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

