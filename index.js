// function writeCards()

function writeCards(arr, eventName) {
     let messages = [];
    for (let i = 0; i < arr.length; i++){
        messages.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

function countDown(num){
    while (num >= 0) {
        console.log(num--);
    }
}

// console.log(countDown(10))