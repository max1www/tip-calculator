export const notZeroValidator = (value) => {
  return value === '0' ? `Can't be zero` : null;
};
