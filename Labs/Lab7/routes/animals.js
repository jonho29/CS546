const router = require('express').Router();
const data = require('../data');
const animals = data.animals;
/**
 * Helper function that returns true/false
 * @param {any} id the id to check
 */
async function doesAnimalExist(id) {
  try {
    await todos.getById(id);
    return true;
  } catch (e) {
    return false;
  }
}


router.get('/', async (req, res) => {
  try {
    const allAnimals = await animals.getAll();
    res.json(allAnimals);
  } catch (e) {
    console.log('Error:', e);
    res
      .status(500)
      .json({ error: e.toString() || 'Server Error', route: req.originalUrl });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const animal = await animals.getById(req.params.id);
    const newAnimal = await animals.getPosts(req.params.id);
    res.status(200).json(Object.assign(animal, newAnimal));
  } catch (e) {
    console.log('Error:', e);
    res.status(404).json({
      error: 'Unable to get animal with the specified id',
      id: req.params.id,
      route: req.originalUrl
    });
  }
});


router.post('/', async (req, res) => {
  const animalInfo = req.body;
  if(!animalInfo || !animalInfo.name || !animalInfo.animalType) {
    res.status(400).json({ error: 'Invalid data' });
		return;
  }
  try {
    const newAnimal = await animals.create(
      animalInfo.name,
      animalInfo.animalType
    );
    res.status(200).json(newAnimal);
  } catch (e) {
    console.log('Error:', e);
    res
      .status(400)
      .json({ error: e.toString() || 'Server Error', route: req.originalUrl });
  }
});


router.put('/:id', async (req, res) => {
  const animalInfo = req.body;
  if(!animalInfo || !animalInfo.newName || !animalInfo.newType) {
    res.status(400).json({ error: 'Invalid data' });
		return;
  }

  if (!(await doesAnimalExist(req.params.id))) {
    res.status(404).json({ error: 'Animal does not exist', id: req.params.id });
    return;
  }

  try {
    const updatedAnimal = await animals.rename(
      req.params.id,
      animalInfo.newName,
      animalInfo.newType
    );
    res.status(200).json(updatedAnimal);
  } catch (e) {
    console.log('Error:', e);
    res
      .status(400)
      .json({ error: e.toString() || 'Server Error', route: req.originalUrl });
  }
});


router.delete('/:id', async (req, res) => {
  if (!(await doesAnimalExist(req.params.id))) {
    res.status(404).json({ error: 'Animal does not exist', id: req.params.id });
    return;
  }

  try {
    const deletedAnimal = await animals.remove(req.params.id);
    res.json(deletedAnimal);
  } catch (e) {
    console.log('Error:', e);
    res
      .status(500)
      .json({ error: e.toString() || 'Server Error', route: req.originalUrl });
  }
});

module.exports = router;