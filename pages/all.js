let user = document.querySelector('#monUser')
let mdp = document.querySelector('#monMdp')
let valider = document.querySelector('button')

valider.addEventListener('click', function(e){
    

    if(user.value.length > 4 && mdp.value.length > 4){
        console.log('inscription réussi')
    }else{
        console.log('erreur')
    }
})