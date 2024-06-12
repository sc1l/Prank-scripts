const Elements = document.querySelectorAll("*");

console.log('Loaded!')
const deleteRandomDiv = () => {
  if (Elements.length === 0) {
    clearInterval(intervalId);
    return;
  }

  const randomIndex = Math.floor(Math.random() * Elements.length);
  Elements[randomIndex].remove();
};

const intervalId = setInterval(deleteRandomDiv, 500);
