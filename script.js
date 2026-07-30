/* ==========================================
   CURSOR GLOW
========================================== */

const glow = document.getElementById("cursorGlow");

window.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* ==========================================
   PARTICLES
========================================== */

const particles = document.querySelector(".particles");

for(let i=0;i<80;i++){

    const p=document.createElement("span");

    const size=Math.random()*4+2;

    p.style.width=size+"px";
    p.style.height=size+"px";

    p.style.left=Math.random()*100+"%";

    p.style.animationDuration=
    (Math.random()*12+8)+"s";

    p.style.animationDelay=
    (Math.random()*8)+"s";

    p.style.opacity=Math.random()*.6;

    particles.appendChild(p);

}



/* ==========================================
   WAVE CANVAS
========================================== */

const canvas=document.getElementById("wave");

const ctx=canvas.getContext("2d");

function resize(){

    canvas.width=window.innerWidth;
    canvas.height=260;

}

window.addEventListener("resize",resize);

resize();



let time=0;



function draw(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.lineWidth=1;

    for(let j=0;j<20;j++){

        ctx.beginPath();

        for(let x=0;x<canvas.width;x+=10){

            let y=

            150+

            Math.sin(
                x*0.01+
                time+
                j*.35
            )*18+

            j*7;

            if(x===0){

                ctx.moveTo(x,y);

            }

            else{

                ctx.lineTo(x,y);

            }

        }

        ctx.strokeStyle=
        `rgba(120,140,255,${
            0.03+(j*.015)
        })`;

        ctx.stroke();

    }

    time+=0.012;

    requestAnimationFrame(draw);

}

draw();



/* ==========================================
   BUTTON
========================================== */

const button=document.querySelector(".notify button");

button.addEventListener("mouseenter",()=>{

    button.style.boxShadow=

    "0 0 35px rgba(120,120,255,.45)";

});

button.addEventListener("mouseleave",()=>{

    button.style.boxShadow="none";

});



/* ==========================================
   EMAIL INPUT
========================================== */

const input=document.querySelector(".notify input");

button.addEventListener("click",(e)=>{

    e.preventDefault();

    if(input.value===""){

        input.style.border="1px solid #ff6565";

        input.placeholder="Please enter your email";

        return;

    }

    button.innerHTML="✓ Thank You";

    button.style.background=
    "#35c759";

});

/* ==========================================
   SERVICE CARD 3D TILT
========================================== */

const cards = document.querySelectorAll(".service");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 16;
        const rotateX = ((rect.height / 2 - y) / rect.height) * 16;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";

    });

});


/* ==========================================
   PARALLAX BACKGROUND
========================================== */

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*30;
    const y=(e.clientY/window.innerHeight-.5)*30;

    document.querySelector(".circle1").style.transform=
    `translate(${x}px,${y}px)`;

    document.querySelector(".circle2").style.transform=
    `translate(${-x}px,${-y}px)`;

});


/* ==========================================
   RANDOM STAR TWINKLE
========================================== */

setInterval(()=>{

    const stars=document.querySelectorAll(".particles span");

    const star=stars[
        Math.floor(Math.random()*stars.length)
    ];

    star.animate([

        {
            opacity:.2,
            transform:"scale(1)"
        },

        {
            opacity:1,
            transform:"scale(2.4)"
        },

        {
            opacity:.25,
            transform:"scale(1)"
        }

    ],{

        duration:1500

    });

},250);


/* ==========================================
   SCROLL REVEAL
========================================== */

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity=1;
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".service").forEach(card=>{

    card.style.opacity=0;
    card.style.transform="translateY(40px)";
    card.style.transition="all .8s ease";

    observer.observe(card);

});


/* ==========================================
   LOGO GLOW PULSE
========================================== */

const logo=document.querySelector(".logo img");

setInterval(()=>{

    logo.animate([

        {

            filter:"drop-shadow(0 0 0px #6d7cff)"

        },

        {

            filter:"drop-shadow(0 0 28px #6d7cff)"

        },

        {

            filter:"drop-shadow(0 0 0px #6d7cff)"

        }

    ],{

        duration:3500

    });

},3500);



/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const description=document.querySelector(".description");

const originalText=description.textContent;

description.textContent="";

let index=0;

function typeWriter(){

    if(index<originalText.length){

        description.textContent+=originalText.charAt(index);

        index++;

        setTimeout(typeWriter,18);

    }

}

window.addEventListener("load",()=>{

    setTimeout(typeWriter,800);

});


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("%cTechnomitic",
"font-size:30px;font-weight:bold;color:#6d7cff");

console.log("%cBuilding the Future.",
"font-size:14px;color:white");