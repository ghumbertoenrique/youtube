const charactersEl = document.getElementById('characters');
const nameFilterEl = document.getElementById('name-filter');
const statusFilterEl = document.getElementById('status-filter');

// tenemos que crear la funcion que haga el llamado a la api

async function getCharacters (name, status){

    let url = 'https://rickandmortyapi.com/api/character/';

    if (name || status){
        url += '?';
        if(name){
            url += `name=${name}&`;
        }

        if(status){
            url += `status=${status}`;
        }
    }


    const response = await fetch(url);
    const data = await response.json(); 

    return data.results;

}

// la funcion que va a renderizar los elementos dentro del DOM

async function displayCharacters (name, status) {
    
    // Obtener los personajes filtrados
    const characters = await getCharacters(name, status);
    
    charactersEl.innerHTML = '';

    // renderizar los personajes
    for( let character of characters ){
        const card = document.createElement('div');
        card.classList.add('character-card');

        card.innerHTML = `
            <img src="${character.image}" />
            <h2> ${character.name} </h2>
            <p> Status: ${character.status} </p>
            <p> Especie: ${character.species} </p>
        `;

        charactersEl.appendChild(card);

    }

}

displayCharacters();

nameFilterEl.addEventListener('input', () => {
    displayCharacters(nameFilterEl.value, statusFilterEl.value );
});

statusFilterEl.addEventListener('change', () => {
    displayCharacters(nameFilterEl.value, statusFilterEl.value );
});