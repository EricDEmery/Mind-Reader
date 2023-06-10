const page = document.getElementById("page");
const instruct = document.getElementById("instruct");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const goButton = document.getElementById("goButton");
const example = document.getElementById("example");
let pageNum = 0;
let arraySym = ['!', '@', '#', '$', '%'];

//Main Array For Mind Reader to Pull From
let mainArr = [
    {   //Page 1
        instruct: "I can read your mind",
        nextButton: '',
        goButton: "GO",
        prevButton: ''
    },
    {   //Page 2
        instuct: "Pick a number from 1-99",
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
        instruct: "%",
        nextButtom: '',
        example: "Your symbol is %",
        prevButton: "Back"
    }]

function randomize() {
    let num = '';  //empty for output
    sym = arraySym[Math.floor(Math.random() * 6)]; // Will randomize every 6th symbol

    for (let i = 0; i < 100; i++) {
        if (i % 6 === 0) {
            num += i + ': ' + sym + '<br>';
        } else {
            let sym = arraySym[Math.floor(Math.random() * 6)];
            num += i + ' :' + sym + '<br>';
        }
    }
    instruct.innerHTML = num;
}

function changePage() {
    if (pageNum === 4) {
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

    if (pageNum === 0) {
        goButton.style.visibility = 'visible';
        prevButton.style.visibility = 'hidden'
        nextButton.style.vidsibility = 'hidden';

    } else if (pageNum === 5) {
        goButton.style.visibility = 'hidden';
        prevButton.style.visibility = 'visible'
        nextButton.style.vidsibility = 'visible';

    } else {
        goButton.style.visibility = 'hidden';
        prevButton.style.visibility = 'visible'
        nextbutton.style.vidsibility = 'visible';
    }
    }

    changePage()

    function nextPage(i) {
        if (i.target.id === 'next' || i.targetid === 'goButton') {
            pageNum++;
        }
        else if (i.target.id === 'prev') {
            pageNum--;
        }
        changePage()
    }
    
next.addEventListner('click', nextPage)
goButton.addEventListner('click', nextPage)
prevButton.addEventListner('click', nextPage)