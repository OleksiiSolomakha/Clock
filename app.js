const clock = document.querySelector('.clock');

const time = () => {
  const now = new Date();

  const date = now.toDateString();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const html = `
  <div>${date}</div>
  <span>${hours}</span> :
  <span>${minutes}</span> :
  <span>${seconds}</span>
  `;

  clock.innerHTML = html;
  
};

setInterval(time, 1000);