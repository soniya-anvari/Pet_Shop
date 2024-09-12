import { api } from "../api/api";

const getDogDryFoods = async () => {
  const pages = 5;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/dog-dry-food/search/?page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("z", response.data.data.products);
      allProducts = [...allProducts, ...response.data.data.products];
    }
  } catch (error) {
    console.log(error);
  }

  return allProducts;
};
const getDogWetFoods = async () => {
  const pages = 5;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/dog-wet-food-and-pouch/search/?page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      allProducts = [...allProducts, ...response.data.data.products];
    }
  } catch (error) {}

  return allProducts;
};
const getDogRewardFoods = async () => {
  const pages = 4;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/pet-food-and-nutritional-supplement/search/?page=${page}&q=تشویقی سگ`,
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
const getDogCollar = async () => {
  const pages = 4;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/health-and-care/search/?page=${page}&q=قلاده سگ`,
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

const getDogUnderlayPad = async () => {
  const pages = 4;
  let allProducts = [];
  try {
    for (let page = 1; page <= pages; page++) {
      const response = await api.get(
        `/categories/pet/search/?page=${page}&q=پد زیر انداز بهداشتی سگ`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("e", response.data);

      allProducts = [...allProducts, ...response.data.data.products];
    }
  } catch (error) {
    console.log(error);
  }

  return allProducts;
};
const getDogDryFoodsBrands = async () => {
  try {
    const response = await api.get(`/categories/dog-dry-food/search/`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data.data.filters.brands.options;
  } catch (error) {
    console.log(error);
  }
};
const getDogWetFoodsBrands = async () => {
  try {
    const response = await api.get(
      `/categories/dog-wet-food-and-pouch/search/`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return response.data.data.filters.brands.options;
  } catch (error) {
    console.log(error);
  }
};
const getDogCollarBrands = async () => {
  try {
    const response = await api.get(
      `/categories/health-and-care/search/?q=قلاده سگ`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.log("x", response.data.data.filters.brands.options);
    return response.data.data.filters.brands.options;
  } catch (error) {
    console.log(error);
  }
};
const getDogUndelayPadBrands = async () => {
  try {
    const response = await api.get(
      `/categories/pet/search/?q=پد زیر انداز سگ`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    console.log("x", response.data.data.filters.brands.options);
    return response.data.data.filters.brands.options;
  } catch (error) {
    console.log(error);
  }
};
export {
  getDogDryFoods,
  getDogDryFoodsBrands,
  getDogWetFoods,
  getDogWetFoodsBrands,
  getDogRewardFoods,
  getDogCollar,
  getDogCollarBrands,
  getDogUnderlayPad,
  getDogUndelayPadBrands,
};
