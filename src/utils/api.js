// Get Properties

const API = process.env.REACT_APP_API;

export const getProperties = async () => {
  const data = await fetch(`${API}/properties`).then((res) => res.json());
  return data;
};
