export const basicFetch = async (endpoint) => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error("Error!");

  const data = await response.json();

  return data;
};

//fetch functions

export const fetchMovies = async (search = "", page = 1) => {
  return await basicFetch(`/api/movies?search=${search}&page=${page}`);
};
