
 const aanestykset=JSON.parse(localStorage.getItem('aanestykset'))||[];



window.addEventListener('load',haeAanestykset)


function haeAanestykset(){
    let ypLogin=sessionStorage.getItem('ypkirjautunut')||false;
    if(ypLogin==false){
        location.href='kirjaudu.html'
    }else{
    for(let i=0;aanestykset.length>i;i++){
    let rivi=document.createElement("button");
    let sisalto=document.createTextNode( aanestykset[i].nimi);
    rivi.appendChild(sisalto);
    rivi.id=(i)
    rivi.type=('button')
    rivi.onclick=(poistaAanestys)
    rivi.className=("btn btn-lg btn-primary text-uppercase")
    document.querySelector(".poista").appendChild(rivi);
    let rivinvaihto=document.createElement("br");
    document.querySelector(".poista").appendChild(rivinvaihto);}
    
    
} }
function poistaAanestys(){
    id=this.id;    
   aanestykset.splice(id,1)
    localStorage.setItem('aanestykset',JSON.stringify(aanestykset))
    window.location.reload();


}
    