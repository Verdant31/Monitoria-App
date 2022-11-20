export const getDate = () => {
  let day = new Date().toString().split(' ')[2];
  let month = (new Date().getMonth() + 1).toString();
  console.log(new Date().getMonth());
  if(Number(day) <= 10) {
    day = '0' + day;
    if(Number(month) < 10) {
      month = '0' + month;
    }
  }
  return `${day}/${month}`
}