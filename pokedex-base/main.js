document.write(pokemons);
console.log(pokemons);


for (var index = 0; index < pokemons.length; index++){
    console.log(pokemons[index]);
    document.write(`<h1>${index+1 + "- " + pokemons[index]}</h1>`);
}