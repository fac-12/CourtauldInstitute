export const capitalizeFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const capitalizeArray = array =>
  array.map(each => capitalizeFirstLetter(each));
