const getCurrentTime = () => {
  const options = {
    timeZone: 'Asia/Seoul',
    hour12: true,
    weekday: 'long', //full names
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  //get the current time
  const currentTime = new Date().toLocaleString('en-US', options);

  //render
  document.querySelector('.clock').innerHTML = currentTime;

  setTimeout(getCurrentTime, 150);
}
