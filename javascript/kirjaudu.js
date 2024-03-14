const tunnukset=JSON.parse(localStorage.getItem('tunnukset'))||[];


document.forms['kirjaudu'].addEventListener('submit',kirjaaSisaan);

    function kirjaaSisaan(event){       

        event.preventDefault();                 
        const username = document.forms['kirjaudu']['kayttajatunnus'].value
        const salasana = document.forms['kirjaudu']['salasana'].value
        if(username=='YP'&& salasana=='YP'){
            let login = true
            sessionStorage.setItem('kirjautunut',(login))               
            let ypLogin=true;
            sessionStorage.setItem('ypkirjautunut',(ypLogin))
            location.href='index.html'
            return;}
       
        for(let i=0;tunnukset.length>i;i++){

            if(username==tunnukset[i].tunnus&& salasana==tunnukset[i].sana){
                let login = true
                sessionStorage.setItem('kirjautunut',(login))
                location.href='index.html'
                return;
                
            }}
            let vaihtoehto=document.createElement("p");
            let teksti=document.createTextNode("Syötit väärän käyttäjätunnuksen tai salasanan!");
            vaihtoehto.appendChild(teksti);
            vaihtoehto.className=('p-3 text-center')
            document.querySelector("#viesti").appendChild(vaihtoehto); 
        setTimeout(viestiPois,5000) 
        
        
    } 
        
        
        function viestiPois(){

        document.querySelector("#viesti").innerHTML='';


        
     
        
        
        }