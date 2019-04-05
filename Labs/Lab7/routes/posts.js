const router = require('express').Router();
const { posts } = require('../data');

/**
 * Helper function that returns true/false whether or not a todo exists
 * @param {any} id the id to check
 */
async function doesPostExist(id) {
  try {
    await posts.readPost(id);
    return true;
  } catch (e) {
    return false;
  }
}

// GET todos/
router.get('/', async (req, res) => {
  try {
    const allPosts = await posts.readAll();
    res.json(allPosts);
  } catch (e) {
    console.log('Error:', e);
    res
      .status(500)
      .json({ error: e.toString() || 'Server Error', route: req.originalUrl });
  }
});

// GET todos/:id
router.get('/:id', async (req, res) => {
  try {
    const post = await posts.readPost(req.params.id);
    res.status(200).json(post);
  } catch (e) {
    console.log('Error:', e);
    res.status(404).json({
      error: 'Unable to get post by the specified id',
      id: req.params.id,
      route: req.originalUrl
    });
  }
});

// POST todos/
router.post('/', async (req, res) => {
  try {
    const newPost = await posts.createPost(
      req.body.title,
      req.body.content,
      req.body.author
    );
    res.status(200).json(newPost);
  } catch (e) {
    console.log('Error:', e);
    res
      .status(400)
      .json({ error: e.toString() || 'Server Error', route: req.originalUrl });
  }
});

// PUT todos/:id
router.put('/:id', async (req, res) => {
  // Check if todo exists
  if (!(await doesPostExist(req.params.id))) {
    res.status(404).json({ error: 'Post does not exist', id: req.params.id });
    return;
  }

  try {
    const updatedPost = await posts.updatePost(
      req.params.id,
      req.body.newTitle,
      req.body.newContent,
      posts.readPost(req.params.id).author
    );
    res.status(200).json(updatedPost);
  } catch (e) {
    console.log('Error:', e);
    res
      .status(500)
      .json({ error: e.toString() || 'Server Error', route: req.originalUrl });
  }
});

// DELETE todos/:id
router.delete('/:id', async (req, res) => {
  // Check if todo exists
  if (!(await doesPostExist(req.params.id))) {
    res.status(404).json({ error: 'Post does not exist', id: req.params.id });
    return;
  }

  try {
    const deletedPost = await posts.deletePost(req.params.id);
    res.json(deletedPost);
  } catch (e) {
    console.log('Error:', e);
    res
      .status(500)
      .json({ error: e.toString() || 'Server Error', route: req.originalUrl });
  }
});

module.exports = router;