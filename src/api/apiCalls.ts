export const callApi = async () => {
  try {
    const response = await fetch("http://localhost:3213/object");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
