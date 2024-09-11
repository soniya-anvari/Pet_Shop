import { api } from "../api/api";

const getCatDryFoods = async () => {
  const pages = 5; // تعداد صفحاتl
  let allProducts = []; // برای ذخیره تمام فیلم‌ها
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/cat-dry-foods/search/?page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      allProducts = [...allProducts, ...response.data.data.products];
    }
  } catch (error) {
    console.log(error);
  }

  return allProducts;
};
const getCatDryBrands = async () => {
  const response = await api.get(`/categories/cat-dry-foods/search/`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return response.data.data.filters.brands.options;
};
export { getCatDryFoods, getCatDryBrands };
