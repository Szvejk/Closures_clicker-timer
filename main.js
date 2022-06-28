// const user = (name = "", age) => {
//     let userName = "name";
//     let userAge = 16;
//     function showName() {
// console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwo': 'Nie możesz kupić piwa'}`);



//     }
//     return showName
// }
// const Mieszko = user("Mieszko", 20);
// const Jagienka = user("Jagienka", 17);
// Mieszko()
// Jagienka()

const clock = () => {
    let seconds = 0;
    document.body.textContent = 0 + "sekund";

    const timer = () => {
        seconds++;
        document.body.textContent = seconds + "  sekund";
    }
    return timer
}
const start = clock();
setInterval(start, 1000);