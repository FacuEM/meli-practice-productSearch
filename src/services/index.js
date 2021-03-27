const makeRequest = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getItemById = async (id) => {
  const url = `http://localhost:5000/api/items/${id}`;
  return makeRequest(url);
};

export const searchItems = async (slug) => {
  const url = `http://localhost:5000/api/items?q=${slug}`;
  return makeRequest(url);
};
