// Setting Initial Variables
const page = document.getElementById("page");
const instruct = document.getElementById("instruct");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const goButton = document.getElementById("goButton");
const example = document.getElementById("example");
let pageNum = 0;
let arraySym = ['!', '@', '#', '$', '%'];

//Main Array For Mind Reader to Pull Information From and insert into page
let mainArr = [
    {   //Page 1
        instruct: "I can read your mind",
        nextButton: '',
        goButton: "GO",
        prevButton: ''
    },
    {   //Page 2
        instruct: "Pick a number from 1-99",
        nextButton: "Next",
        example: "When you have your number click next",
        prevButton: "Back"
    },
    {   //Page 3
        instruct: "Add both digits together to get a new number",
        nextButton: "Next",
        example: "Ex: 14 is 1 + 4 = 5",
        prevButton: "Back"
    },
    {   //Page 4
        instruct: "Subtract your new number from the original",
        nextButton: "Next",
        example: "19 - 5 = 9",
        prevButton: "Back"
    },
    {   //Page 5
        instruct: '',
        nextButton: "Reveal",
        example: "Find your new number. Note the symbol beside the number",
        prevButton: "Back"
    },
    {   //Page 6
        instruct: '',
        nextButton: '',
        example: "Your symbol is:",
        prevButton: "Back"
    }]

function randomize() {
    let num = '';  //empty for output
    sym = arraySym[Math.floor(Math.random() * 9)]; // Will change every 9 intervals

    for (let i = 0; i < 100; i++) { //Will add 1 for every loop until 100
        if (i % 9 === 0) {
            num += i + ': ' + sym + '<br>'; //Will allow a symbol from arr to display to every multiple of 9
        } else {
            let sym = arraySym[Math.floor(Math.random() * 9)];
            num += i + ' :' + sym + '<br>';
        }
    }
    instruct.innerHTML = num;
}

function changePage() {
    if (pageNum === 4) { //Will call randomize function on page 4
        randomize()

    } else if (pageNum === 5) {
        instruct.innerHTML = sym;
    }
    else {
        instruct.innerHTML = mainArr[pageNum].instruct
    }
    next.innerHTML = mainArr[pageNum].nextButton
    instruct.innerHTML = mainArr[pageNum].instruct
    example.innerHTML = mainArr[pageNum].example

    // Will change the visibility of buttons and text between pages
    if (pageNum === 0) {
        goButton.style.visibility = 'visible';
        prevButton.style.visibility = 'hidden'
        nextButton.style.visibility = 'hidden';
        example.style.visibility = 'hidden';

    } else if (pageNum === 5) {
        goButton.style.visibility = 'hidden';
        prevButton.style.visibility = 'visible'
        nextButton.style.visibility = 'hidden';

    } else {
        instruct.style.visibility = 'visible';
        goButton.style.visibility = 'hidden';
        prevButton.style.visibility = 'visible'
        nextButton.style.visibility = 'visible';
        example.style.visibility = 'visible'
    }
}

function nextPage(i) {
    if (i.target.id === 'next' || i.target.id === 'goButton') { //Goes to next page if Go or Next are clicked
        pageNum++;
    }
    else if (i.target.id === 'prev') { //Goes to first Page when Back is clicked
        pageNum = 0;
    }
    changePage()
}

//All button event listeners
next.addEventListener('click', nextPage)
goButton.addEventListener('click', nextPage)
prev.addEventListener('click', nextPage)