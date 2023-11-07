const darkMode = ()=> {

    const getDarkModeBtn = document.querySelectorAll('.darkmode-btn');

    getDarkModeBtn.forEach((param)=>{
        param.addEventListener('click', ()=>{
            document.body.classList.toggle('dark-mode');
        })
    })
}

export default darkMode;