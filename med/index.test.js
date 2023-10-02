const { findTypePokemon } = require("./index");
const assert = require("node:assert").strict;

const pokemons = [
	{
		nom: "Pikachu",
		type: "Électrique",
	},
	{
		nom: "Bulbizarre",
		type: "Plante",
	},
	{
		nom: "Salamèche",
		type: "Feu",
	},
	{
		nom: "Carapuce",
		type: "Eau",
	},
	{
		nom: "Mewtwo",
		type: "Psychique",
	},
	{
		nom: "Ronflex",
		type: "Normal",
	},
	{
		nom: "Dracaufeu",
		type: "Feu",
	},
	{
		nom: "Mew",
		type: "Psychique",
	},
	{
		nom: "Evoli",
		type: "Normal",
	},
	{
		nom: "Goupix",
		type: "Feu",
	},
	{
		nom: "Magicarpe",
		type: "Eau",
	},
	{
		nom: "Raichu",
		type: "Électrique",
	},
	{
		nom: "Tortank",
		type: "Eau",
	},
	{
		nom: "Dracolosse",
		type: "Dragon",
	},
	{
		nom: "Métamorph",
		type: "Normal",
	},
	{
		nom: "Alakazam",
		type: "Psychique",
	},
	{
		nom: "Tentacool",
		type: "Eau",
	},
	{
		nom: "Papilusion",
		type: "Insecte",
	},
	{
		nom: "Racaillou",
		type: "Roche",
	},
	{
		nom: "Givrali",
		type: "Glace",
	},
];

assert.deepStrictEqual(findTypePokemon(pokemons), [
	[
		{ nom: "Mewtwo", type: "Psychique" },
		{ nom: "Mew", type: "Psychique" },
		{ nom: "Alakazam", type: "Psychique" },
	],
	[
		{ nom: "Salamèche", type: "Feu" },
		{ nom: "Dracaufeu", type: "Feu" },
		{ nom: "Goupix", type: "Feu" },
	],
]);
