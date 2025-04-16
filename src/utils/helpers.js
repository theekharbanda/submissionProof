export const getHeatmapColor = (value) => {
  if (value === 0) return '#f0f0f0';
  if (value < 3) return '#ebf7eb';
  if (value < 5) return '#c2e6c2';
  if (value < 10) return '#71c771';
  if (value < 20) return '#2d8659';
  return '#006400';
};

export const formatCandidateName = (name) => {
  return name.split(' ').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()
  ).join(' ');
};

export const getInitials = (name) => {
  return name
    .split(' ')
    .map(part => part.charAt(0).toUpperCase())
    .join('.');
};

export const calculateAverageRating = (ratings) => {
  if (!ratings.length) return 0;
  const sum = ratings.reduce((acc, val) => acc + val, 0);
  return Math.round((sum / ratings.length) * 10) / 10;
};