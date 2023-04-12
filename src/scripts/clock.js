const getCurrentTime = () => {
  //get new date
  const today = new Date();

  //extract
  let day = today.getDay();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let millisecond = today.getMilliseconds();

  //day array
  const dayArray = [
    "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"
  ];

  //check leading zero
  hour = checkLeadingZero(hour);
  minute = checkLeadingZero(minute);
  second = checkLeadingZero(second);
  millisecond = leadingZeroMilli(millisecond);

  //assemble
  let currentTime = `${dayArray[day]} ${hour} : ${minute} : ${second} : ${millisecond}`;

  //render
  document.querySelector('.clock').innerHTML = currentTime;

  setTimeout(getCurrentTime, 150);
}

const checkLeadingZero = paramTime => {
  paramTime < 10
    ? paramTime = `0${paramTime}`
    :null
  return paramTime;
}

const leadingZeroMilli = paramTime => {
  if (paramTime < 10){
    paramTime = `00${paramTime}`
  } else if (paramTime < 100) {
    paramTime = `0${paramTime}`
  } 
  return paramTime;
}