const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalize;

export const convertToId = (string) => {
  switch (string.length) {
    case 1:
      return `#00${string}`;
    case 2:
      return `#0${string}`;
    case 3:
      return `#${string}`;
    default:
      break;
  }
};
