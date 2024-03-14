
window.addEventListener('load',haeAanestykset)


function haeAanestykset(){
    const aanestykset=JSON.parse(localStorage.getItem('aanestykset'))||[]; 

    for(let i=0;aanestykset.length>i;i++){
    let rivi=document.createElement("button");
    let sisalto=document.createTextNode( aanestykset[i].nimi);
    rivi.appendChild(sisalto);
    rivi.id=(i)
    rivi.type=('button')
    rivi.onclick=(avaaAanestys)
    rivi.className=("btn btn-lg btn-primary text-uppercase")
    document.querySelector(".aanestys").appendChild(rivi);
    let rivinvaihto=document.createElement("br");
    document.querySelector(".aanestys").appendChild(rivinvaihto);

}}



function avaaAanestys(){
    const tamaAanestys=this.id
    sessionStorage.setItem('kohde',JSON.stringify(tamaAanestys));  
    location.href="aanesta.html"   
    
    
}