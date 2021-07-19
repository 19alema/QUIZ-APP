const quizData = [
       {
        question: "What's Your Favorate Sport in the early primary days",
        a: "Football",
        b: "Volleyball",
        c: "BasketBall",
        d: "Non",
        correct: "a"
    },
       {
        question: "Malish First Dated",
        a: "Maia",
        b: "Flavia",
        c: "Tina",
        d: "Nathaline",
        correct: "c"
    },
       {
        question: "Who eats au goole at Home",
        a: "Father",
        b: "Mother",
        c: "Me",
        d: "Visitors",
        correct: "a"
    },
       {
        question: "Which one was your first SmartPhone",
        a: "Kabiriti",
        b: "Techno",
        c: "Iphone",
        d: "Huawei",
        correct: "d"
    },
       {
        question: "On which day did you and Franco refused to allow me go and we meet Brenda",
        a: "Christmas Eve",
        b: "non",
        c: "New year eve",
        d: "Not sure",
        correct: "d"
    },
       {
        question: "I was given smearing oil to make my enemies happy, Who am i?",
        a: "Malish",
        b: "Sunday",
        c: "Lopia",
        d: "Guma",
        correct: "d"
    },
      {
        question: "I'm A watchman at SACOM and i like getting involed in school activities, who am I?",
        a: "Tondolo",
        b: "Bolingo",
        c: "Youth",
        d: "Tobio",
        correct: "d"
    },
      {
        question: "On going for second round of super at SACOM, Mr Waigo arrested me. Who am I?",
        a: "Lopia",
        b: "Gideon",
        c: "Guma",
        d: "Alaru",
        correct: "b"
    },
      {
        question: "In SACOM who was Called 'Mba ta ze' in 2016",
        a: "Quintino",
        b: "Wessa",
        c: "Loding",
        d: "Non",
        correct: "a"
    },
      {
        question: "Who was the master of chappo in SACOM",
        a: "Ijjo Gilbert",
        b: "Drajuruga",
        c: "Alema Malish",
        d: "Atili",
        correct: "a"
    },
      {
        question: "On Which day did we lied that we are going for Hepatitis B Vaccination",
        a: "Christmas Day",
        b: "Independence Day",
        c: "Easter",
        d: "Sunday",
        correct: "b"
    },
      {
        question: "How did you got to know me",
        a: "Facebook",
        b: "Whatsapp",
        c: "Footballer",
        d: "Oruba blood Attraction",
        correct: "d"
    },
       {
        question: "Who was your First girlfriend",
        a: "Brenda",
        b: "Mercy Letaru",
        c: "Yasmin",
        d: "Non",
        correct: "d"
    },
    {
        question: "How many girls did i Date?",
        a: "One and above",
        b: "Two",
        c: "Uncountable",
        d: "Only One",
        correct: "d"
    },
      {
        question: "Which was our Favourate souce in Onigo in 2020 Holiday",
        a: "Beans",
        b: "Fish",
        c: "Puwee",
        d: "Non",
        correct: "c"
    },
      {
        question: "Below are the girls you told me to date except",
        a: "Tina",
        b: "Brenda's Cousin",
        c: "Deo's Sister",
        d: "Feven",
        correct: "d"
    },
      {
        question: "Mr Mawa took my property from you, what was that",
        a: "Book",
        b: "Eyeglass",
        c: "Cigarrette",
        d: "Bag",
        correct: "d"
    },
     {
        question: "I smoked Cigarrette and starting coughing immediately, Who am I",
        a: "Franco",
        b: "Boboya",
        c: "Walter",
        d: "Nyeto",
        correct: "c"
    }
]

const result = document.querySelector(".leaderboard")
const  questionEl = document.getElementById("question");
const a_txt = document.querySelector('.a_txt');
const b_txt = document.querySelector('.b_txt');
const c_txt = document.querySelector('.c_txt');
const d_txt = document.querySelector('.d_txt');
const submit = document.getElementById("submit");
 const answerEls = document.querySelectorAll(".answerSel");


const correct = document.querySelectorAll(".correct");


let currentQuiz = 0;
let score = 0;

examLoad();

function examLoad() {

    deSelect();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_txt.innerText = currentQuizData.a;
    b_txt.innerText = currentQuizData.b;
    c_txt.innerText = currentQuizData.c;
    d_txt.innerText = currentQuizData.d;

    
}

// FUNCTION TO DESELECT AN OPTION

function deSelect() {
    answerEls.forEach(element => {
        element.checked = false;
    });

}

// FUNCTION TO CHECK WEATHER AN ANSWER HAS BEEN SELECTED

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {

            answer = answerEl.id
         
        }
    });

    return answer;
}







submit.addEventListener("click", function () {

    let answer = getSelected()
   

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
    
    
    
   
    
        if (currentQuiz < quizData.length) {
            examLoad();
        } else {

            result.innerHTML = `<h2>Your final score is ${score}/ ${quizData.length} questions</h2>
        
        <button onclick = "location.reload()">Reload</button>`
        
        }
         
    }
  
});






