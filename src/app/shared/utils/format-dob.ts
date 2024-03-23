export const formatDob = (dob: Date) => {
  const year = dob.getFullYear();
  const month = dob.getMonth() + 1;
  const date = dob.getDate();
  return `${year}-${month}-${date}`;
};
