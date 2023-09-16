let billInput=document.querySelector("#billFun");
let billInputHeader=document.querySelector("#billHeader");
 billInput.addEventListener("mouseenter",()=>{
    billInputHeader.style.marginLeft="120px";
 });
 billInput.addEventListener("mouseleave",()=>{
     billInputHeader.style.marginLeft="0px";
 });

 let tipInput=document.querySelector("#TipFun");
 let tipInputHeader=document.querySelector("#tipHeader");
 tipInput.addEventListener("mouseenter",()=>{
    tipInputHeader.style.marginLeft="130px";
 });
 tipInput.addEventListener("mouseleave",()=>{
     tipInputHeader.style.marginLeft="0px";
 });

   //get ids and class or reference
   let display=document.querySelector("#molarDisplay");
   let getBill=document.querySelector("#billFun");
   let getTipPercent=document.querySelector("#TipFun");

 // algorithm calc
let calc=(bill,TipP,divi)=>{
        return (((TipP/100)*bill) + parseInt(bill))/divi;
};

 //people increment fun
 let peopleDivisionInc=document.querySelector("#inc");
 let peopleDivisionDec=document.querySelector("#dec");
 let peopleDivisionDisplay=document.querySelector("#divisionDisplay");
 let i_d=1;
 peopleDivisionInc.addEventListener("click",()=>{
    i_d++;
    peopleDivisionDisplay.innerText=i_d;
    display.textContent=`$ ${calc(bill,tip,i_d).toFixed(2)}`;
 });

 peopleDivisionDec.addEventListener("click",()=>{
     i_d--;
     if(i_d<1){
        return i_d=1;
     };
     peopleDivisionDisplay.innerText=i_d;
     display.textContent=`$ ${calc(bill,tip,i_d).toFixed(2)}`;
 });

let bill="";
let tip="";
getBill.addEventListener("input",()=>{
    bill=getBill.value;
    display.textContent=`$ ${calc(bill,tip,i_d).toFixed(2)}`;
});

getTipPercent.addEventListener("input",()=>{
    tip=getTipPercent.value;
    display.textContent=`$ ${calc(bill,tip,i_d).toFixed(2)}`;
});