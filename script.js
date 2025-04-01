

// const num1 = Math.ceil(Math.random() * 10);
// const num2 = Math.ceil(Math.random()* 10);
// let btn2 = document.getElementById('gg')



// const bt3 = document.getElementById('btn3');
// bt3.addEventListener('click',(e)=>{
//     console.log('gggggg')
// })


// input = document.getElementById('input');
// console.log(input)





// const qt2 = document.getElementById('question');
// qt2.innerText = `What is ${num1} multiply by ${num2}?`;

// submit  = document.getElementByClass('btn');
// submit.addEventListener('click',(e)=>{
//     console.log(input)
// })


const btnpc = document.getElementById('cp');

btnpc.addEventListener('click', (e) => {
    console.log('ff'); // Debugging message
    window.location.href = 'https://www.linkedin.com/in/govind-gupta-a099a714a/';
});
btnpc.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/govind-gupta-a099a714a/', '_blank');
});


const about = document.getElementById('about');
about.addEventListener('click', (e) => {
    console.log('ff'); // Debugging message
    document.getElementById('about_profile').innerHTML = 'Govind Gupta';
    
});




