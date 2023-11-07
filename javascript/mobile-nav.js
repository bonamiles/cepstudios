const mobileNav = ()=>{
    const getHeader = document.querySelector('.header-bar');
    const getMobileNav = document.querySelector('.mobile-nav');
    const getMobileNavLinks = document.querySelectorAll('.m-nav-lis');
    let isMobileNavOpen = false;
    
    getHeader.addEventListener('click', ()=>{

        if(!isMobileNavOpen) {
            getMobileNav.style.display='flex';
            document.body.style.overflowY='hidden';
        }
    else {
        getMobileNav.style.display ='none';
        document.body.style.overflowY='scroll';
    }
        isMobileNavOpen=!isMobileNavOpen;
    });  

    // Add Event listener to Nav Links

    getMobileNavLinks.forEach((param)=>{
        param.addEventListener('click', ()=>{
            getMobileNav.style.display ='none';
            document.body.style.overflowY='auto';
            isMobileNavOpen=false;
        })
    })
}

export default mobileNav;

