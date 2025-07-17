$(document).ready(function(){

    //==========================//
    //       menu bar js..    
    // =========================//

    $('.fa-bars').on('click',function(){
        $(this).css({'display':'none'});
        $('body').css({'overflow':'hidden'});
        $('.nav-links').addClass('active');
        $('.fa-xmark').css({'display':'block'});
    });
    $('.fa-xmark').on('click',function(){
        $(this).css({'display':'none'});
        $('body').css({'overflow-y':'auto'});
        $('.nav-links').removeClass('active');
        $('.fa-bars').css({'display':'block'});
        
    });

    // ==============================//
    //         dropdown JS
    // =============================//  

    $('#dropdownIcon-1').on('click',(event)=>{
        event.preventDefault();
        $('#dropdownIcon-1').parent().next().toggleClass('active');
    });
    $('#dropdownIcon-2').on('click',(event)=>{
        event.preventDefault();
        $('#dropdownIcon-2').parent().next().toggleClass('active');
    });

    // ==============================//
    // fixed header on top by scrolling..
    // ==============================//

    $(window).on('scroll',()=>{
        let index = 0;
        let offsetY = pageYOffset;
        if(offsetY >= index){
            $('header').addClass('active');
            return;
        }
    });

    $('.nav-links li').on('click',(event)=>{
        setTimeout(()=>{
            event.preventDefault();
            $('.fa-bars').css({'display':'block',});
            $('.fa-xmark').css({'display':'none',});
            $('body').css({'overflow-y':'auto'});
            $('.nav-links').removeClass('active');
        },200)
    })

    // ========================//
    //          typed js...
    // =======================//

    new Typed('.typed', {
        strings: ['Developer','Designer','Freelancer'],
        typeSpeed: 50,
        backSpeed:150,
        loop:true,
    });

    // ======================//
    // Animation on scroll function 
    //=========================//

        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        });

    //===========================//
    //      swiper js ...
    //==========================//
    
    new Swiper('.swiper', {

        // spnacebetween each slide
        spaceBetween:20,

        // change autoslide
        autoplay:{
            delay:5000
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        },

        // responsive breakpoints 
        breakpoints:{
            768:{
                slidesPerView:2
            },
            992:{
                slidesPerView:3
            },
            1200:{
                slidesPerView: 3
            }
        },
        loop: true
    });


    //============================//
    // statics-value animation
    //===========================//

    function progressFun(){
        
        // clientStatics
        let happyClient = $('#happyClients');
        let happyStartVal = 0;
        let happyEndVal = 232;

        let happyProgress = setInterval(()=>{
            happyStartVal++;
            happyClient.text(happyStartVal);
    
            if(happyStartVal == happyEndVal){
                clearInterval(happyProgress);
            }
        },10);

        //projectsStatics
        let projects = $('#projects');
        let projectsStartVal = 0;
        let projectsEndVal = 521;

        let projectsProgress = setInterval(()=>{
            projectsStartVal++;
            projects.text(projectsStartVal);
    
            if(projectsStartVal == projectsEndVal){
                clearInterval(projectsProgress);
            }
        },5);

        //HoursSupport Statics
        let supportHours = $('#supportHours');
        let HoursStartVal = 0;
        let HoursEndVal = 1463;

        let HoursProgress = setInterval(()=>{
            HoursStartVal++;
            supportHours.text(HoursStartVal);
    
            if(HoursStartVal == HoursEndVal){
                clearInterval(HoursProgress);
            }
        },1);

        //workers Statics
        let workers = $('#workers');
        let workersStartVal = 0;
        let workersEndVal = 15;

        let workersProgress = setInterval(()=>{
            workersStartVal++;
            workers.text(workersStartVal);
    
            if(workersStartVal == workersEndVal){
                clearInterval(workersProgress);
            }
        },5);
        

    }

    progressFun();
   
    //=============================//
    // initilize progress function 
    //============================//

    function ProgressBarFunc(){

        let html = $('#html');
        let css = $('#css');
        let PHP = $('#PHP');
        let javascript = $('#javascript');
        let wordpress = $('#wordpress');
        let photoshop = $('#photoshop');

        let offsetVal = 1590;
        if(pageYOffset >= offsetVal){
            html.addClass('active'); 
            css.addClass('active'); 
            javascript.addClass('active'); 
            wordpress.addClass('active'); 
            photoshop.addClass('active'); 
            PHP.addClass('active'); 
        } 
    }
    // calling this function on scroll 
    $(window).on('scroll',ProgressBarFunc);

});