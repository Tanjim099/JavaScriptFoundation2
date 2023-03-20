const randomNumber = Math.floor(Math.random() * 1000) +1;
console.log(randomNumber);

const delay = setTimeout(randomNumber, 3000);
console.log(delay);



const delay = 3; // Modify this variable to change the delay in seconds

console.log(`Generating a random number after a ${delay}-second delay...\n`);

let countdown = delay;
const countdownInterval = setInterval(() => {
  console.log(`Time remaining: ${countdown}s`);
  countdown--;
  if (countdown === 0) {
    clearInterval(countdownInterval);
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    console.log(`\nRandom number generated: ${randomNumber}`);
  }
}, 1000);