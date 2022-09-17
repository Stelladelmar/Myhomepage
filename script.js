// eslint-disable-next-line no-unused-vars
const projectName = 'tribute-page';
function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(getNumberOrString(document.getElementById('text').value)));

});
