$(document).ready(function(){
    
    $('.leave_message').click(function(){
        alert("its work");
    });
    
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $(".section").each((i, el) => {
            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                $("nav a").each((e, el) => {
                   if($(el).hasClass("active")){
                       $(el).removeClass("active");
                   } 
                });
                $('nav li:eq('+ i +')').find('a').addClass('active');
            }
        });
    });
    
    let options = {threshold:[0.2]};
    let observer = new IntersectionObserver (onEntry, options);
    let elements = $('.element_animation');
    elements.each((i, el) => {
                 observer.observe(el);
    });
    
});

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 20 + "px"});
});

function onEntry(entry){
    entry.forEach(change => {
       if(change.isIntersecting){
           change.target.classList.add('element_shown');
       } 
    });
}

