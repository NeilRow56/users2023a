import { SEARCH_BASE_URL, POPULAR_BASE_URL } from "../../config";
import { basicFetch } from "../../lib/helperMovies";

export default async function handler(req, res) {
  const { page, search } = req.query; // Grab search params

  const endpoint = search
    ? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await basicFetch(endpoint);

  res.status(200).json(data);
}
