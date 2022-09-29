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
var click_count;


click_count = 0;


document.getElementById('button1').addEventListener('click', (event) => {
  click_count = (typeof click_count === 'number' ? click_count : 0) + 1;
  event.target.innerText = click_count;

});
var pictures;


pictures = ['https://i0.wp.com/www.society19.com/wp-content/uploads/2020/02/fullsizeoutput_280d.png?fit=1024%2C768&ssl=1', 'https://i.pinimg.com/originals/8a/08/51/8a0851ca862a572331df48de80c780b1.jpg', 'https://64.media.tumblr.com/c5e651f2cdaf772d6bc58cbb438960b2/tumblr_p4px6t24Ap1v4hlcio6_1280.jpg', 'https://64.media.tumblr.com/8ee02407235e3aa57f6cf2690a0c23ae/tumblr_p4px6t24Ap1v4hlcio1_1280.jpg', 'https://boisehighlights.com/wp-content/uploads/2019/02/24075790.png'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", pictures[0]);


document.getElementById('back').addEventListener('click', (event) => {
  let element_image2 = document.getElementById('image');
  pictures.unshift(pictures.slice(-1)[0]);
  element_image2.setAttribute("src", pictures.pop());

});

document.getElementById('forward').addEventListener('click', (event) => {
  let element_image3 = document.getElementById('image');
  pictures.push(pictures[0]);
  element_image3.setAttribute("src", pictures.shift());

});
var foods, item;


foods = ['Peanut Butter', 'Tofu', 'Eggs', 'Rice', 'Spinach', 'Carrot'];
let element_products = document.getElementById('products');
foods.forEach((item) => {
  let new_li = document.createElement('li');
  new_li.innerText = item;
  let new_span = document.createElement('span');
  let new_button = document.createElement('button');
  new_button.innerText = 'Add to Cart';
  new_button.setAttribute("id", item);

  new_span.appendChild(new_button);

  new_li.appendChild(new_span);

  element_products.appendChild(new_li);
});


document.getElementById('Peanut Butter').addEventListener('click', (event) => {
  let element_store = document.getElementById('store');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Peanut butter';

  element_store.appendChild(new_li2);

});

document.getElementById('Tofu').addEventListener('click', (event) => {
  let element_store2 = document.getElementById('store');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Tofu';

  element_store2.appendChild(new_li3);

});

document.getElementById('Eggs').addEventListener('click', (event) => {
  let element_store3 = document.getElementById('store');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Eggs';

  element_store3.appendChild(new_li4);

});

document.getElementById('Rice').addEventListener('click', (event) => {
  let element_store4 = document.getElementById('store');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'Rice';

  element_store4.appendChild(new_li5);

});

document.getElementById('Spinach').addEventListener('click', (event) => {
  let element_store5 = document.getElementById('store');
  let new_li6 = document.createElement('li');
  new_li6.innerText = 'Spinach';

  element_store5.appendChild(new_li6);

});

document.getElementById('Carrot').addEventListener('click', (event) => {
  let element_store6 = document.getElementById('store');
  let new_li7 = document.createElement('li');
  new_li7.innerText = 'Carrot';

  element_store6.appendChild(new_li7);

});


