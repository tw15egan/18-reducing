const videos = [...document.querySelectorAll('.videos > li[data-time]')];
let totalTime = 0;

// My Way
// videos.map((video) => {
//   const time = video.dataset.time;
//   let minutes = (time.split(':')[0]) * 60;
//   let seconds = time.split(':')[1] * 1;
//   totalTime += minutes + seconds;
// });

const seconds = videos
  .map(node => node.dataset.time)
  .map(time => {
    const [mins, secs] = time.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, seconds) => total + seconds );
  
let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
let minutes = Math.floor((secondsLeft % 3600) / 60);
console.log(`There are ${hours} hours and ${minutes} minutes worth of video`);

  
  

