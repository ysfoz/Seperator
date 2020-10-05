
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const result = document.querySelector("#result");
const vowel = document.querySelector("#vowel");
const consonant = document.querySelector("#consonant");
const number = document.querySelector("#number");
const inputSentence = document.querySelector("#inputSentence");
const correktorElement = document.querySelector('#correktor');
button.addEventListener("click", function () {
    correctMaker(input);
    reverseStr(input);
});
    
function correctMaker(item) {
    let CorrectSentenceArr = []
    let sentence=''
    CorrectSentenceArr = item.value.split(' ')
    for (let j =(CorrectSentenceArr.length) - 1; j>= 0; j--){
    sentence += CorrectSentenceArr[j] + " "      
}
correktorElement.innerHTML = `Here was word by word written backwards : "${sentence}"`
}

function reverseStr(str) {
    const myArray = []
    let reverseString = ''
    let emptyVowelArr=[]
    let emptyConsonantArr=[]
    let emptynumArr=[]
    let counterVowel = 0
    let counternum = 0
    let counterConsonant = 0
    
    for (let i = (str.value.length)-1; i >= 0;i--){
        myArray.push(str.value[i]) 
        
    }
    myArray.forEach(letter =>{
        reverseString += letter
        if (letter === 'a' || letter ==='e'|| letter ==='i'|| letter ==='o'|| letter ==='u'|| letter ===('A')|| letter ==='E'|| letter ==='I'|| letter ==='O'|| letter ==='U'){
            counterVowel++;
            emptyVowelArr.push(letter)   
        }else if(parseInt(letter)){
            counternum++;
            emptynumArr.push(letter)
        }else{
            counterConsonant++;
            emptyConsonantArr.push(letter)
            emptyConsonantArr.map(function(x){
                if(x ===' '){
                    index = emptyConsonantArr.indexOf(x)
                    emptyConsonantArr.splice(index,1) 
                   }
               })
            }
    })
    if(reverseString == ''){
        alert('You can write to something ')
        
    }else{
        result.innerHTML = `This is your Sentence but in reverse : "${reverseString}"`}
        
        inputSentence.innerHTML =`This is your sentence : "${input.value}" `
        vowel.innerHTML = `There are ${counterVowel} vowels in what you wrote.Here you can see : "${emptyVowelArr}" `
        
        consonant.innerHTML = `There are ${emptyConsonantArr.length} consonant and spelling Marks in what you wrote.Here you can see : "${emptyConsonantArr}" `
        
        number.innerHTML = `There are ${counternum} number in what you wrote.Here you can see : "${emptynumArr}" `
        
        
        str.value = '';
        input.focus();
        
        
    }
    