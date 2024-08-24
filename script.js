let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove(active);
                document.querySelector('header nav a[ href*='*+id+']').classList.add(active)
            })
        }
        
    });
}



menuIcon.Onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


setInterval(checkTime(),1000);
function checkTime(){
    let time = new Date();
    let h =time.getHours();
    let m =time.getMinutes();
    let s =time.getSeconds();
    let Ampm ="AM"
    if(h>12){
        h=h-12;
        Ampm="PM"
    }
    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;
    document.getElementById("hour").innerHTML=h;
    document.getElementById("minutes").innerHTML=m;
    document.getElementById("seconds").innerHTML=s;
    document.getElementById("Ampm").innerHTML=Ampm;


}
checkTime(now);