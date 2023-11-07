const slider = ()=> {
    let sliderImages = [];
    sliderImages[0]= "url(../images/cep1.jpg)";
    sliderImages[1]= "url(../images/cep2.jpg)";
    sliderImages[2]= "url(../images/cep3.jpg)";
    sliderImages[3]= "url(../images/cep4.jpg)";
    sliderImages[4]= "url(../images/cep5.jpg)";
    sliderImages[5]= "url(../images/cep6.jpg)";
    sliderImages[6]= "url(../images/cep7.jpg)";


    const getHero = document.querySelector('.hero');
    const getLeftArrow = document.querySelectorAll('.left-arrow');
    const getRightArrow = document.querySelectorAll('.right-arrow');
    const getSlideNum = document.querySelectorAll('.slide-num');

    let counter =0;

    getLeftArrow.forEach(param =>{
        param.addEventListener('click', ()=>{   
            if(counter==0)
            counter=7; 
            counter=counter-1;
            updateSlider();
        }) 
    })

    getRightArrow.forEach(param =>{
        param.addEventListener('click', ()=>{
            if(counter==6)
            counter=-1;
            counter=counter+1;
            updateSlider();
            
        }) 
    })

    function updateSlider(){
        getHero.style.background = sliderImages[counter];
        getHero.style.backgroundSize = "cover";
        getSlideNum.forEach(param =>{
            param.innerHTML= "0"+(counter+1);
        })
    }

    setInterval(()=>{
        document.querySelector('.right-arrow').click();
    },3000);



}

export default slider;