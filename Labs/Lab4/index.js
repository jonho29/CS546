const animals = require("./data/animals");
const connection = require("./mongoConnection");

const main = async () => {
    try {
        var sasha = await animals.create("Sasha", "Dog");
        console.log(sasha);
    } catch (e) {
        console.log("Error with Sasha!");
        console.log(e);
    }

    try {
        var lucy = await animals.create("Lucy", "Dog");
        const allAnimals = await animals.getAll();
        console.log(allAnimals);
    } catch (e) {
        console.log("Error with Lucy!");
        console.log(e);
    }
    try {
        const duke = await animals.create("Duke", "Walrus");
        console.log(duke);
    } catch (e) {
        console.log("Error with Duke!");
        console.log(e);
    }
    try {
        const sashita = await animals.rename(sasha._id, "Sashita");
        console.log(sashita);
    } catch (e) {
        console.log("Error with Sashita!");
        console.log(e);
    }
    try {
        const rlucy = await animals.remove(lucy._id);
        const allAnimals2 = await animals.getAll();
        console.log(allAnimals2);
    } catch (e) {
        console.log("Error deleting Lucy!");
        console.log(e);
    }

    const db = await connection();
    await db.serverConfig.close();
};

main();

// // Different implementation of main: instead of multiple try/catches, do this:
// main().catch(error => {
// console.log(error);
// });
