export const getDate = () => {
  let day = new Date().getDay().toString();
  let month = new Date().getMonth().toString();
  if(Number(day) <= 10) {
    day = '0' + day;
    if(Number(month) <= 10) {
      month = '0' + month;
    }
  }
  return `${day}/${month}`
}