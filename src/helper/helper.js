const shorten_text = (title) => {
  const titleSplit = title.split(" ").splice(0, 4).join(" ");

  return titleSplit;
};
const off_price = (price) => {
  const off = (parseInt(price) * 10) / 100;
  return price - off;
};
export { shorten_text, off_price };
