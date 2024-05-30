const AbstractSeeder = require("./AbstractSeeder");
const CategorySeeder = require("./CategorySeeder");

class ProgramSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "program", truncate: true, dependencies: [CategorySeeder] });
  }

  run() {
    const programs = [
      {
        title: "The Good Place",
        synopsis:
          "À sa mort, Eleanor Shellstrop est envoyée au Bon Endroit, un paradis fantaisiste réservé aux individus exceptionnellement bienveillants. Or Eleanor n'est pas exactement une « bonne personne » et comprend vite qu'il y a eu erreur sur la personne. Avec l'aide de Chidi, sa prétendue âme sœur dans l'au-delà, la jeune femme est bien décidée à se redécouvrir.",
        poster:
          "https://img.betaseries.com/JwRqyGD3f9KvO_OlfIXHZUA3Ypw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2F94857341d71c795c69b9e5b23c4bf3e7.jpg",
        country: "USA",
        year: 2016,
        category_id: this.getRef("category_Comédie").insertId,
      },
      {
        title: "Dark",
        synopsis:
          "Quatre familles affolées par la disparition d'un enfant cherchent des réponses et tombent sur un mystère impliquant trois générations qui finit de les déstabiliser.",
        poster:
          "https://img.betaseries.com/zDxfeFudy3HWjxa6J8QIED9iaVw=/600x900/smart/https%3A%2F%2Fpictures.betaseries.com%2Ffonds%2Fposter%2Fc47135385da176a87d0dd9177c5f6a41.jpg",
        country: "Allemagne",
        year: 2017,
        category_id: this.getRef("category_Science-Fiction").insertId,
      },
      {
        title: "Vermines",
        synopsis:
          "Face à une invasion d'araignées, les habitants d'un immeuble vont devoir survivre.",
        poster:
          "https://fr.web.img6.acsta.net/c_310_420/pictures/23/11/30/11/13/5779947.jpg",
        country: "France",
        year: 2023,
        category_id: this.getRef("category_Horror").insertId,
      },
      {
        title: "Titanic",
        synopsis:
          "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le Titanic, appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.",
        poster: "https://fr.web.img6.acsta.net/c_310_420/pictures/23/01/10/16/06/0622119.jpg",
        country: "Etats-Unis",
        year: 1998,
        category_id: this.getRef("category_Romantic").insertId,
      },
    ];

    programs.forEach((program) => {
      this.insert(program); // insert into program(title, synopsis, poster, country, year, category_id) values (?, ?, ?, ?, ?, ?)
    });
  }
}

// Export the ProgramSeeder class
module.exports = ProgramSeeder;
