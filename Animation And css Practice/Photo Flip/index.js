const link = document.querySelectorAll('.magnet');
const animateLink = function(e){
    const link = this.querySelector('.span');
    const {offsetX: x ,offsetY:y} = e
    const {offsetWidth:width, offsetHeight : height} = this;

    intensity = 20;
    xMove = x/width*(intensity*2)-intensity;
    yMove = y/height*(intensity*2)-intensity;
    link.style.transform = `translate(${xMove}px,${yMove}px)`;
    if(e.type==='mouseleave') link.style.transform= '';
};

link.forEach(link=>{
    link.addEventListener('mousemove',animateLink);
    link.addEventListener('mouseleave',animateLink);
})