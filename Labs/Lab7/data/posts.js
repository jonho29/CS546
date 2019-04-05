const mongoCollections = require("../config/collections");
const posts = mongoCollections.posts;
const animals = require("./animals");

/**
 * Creates a new post
 * @param {string} title
 * @param {string} body
 * @param {string} posterId id of author of post
 */
async function createPost(title, body, posterId) {
  if (typeof title === 'undefined') throw "Invalid title";
  if (typeof body === 'undefined') throw "Invalid body";
  if (typeof posterId === 'undefined') throw "Invalid poster id";

  const postCollection = await posts();

  const newPostInfo = {
    title: title,
		author: posterId,
		content: body
  };

  const insertInfo = await postCollection.insertOne(newPostInfo);
  if (!insertInfo.insertedCount) throw "Could not add post";

  const newPost = await this.readPost(insertInfo.insertedId);

  return newPost;
}

/**
 * Returns an array of all posts in the collection
 * @return {Array} all animals in the collection
 */
async function readAll() {
  // Simple one. Get our collection, then create and return an array of all animals in it.
  const postCollection = await posts();
  const allPosts = await postCollection.find({}).toArray();
  return allPosts;
}

/**
 * Reads a post
 * @param {string} postId id of post to read
 * @return {Object} post with given id
 */
async function readPost(postId) {
  if (typeof postId === "undefined") throw "Invalid post id";

  const postCollection = await posts();
  const post = await postCollection.findOne({ _id: postId });

  if (post === null) throw `Could not find post with id ${postId}`;

  return post;
}

/**
 * Updates an existing post
 * @param {string} postId id of post to update
 * @param {string} title
 * @param {string} body
 * @param {string} posterId author of post
 * @return {Object} updated post
 */
async function updatePost(postId, title, body, posterId) {
	if (typeof postId === 'undefined') throw "Invalid post id";
	if (typeof title === 'undefined') throw "Invalid title";
	if (typeof body === 'undefined') throw "Invalid body";
	if (typeof posterId === 'undefined') throw "Invalid poster id";

	const postCollection = await posts();

	let updatedPost = {
		title: title,
		author: posterId,
		content: body
	};

	const updatedInfo = await postCollection.replaceOne(
		{ _id: postId },
		updatedPost
	);

	if (!updatedInfo.modifiedCount) {
		throw "could not update post successfully";
	}

	const newPost = await this.readPost(postId);
	return newPost;
}

/**
 * Deletes a post with the given id
 * @param {string} postId post to delete
 * @return {Object} post that was deleted
 */
async function deletePost(postId) {
  if (typeof postId === "undefined") throw "Undefined id";

  const postCollection = await post();
  const post = await this.readPost(postId);
  const deletionInfo = await animalCollection.removeOne({ _id: postId });

  if (!deletionInfo.deletedCount) throw `Could not delete animal with id ${id}`;

  return post;
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
	readPost,
	readAll
};
