async function fetchData(){
    try{
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            
            throw new Error("Could not fetch resource");
        }
        const data = await response.json();
        // console.log(data);
        const pokemonSprite = data.sprites.front_default;
        const pokemonImage = document.getElementById("pokemonImage");
        pokemonImage.src = pokemonSprite;
        pokemonImage.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}
fetchData();
// This ensures that the data is processed in the correct order, maintaining the integrity of the operations