export const filterLimit = (params: any) => {
  const filter = params.slice(0, 20);
  return filter;
};
