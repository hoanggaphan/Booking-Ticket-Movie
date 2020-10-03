const formatDate = (value) => {
  if(!value) return;
  
  const d = new Date(value);
  const day = d.getDay() + 1;
  const date = ("0" + d.getDate()).slice(-2);
  const month = ("0" + (d.getMonth() + 1)).slice(-2);
  const year = d.getFullYear();

  return { day, date, month, year };
};

export default formatDate;
