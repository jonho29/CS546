const router = require("express").Router();
const { posts } = require("../data");
const { animals } = require("../data");

/**
 * Helper function that returns true/false
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

router.post("/:id", async (req, res) => {
  try {
    const newLike = await animals.addLike(req.params.id, req.body.postId);
    res.status(200).json(newLike);
  } catch (e) {
    console.log("Error:", e);
    res
      .status(400)
      .json({ error: e.toString() || "Server Error", route: req.originalUrl });
  }
});

router.delete("/:id", async (req, res) => {
  
  if (!(await doesPostExist(req.params.id))) {
    res.status(404).json({ error: "Post does not exist", id: req.params.id });
    return;
  }

  try {
    const deletedLike = await animals.removeLike(
      req.params.id,
      req.body.postId
    );
    res.json(deletedLike);
  } catch (e) {
    console.log("Error:", e);
    res
      .status(500)
      .json({ error: e.toString() || "Server Error", route: req.originalUrl });
  }
});

module.exports = router;
