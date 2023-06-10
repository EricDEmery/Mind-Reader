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
        
    }