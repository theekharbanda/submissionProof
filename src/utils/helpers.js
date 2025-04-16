export const getHeatmapColor = (value) => {
  if (value === 0) return 'green';
  if (value == 1) return 'yellow';
  if (value == 2) return 'black';
  if (value == 3) return 'green';
  if (value == 4) return 'white';
};


export const getInitials = (name) => {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('.');
};

