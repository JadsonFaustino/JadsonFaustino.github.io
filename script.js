const yearLabel = document.getElementById('year');
yearLabel.innerText = new Date().getFullYear();

const arrow_button = document.getElementById('guide-arrow');
const sections = document.getElementsByTagName('section');
var heights = [];
let sum = 0;
for (let i = 0; i < sections.length; i++){
    heights.push(sum);
    sum += sections[i].scrollHeight;
}

window.addEventListener('resize', () => {
    let sum = 0;
    heights = [];
    for (let i = 0; i < sections.length; i++){
        heights.push(sum);
        sum += sections[i].scrollHeight;
    }
    console.log(heights);
})

arrow_button.addEventListener('click', () => {
    let y = window.scrollY;
    for (let i = 1; i < heights.length; i++){
        if (y < heights[i]){
            window.scrollTo({
                top: heights[i],
                behavior: 'smooth'
            });
            return;
        }
    }
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

window.addEventListener('scroll', () => {
    let y = window.scrollY;
    if (y >= heights[heights.length-1]){
        arrow_button.style.transform = 'rotateZ(180deg)';
    } else {
        arrow_button.style.transform = 'rotateZ(0deg)';
    }
})