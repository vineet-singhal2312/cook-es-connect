import axios from "axios";

export const ApiService = async (type, body, routeEndPoint, headers) => {
  const { data } = await axios[type](
    `https://encouraging-sheath-dress-bear.cyclic.app/${routeEndPoint}`,
    // `http://localhost:8000/${routeEndPoint}`,
    body,
    headers
  );
  return data;
};
