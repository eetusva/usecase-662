window.addEventListener('load',kirjautunut)

function kirjautunut(){
   
let ypLogin=sessionStorage.getItem('ypkirjautunut')||false;
if(ypLogin==false){
   location.href='kirjaudu.html'
} 

document.forms['teeaanestys'].addEventListener('submit',lisaaAanestys)

function lisaaAanestys(event){ 
       
   event.preventDefault(); 
   const aanestykset=JSON.parse(localStorage.getItem('aanestykset'))||[];
   const otsikko=document.forms['teeaanestys']['otsikko'].value;
   const vaihtoehto=[];    
   const inputs=document.querySelectorAll('input');

   inputs.forEach(function(input){
         if(input.name.indexOf('vaihtoehto')==0){
            vaihtoehto.push({vaihtoehto:input.value,aania:0}); }})
   aanestykset.push({nimi:otsikko,vaihtoehdot:vaihtoehto})
   localStorage.setItem('aanestykset',JSON.stringify(aanestykset))
  location.href='index.html'
     
   }}

function lisaaVaihtoehto(){
   let vaihtoehto=document.createElement("label");
   let teksti=document.createTextNode("Syötä vaihtoehto:");
   vaihtoehto.appendChild(teksti);
   document.querySelector(".lomake").appendChild(vaihtoehto);
   let rivinvaihto=document.createElement("br");
   document.querySelector(".lomake").appendChild(rivinvaihto);
   let tekstikentta=document.createElement("input");
   tekstikentta.className=("form-control")
   tekstikentta.name=('vaihtoehto')
   document.querySelector(".lomake").appendChild(tekstikentta);
   let rivinvaihto2=document.createElement("br");
   document.querySelector(".lomake").appendChild(rivinvaihto2);
   

}