const pokemons = [
    {
        "id": "1",
        "numero": "001",
        "nombre": "Bulbasaur",
        "imagen": "/Recursos/bulbasaur.png",
        "tipo1": "Grass",
        "tipo2" : "Poisson",
        "color1": "#74CB48",
        "color2":"#A43E9E",
        "peso": "6.9 kg",
        "altura": "0.7 m",
        "moves": ["Chlorophyll", "Overgrow"],
        "descripcion": "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        "baseStats":{
            "hp": "045",
            "atk": "049",
            "def": "049",
            "satk": "065",
            "sdef": "065",
            "spd": "045"
        }
    },

        {
            "id": "2",
            "numero":"004",
            "nombre": "Charmander",
            "imagen": "/Recursos/charmander.png",
            "tipo1": "Fire",
            "tipo2": "",
            "color1": "#F57D31",
            "color2":"",
            "peso": "8.5 kg",
            "altura": "0.6 m",
            "moves": ["Mega-Punch", "Fire-Punch"],
            "descripcion": "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
            "baseStats":{
                "hp": "039",
                "atk": "052",
                "def": "043",
                "satk": "060",
                "sdef": "050",
                "spd": "065"
            }
    },

    {
        "id": "3",
        "numero":"007",
        "nombre": "Squirtle",
        "imagen": "/Recursos/squirtle.png",
        "tipo1": "Water",
        "tipo2": "",
        "color1": "#6493EB",
        "color2":"",
        "peso": "9.0 kg",
        "altura": "0.5 m",
        "moves": ["Torrent", "Rain-Dish"],
        "descripcion": "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        "baseStats":{
            "hp": "044",
            "atk": "048",
            "def": "065",
            "satk": "050",
            "sdef": "064",
            "spd": "043"
        }
},
{
    "id": "4",
    "numero":"012",
    "nombre": "Butterfree",
    "imagen": "/Recursos/butterfree.png",
    "tipo1": "Bug", 
    "tipo2": "Flying",
    "color1": "#A7B723",
    "color2":"#A891EC",
    "peso": "32.0 kg",
    "altura": "1.1 m",
    "moves": ["Compound-Eye", "Tinted-Lens"],
    "descripcion": "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
    "baseStats":{
        "hp": "060",
        "atk": "045",
        "def": "050",
        "satk": "090",
        "sdef": "080",
        "spd": "070"
    }
},
{
    "id": "5",
    "numero":"025",
    "nombre": "Pikachu",
    "imagen": "/Recursos/pikachu.png",
    "tipo1": "Electric",
    "tipo2": "",
    "color1": "#F9CF30",
    "color2":"",
    "peso": "6.0 kg",
    "altura": "0.4 m",
    "moves": ["Mega-Punch", "Pay-Day"],
    "descripcion": "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
    "baseStats":{
        "hp": "035",
        "atk": "055",
        "def": "040",
        "satk": "050",
        "sdef": "050",
        "spd": "090"
    }
},
{
    "id": "6",
    "numero": "092" ,
    "nombre":"Gastly",
    "imagen": "/Recursos/gastly.png",
    "tipo1" :"Ghost",
    "tipo2": "Type",
    "color1" : "#70559b",
    "color2" : "#B7B9D0",
    "peso" : "0.1 kg",
    "altura" : "1.3 m",
    "moves" : ["Levitate"],
    "descripcion" : "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
    "baseStats" : {
        "hp": "030" ,
        "atk": "035",
        "def": "030",
        "satk": "100",
        "sdef": "035",
        "spd": "080"
    }
},
{
    "id": "7",
    "numero": "132" ,
    "nombre":"Ditto",
    "imagen": "/Recursos/ditto.png",
    "tipo1":"Normal",
    "tipo2": "",
    "color1" : "#AAA67F",
    "color2" : "",
    "peso" : "4,0 kg",
    "altura" : "0,3 m",
    "moves" : ["Limber", "Imposter"],
    "descripcion" : "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
    "baseStats" : {
        "hp" : "048" ,
        "atk" : "048",
        "def" : "048",
        "satk" : "048",
        "sdef" : "048",
        "spd" : "048"
    }
},
{
    "id": "8",
    "numero":"152" ,
    "nombre": "Mew",
    "imagen": "/Recursos/mew.png",
    "tipo1": "Psychic",
    "tipo2": "",
    "color1" : "#FB5584",
    "color2" : "",
    "peso" : "4,0 kg",
    "altura" : "0,4 m",
    "moves" : ["Synchronize"],
    "descripcion" : "When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.",
    "baseStats" : {
        "hp" : "100" ,
        "atk" : "100",
        "def" : "100",
        "satk" : "100",
        "sdef" : "100",
        "spd" : "100"
    }
},
{
    "id": "9",
    "numero":"304", 
    "nombre": "Aron",
    "imagen": "/Recursos/aron.png",
    "tipo1": "Steel",
    "tipo2": "Rock",
    "color1" : "#B7B9D0",
    "color2" : "#B69E31",
    "peso" : "60,0 kg",
    "altura" : "0,4 m",
    "moves" : ["Study", "Rock-Head"],
    "descripcion" : "It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.",
    "baseStats" : {
        "hp" : "050", 
        "atk" : "070",
        "def" : "100",
        "satk" : "040",
        "sdef" : "040",
        "spd" : "030"
    }
}

]

export default pokemons;