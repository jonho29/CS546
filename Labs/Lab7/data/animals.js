const mongoCollections = require("../config/collections");
const animals = mongoCollections.animals;

/**
 * Creates a new animal object and returns to the newly created object
 * @param {string} name name of animal
 * @param {string} animalType type of animal
 * @return {Object} newly created animal
 */
async function create(name, animalType) {
  if (typeof name === "undefined") throw "Undefined animal name";
  if (typeof name !== "string") throw "Invalid animal name";
  if (typeof animalType === "undefined") throw "Undefined animal type";
  if (typeof animalType !== "string") throw "Invalid animal type";

  // Get current list of animals. Create the new object.
  const animalCollection = await animals();
  let newAnimal = {
    name: name,
    animalType: animalType,
    likes: []
  };

  // Insert the animal and store the info to check for error
  const insertInfo = await animalCollection.insertOne(newAnimal);
  if (!insertInfo.insertedCount) throw "Could not add animal";

  // Grab the new animal's generated id to return it
  const newId = insertInfo.insertedId;

  // const animal = await this.get(newId);
  return await this.get(newId);
}

/**
 * Returns an array of all animals in the collection
 * @return {Array} all animals in the collection
 */
async function getAll() {
  // Simple one. Get our collection, then create and return an array of all animals in it.
  const animalCollection = await animals();
  const allAnimals = await animalCollection.find({}).toArray();
  return allAnimals;
}

/**
 * Returns the animal from the database, retrieved using the id
 * @param {string} id id number of the animal to find
 * @return {Object} animal with the given id
 */
async function get(id) {
  if (typeof id === "undefined") throw "Undefined id";

  // Get the collection of animals. From it, get the animal with the given id
  const animalCollection = await animals();
  const animal = await animalCollection.findOne({ _id: id });

  // If animal is null, the given id has no associated animal. If not, return the object
  if (animal === null) throw `Could not find animal with id ${id}`;

  return animal;
}

/**
 * Deletes the animal from the database and returns it if successful
 * @param {string} id id number of the animal to find
 * @return {Object} animal object with the given id that was deleted
 */
async function remove(id) {
  if (typeof id === "undefined") throw "Undefined id";

  const animalCollection = await animals();
  const animal = await this.get(id);
  const deletionInfo = await animalCollection.removeOne({ _id: id });

  if (!deletionInfo.deletedCount) throw `Could not delete animal with id ${id}`;

  return animal;
}

/**
 * Updates the name of an animal currently in the database. Returns the new animal if successful
 * @param {string} id id number of the animal to rename
 * @param {string} newName name to update the animal with
 * @return {Object} newly updated animal object
 */
async function rename(id, newName, newType) {
  if (typeof id === "undefined") throw "Undefined id";
  if (typeof newName === "undefined") throw "Undefined new name";
  if (typeof newName !== "string") throw "Invalid new name";

  const animalCollection = await animals();

  const updateInfo = await animalCollection.updateOne(
    { _id: id },
    { $set: { name: newName, animalType: newType } }
  );
  if (!updateInfo) throw `Could not update animal with id ${id}`;

  return await this.get(id);
}

// Add a like to a user
async function addLike(userId, postId) {
  return this.getUserById(userId).then(currentAnimal => {
    return userCollection.updateOne(
      { _id: userId },
      {
        $addToSet: {
          likes: {
            id: postId,
            title: postTitle
          }
        }
      }
    );
  });
}

// Remove a like from a user
async function removeLike(userId, postId) {
  return this.getUserById(userId).then(currentAnimal => {
    return animals.updateOne(
      { _id: userId },
      {
        $pull: {
          likes: {
            id: postId
          }
        }
      }
    );
  });
}

// Get all of a user's posts
async function getPosts(posterId) {
    if (!posterId) throw 'You must provide a director name';
    const animalCollection = await animals();
    // to query on a subdocument field, just provide the path to the field as a string key;
    // so when you have {info: {director: someName}}, just find on {"info.director": someName}
    return await animalCollection.find({ _id: posterId }).toArray();
}

// Note: Can also declare the methods inside of exports, but I hate change
module.exports = {
  create,
  getAll,
  get,
  remove,
  rename,
  addLike,
  removeLike,
  getPosts
};
