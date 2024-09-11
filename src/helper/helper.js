const shorten_text = (title) => {
  const titleSplit = title.split(" ").splice(0, 4).join(" ");

  return titleSplit;
};
const off_price = (price) => {
  const off = (parseInt(price) * 10) / 100;
  return price - off;
};
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const sortProductsDesc = (products) => {
  const sortedProducts = [...products].sort(
    (a, b) =>
      b.default_variant.price.rrp_price - a.default_variant.price.rrp_price
  );
  return sortedProducts;
};

export { shorten_text, off_price, formatNumber, sortProductsDesc };
