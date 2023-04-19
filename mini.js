 let theBody=document.body.style.fontFamily="Arial"

let heading0ne=document.querySelector('h1')
heading0ne.style.textAlign='center'

let headingNext=document.querySelector('h2')
headingNext.style.textAlign="center"
headingNext.style.textDecoration="underline"
headingNext.style.fontWeight="lighter"

let headingThird=document.querySelector('h3')
headingThird.style.textAlign="center"
headingThird.style.backgroundColor="blue"
headingThird.style.width="300px"
headingThird.style.margin="0 auto"


let allLists= document.querySelectorAll('li');
allLists.forEach(item => {
    item.style.margin="5px auto"
    item.style.height="90px"
    item.style.width="800px"
    item.style.listStyle="none"
    item.style.fontWeight="lighter"
    item.style.paddingLeft="20px"
   
    
    
});
allLists[0].style.backgroundColor="green"
allLists[1].style.backgroundColor="yellow"
for (let i = 2; i < allLists.length; i++) {
allLists[i].style.backgroundColor="red"
}


const yearEl = document.querySelector('#year');
yearEl.style.fontSize='80px'



const dateTimeEl = document.querySelector('h3');
dateTimeEl.style.textAlign="center"



// Change the year color every 1 second
setInterval(() => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  yearEl.style.color = `#${randomColor}`;
}, 1000);

// Change the date-time background color every 1 second
setInterval(() => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  dateTimeEl.style.backgroundColor = `#${randomColor}`;
}, 1000);

