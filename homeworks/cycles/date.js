const date = () => {
  let day = parseInt(prompt("enter day"));
  let month = parseInt(prompt("enter month"));
  let year = parseInt(prompt("enter year"));
  let newDate = new Date(year, month - 1, day);
  newDate.setDate(newDate.getDate() + 1);
  console.log(`next date: ${newDate}`);
};
//throw new Error('ds pf,skb');
export default date;