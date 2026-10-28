let scrollContent=document.querySelector('.scroll-text1');
let s=scrollContent.innerHTML;
let scrollArray,spaArray;
let s1=s.split(/<br\s*[\/]?>/gi);
scrollArray=s1.map(fish =>{
    let tail=fish.split("");
    tail=tail.map(small_fish =>{
        if(small_fish===" ")
            return " ";
        else
            return `<span>${small_fish}</span>`
    })
    let s2=tail.join("");
    return s2;
})
/* spaArray=scrollArray.map(char =>{
    if(char === " "){
        return " ";
    }
    else{
        return `<span>${char}</span>`;
    }
});
scrollArray.push("<br>"); */
let spaString=scrollArray.join("");
scrollContent.innerHTML=spaString;
let highlight=0,sectionheight1=0,viewportheight1=0;
const spans=scrollContent.querySelectorAll('span');
window.addEventListener('scroll',()=>{
spans.forEach(spanner =>{
     highlight=spanner.getBoundingClientRect();
     viewportheight1=window.innerHeight;
    
     if(highlight.top<=0.6*viewportheight1){
        spanner.style.opacity=1;
    }
    else{
        spanner.style.opacity=0.5;
    }
})
})

const barcolor=document.querySelector('.Top-bar-blue');
const textcolor=document.querySelectorAll('.top-headings');
const roller=document.querySelector('.rolling-subtext');
let h,r;
window.addEventListener('scroll',()=>{
    h= roller.getBoundingClientRect();
    if(h.top<=0){
    barcolor.style.backgroundColor="white";
    textcolor.forEach(text => {
    text.style.color="#202ded";
    })
}
else if(h.top>0){
    barcolor.style.backgroundColor="#202ded";
    textcolor.forEach(text =>{
    text.style.color="white";
    })
}
})
const bbg=document.querySelector('.blue-bg');
window.addEventListener('scroll',()=>{
    r=bbg.getBoundingClientRect();
    if(r.top<=0){
    barcolor.style.backgroundColor="#202ded";
    textcolor.forEach(text => {
    text.style.color="white";
    })
}
else if(h.top<=0 && r.top>0){
    barcolor.style.backgroundColor="white";
    textcolor.forEach(text =>{
    text.style.color="#202ded";
    })
}
})
let ani1=document.querySelectorAll('.drop-down-animation1');
let ani2=document.querySelectorAll('.drop-down-animation2');
const viewportheight=window.innerHeight;
ani1.forEach(text=>{
    window.addEventListener('scroll',()=>{
        let u=text.getBoundingClientRect();
    if(u.top<=0.6*viewportheight){
        text.style.opacity='1';
    }
    else{
        text.style.opacity='0';
    }
    })
})
ani2.forEach(text=>{
    window.addEventListener('scroll',()=>{
        let u=text.getBoundingClientRect();
    if(u.top<=0.6*viewportheight){
        text.style.opacity='0.5';
    }
    else{
        text.style.opacity='0';
    }
    })
})
let section=document.querySelector('.scroll-section')
let wc=document.querySelector('.white-circle');
let oc=document.querySelector('.orange-circle');
let sc=document.querySelector('.stylish-circle');
let bc=document.querySelector('.black-circle');
let wc1=document.querySelector('.white-circle1');

window.addEventListener('scroll', ()=>{
    if (!section || !wc || !oc || !bc) return;
    const w=wc.getBoundingClientRect();
    const o=oc.getBoundingClientRect();
    const b=bc.getBoundingClientRect();
    const s=sc.getBoundingClientRect();
    const w1=wc1.getBoundingClientRect();

    const sectionheight=section.offsetHeight;
    const viewportheight=window.innerHeight;

    let pw=w.top/(sectionheight-viewportheight);
    let po=o.top/(sectionheight-viewportheight);
    let pb=b.top/(sectionheight-viewportheight);
    let ps=s.top/(sectionheight-viewportheight);
    let pw1=w1.top/(sectionheight-viewportheight);

    pw=Math.max(0,Math.min(1,pw));
    po=Math.max(0,Math.min(1,po));
    pb=Math.max(0,Math.min(1,pb));
    ps=Math.max(0,Math.min(1,ps));
    pw1=Math.max(0,Math.min(1,pw1));

    if(ps>=0.7){
        let currentScale=3.1-3*ps;
        sc.style.transform=`scale(${currentScale})`;
    }
    if(ps<0.5){
        let rot=45-ps*90;
        sc.style.transform=`rotate(${rot}deg)`;
    }
    if(pw>=0.7){
        let currentScale=3.1-3*pw;
        wc.style.transform=`scale(${currentScale})`;
    }
    if(po>=0.7){
        let currentScale=3.1-3*po;
        oc.style.transform=`scale(${currentScale})`;
    }
    if(pb>=0.7){
        let currentScale=3.1-3*pb;
        bc.style.transform=`scale(${currentScale})`;
    }
    if(pw1>=0.7){
        let currentScale=3.1-3*pw1;
        wc1.style.transform=`scale(${currentScale})`;
    }
})

let section1=document.querySelector('.scroll-section1')
let ob=document.querySelector('.orange-blob');
let wb=document.querySelector('.white-blob');
let bb=document.querySelector('.black-blob');
let sb=document.querySelector('.stylish-blob');
let pink=document.querySelector('.pink-blob');
window.addEventListener('scroll',()=>{
    const w=wb.getBoundingClientRect();
    const o=ob.getBoundingClientRect();
    const b=bb.getBoundingClientRect();
    const s=sb.getBoundingClientRect();
    const p=pink.getBoundingClientRect();

    const sectionheight=section1.offsetHeight;
    const viewportheight=window.innerHeight;

    let pw=w.top/(sectionheight-viewportheight);
    let po=o.top/(sectionheight-viewportheight);
    let pb=b.top/(sectionheight-viewportheight);
    let ps=s.top/(sectionheight-viewportheight);
    let pp=p.top/(sectionheight-viewportheight);

    pw=Math.max(0,Math.min(1,pw));
    po=Math.max(0,Math.min(1,po));
    pb=Math.max(0,Math.min(1,pb));
    ps=Math.max(0,Math.min(1,ps));
    pp=Math.max(0,Math.min(1,pp));

    if(po>=0){
        let distance=100-100*po;
        ob.style.transform=`translate(${distance}%,0%)`;
    }
    if(pp>=0){
        let distance=-(100-100*pp);
        pink.style.transform=`translate(${distance}%,0%)`;
    }
    if(ps>=0){
        let distance=50-50*ps;
        sb.style.transform=`translate(${distance}%,0%)`;
    }
    if(pw>=0){
        let distance=-(50-50*pw);
        wb.style.transform=`translate(${distance}%,0%)`;
    }
})


let l2=document.querySelectorAll('.line2');
let pt=document.querySelectorAll('.paratext');
let pt1=document.querySelectorAll('.paratext1');
l2.forEach(l2 =>{
    window.addEventListener('scroll', ()=>{
    
    let li2=l2.getBoundingClientRect();

    let progress=(viewportheight-li2.top)/(viewportheight+li2.height);

    progress=Math.max(0,Math.min(1,progress));

    if(progress<=0.4){
        let width=241.25*progress;
        l2.style.width=`${width}%`;
    }
})
})
pt.forEach(pt =>{
    window.addEventListener('scroll', ()=>{
        let p1= pt.getBoundingClientRect();
        if(p1.top<=0.6*viewportheight){
            pt.style.opacity= 1;
        }
        else{
            pt.style.opacity=0.5;
        }
    })
})
pt1.forEach(pt1 =>{
    window.addEventListener('scroll', ()=>{
        let p1= pt1.getBoundingClientRect();
        if(p1.top<=0.7*viewportheight){
            pt1.style.opacity= 1;
        }
        else{
            pt1.style.opacity=0.5;
        }
    })
})
let l3=document.querySelectorAll('.line3');
l3.forEach(l3=>{
    window.addEventListener('scroll',()=>{
        let li3=l3.getBoundingClientRect();
        let progress=(viewportheight-li3.top)/(viewportheight+li3.height);
        progress=Math.max(0,Math.min(progress,1));

        if(progress<=0.4){
            let width=187.5*progress;
            l3.style.width=`${width}%`;
        }
    })
})