const sentences = [
  { english: 'What_do you do in your leisure time?', sinhala: '01. ඔබ ඔබගේ විවේක කාලයේදී මොකද කරන්නේ?' },
  { english: 'I make time for playing badminton because I_love it.', sinhala: '02. මම බැට්මින්ටන් සෙල්ලම් කරන්න කාලය හදාගන්නවා මොකද  මම ඒකට ආසයි.' },
  { english: 'I may be old however, I\'m not crazy.', sinhala: '03. මම වයස ඇති,කොහොමනමුත් මට පිස්සු නෑ.' },
  { english: 'You may sit at the front of the_class.', sinhala: '04. ඔබ පන්තියේ ඉදිරියෙන්ම අසුන් ගන්න.' },
  { english: 'I didn\'t want to spend any more time in America.', sinhala: '05. මට තව දුරටත් ඇමරිකාවේ කාලය ගතකරන්න අවශ්‍ය උනේ නෑ.' },
  { english: 'I can not bear the pain anymore.', sinhala: '06. මට තවදුරටත් වේදනාව දරාගන්න බෑ.' },
  { english: 'We need more medical care for adults.', sinhala: '07. අපිට තවත් ප්‍රතිකාර  අවශ්‍යයි වැඩිහිටියන්ට.' },
  { english: 'I have to use English all day at work.', sinhala: '08. මට මුලු දවසේම වැඩ කරන්න වෙන්නෙ ඉංග්‍රීසි පාවිච්චි කරමින්.' },
  { english: 'Mahesh used to eat instant noodles every day.', sinhala: '09. මහේෂ් හැමදාම ක්ෂනික නූඩ්ල්ස් කන්න පුරුදු වෙලා හිටියා.' },
  { english: 'I am going to see Mahee at the party tonight.', sinhala: '10. මම අද රාත්‍රී සාදයේදි මහීව දකින්න හදන්නෙ.' }
];

let currentSentence = 0;
let shuffledWords = [];
let selectedWords = [];

// Get the sentence and shuffle the words
function newSentence() {
selectedWords = [];
const sentence = sentences[currentSentence];
const english = sentence.english;
const sinhala = sentence.sinhala;
document.querySelector('.sentence .english').textContent = english;
document.querySelector('.sentence .sinhala').textContent = sinhala;

// Shuffle the words
shuffledWords = english.split(' ').sort(() => Math.random() - 0.5);
document.querySelector('.words').innerHTML = '';
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}

// Select a word and add it to the selected words array
function selectWord() {
if (!selectedWords.includes(this.textContent)) {
selectedWords.push(this.textContent);
this.style.backgroundColor = '#7286D3';
this.style.color = 'white';
}
}

// Check the answer and display the result
function checkAnswer() {
const sentence = sentences[currentSentence];
const english = sentence.english;
const selected = selectedWords.join(' ');
if (selected === english) {
document.querySelector('.result').textContent = 'Correct! ✔';
document.querySelector('.result').style.color = '#4CAF50';
currentSentence++;
if (currentSentence === sentences.length) {
document.querySelector('.game').style.display = 'none';
document.querySelector('.result').textContent = 'Congratulations, you have completed the game!';

document.querySelector('.congrats').style.display = 'block';

} else {
setTimeout(newSentence, 1000);
}
} else {
document.querySelector('.result').textContent = 'Incorrect ✖, please try again.';
document.querySelector('.result').style.color = '#FF0000';
selectedWords = [];
shuffledWords.forEach(word => {
const div = document.createElement('div');
div.className = 'word';
div.textContent = word;
div.addEventListener('click', selectWord);
document.querySelector('.words').appendChild(div);
});
}
}

// Start the game
newSentence();
const restartBtn = document.getElementById("restart-btn");

restartBtn.addEventListener("click", function() {
  location.reload();
});

const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function() {
  // Replace "https://example.com" with the URL you want to open
  window.location.href = "https://learnenglishsinhala.blogspot.com/2023/04/test.html";
});
