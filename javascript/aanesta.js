const a= JSON.parse(sessionStorage.getItem('kohde'));
const aanestykset=JSON.parse(localStorage.getItem('aanestykset'))||[];
window.addEventListener('load',haeAanestys)

function haeAanestys(){
        let login=sessionStorage.getItem('kirjautunut')||false;
        if(login){
        const valinnat=JSON.parse(localStorage.getItem(localStorage.key(a))) 
        let otsikko=document.createElement("h4");
        let sisalto=document.createTextNode( aanestykset[a].nimi);
        otsikko.appendChild(sisalto);    
         document.querySelector(".aanesta").appendChild(otsikko);
        let rivinvaihto=document.createElement("br");
        document.querySelector(".aanesta").appendChild(rivinvaihto);
        for(let i=0;aanestykset[a].vaihtoehdot.length>i;i++){
        let rivi=document.createElement("button");
        let teksti=document.createTextNode(aanestykset[a].vaihtoehdot[i].vaihtoehto+' '+aanestykset[a].vaihtoehdot[i].aania+' ÄÄNTÄ');
        rivi.appendChild(teksti);
        rivi.type=('submit')
        rivi.onclick=(lisaaAani);
        rivi.id=(i)
        rivi.className=('btn btn-lg btn-primary text-uppercase mt-1')
        document.querySelector(".aanesta").appendChild(rivi);
        let rivinvaihto=document.createElement("br");
        document.querySelector(".aanesta").appendChild(rivinvaihto);
        }}else{
                location.href='kirjaudu.html'
        }
    }
   
    
    
    function lisaaAani(){
            tamaid=this.id
            aanestykset[a].vaihtoehdot[tamaid].aania++     
            localStorage.setItem('aanestykset',JSON.stringify(aanestykset))
            window.location.reload();
    }
    