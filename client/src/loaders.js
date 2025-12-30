import axios from "axios";


export const dashboardloader = async () => {
  try {
    const { data } = await axios.get('/pnwx/auth/current');
    return data;
  } catch (error) {
    console.error("Loader Error: ", error.response?.data || error.message);
    return { error: true, meg: error.response?.data };
  }
};

export const allproductsLoader = async ({ request }) => {

  // const params = Object.fromEntries([
  //   ...new URL(request.url).searchParams.entries(),
  // ]);

  const url = new URL(request.url);
  const params = Object.fromEntries(url.searchParams);
  try {
    const { data } = await axios.get('/api/pnwx/products', { params });
    return { data, searchValues: { ...params } };

  } catch (error) {
    console.error("Loader Error: ", error.response?.data || error.message);
    return { error: true, meg: error.response?.data };
  }
};

export const admin = async ({ request }) => {
  const url = new URL(request.url);
  const params = Object.fromEntries(url.searchParams);
  try {
    const { data } = await axios.get('/api/pnwx/admin/products', { params });
    return { data, searchValues: { ...params } };

  } catch (error) {
    console.error("Loader Error: ", error.response?.data || error.message);
    return { error: true, meg: error.response?.data };
  }
};

export const editProductLoader = async ({ params }) => {

  try {
    const { data } = await axios.get(`/api/pnwx/products/${params.id}`);
    return data;
  } catch (error) {
    console.error("Loader Error: ", error.response?.data || error.message);
    return { error: true, meg: error.response?.data };
  }
};

