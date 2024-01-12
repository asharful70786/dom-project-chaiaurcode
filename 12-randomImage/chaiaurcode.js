let btn = document.querySelector("button");
let random = Math.floor(Math.random() * 5) + 1;
let p = document.querySelector("p");

btn.addEventListener("click", () => {
    let guess = document.getElementById("inp").value;

    if (guess.toLowerCase() === "quit") {
        p.innerText = `You quit the game. The correct answer was ${random}.`;
    } else if (guess == random) {
        p.innerText = `Congratulations! You guessed correctly. The answer is ${random}.`;
        btn.disabled = true; 
    }else if(guess<random){
        p.innerText ="your number is smLL, kindly try a little big"
    }else if(guess>random){
        p.innerText ="your number is BIG, kindly try a little small"
    }else  {
        p.innerText = `Sorry, your guess was incorrect. Try again.`;
    }
});
