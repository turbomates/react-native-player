import axios from "axios";
import { Album, AlbumsResponse } from "Models";

const BASE_URL = "https://iawake-backend-devel.dokku.f17y.com/api/v1";

export const fetchAlbums = () =>
  axios
    .get<AlbumsResponse>(`${BASE_URL}/programs/free`)
    .then(resp => resp.data.data)
    .catch(() => [] as Album[]);
