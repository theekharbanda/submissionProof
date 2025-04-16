export const getHeatmapColor = (value) => {
  if (value === 0) return '#f0f0f0';
  if (value === 1) return '#ebf7eb';
  if (value === 2) return '#c2e6c2';
  if (value === 3) return '#71c771';
  if (value === 4) return '#2d8659';
};

export const getInitials = (name) => {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('.');
};

