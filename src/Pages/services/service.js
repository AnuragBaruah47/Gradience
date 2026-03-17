

export const querySearch = (query, patterns) => {
  return patterns?.filter((pattern) =>
    pattern.name.toLowerCase().includes(query.toLowerCase()),
  );
};
