let ct=document.getElementById("checkbox_toggle")
                let c1=document.getElementById("check_Drop1");
let c2=document.getElementById("check_Drop2");
let c3=document.getElementById("check_Drop3");
let c4=document.getElementById("check_Drop4");
c1.addEventListener('change',(event)=>{ c2.checked=false;
    c3.checked=false;
    c4.checked=false;
console.log(event.target);});
    c2.addEventListener('change',(event)=>{ c1.checked=false;
        c3.checked=false;
        c4.checked=false;});
        c3.addEventListener('change',(event)=>{ c2.checked=false;
            c1.checked=false;
            c4.checked=false;});
            c4.addEventListener('change',(event)=>{ c2.checked=false;
                c3.checked=false;
                c1.checked=false;});
                window.onclick=(event)=>{
                    if (event.target!=c1)
                    c1.checked=false
                    if (event.target!=c2)
                    c2.checked=false
                    if (event.target!=c3)
                    c3.checked=false
                    if (event.target!=c4)
                    c4.checked=false
                    if (event.target!=ct)
                    ct.checked=false
                }
 