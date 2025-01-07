import posts from "../models/posts.js";
import CustomError from "../classes/CustomError.js";

function index(req, res) {
  const response = {
    totalCount: posts.length,
    data: [...posts],
  };
  res.json(response);
}

function show(req, res) {
  const id = parseInt(req.params.id);
  const item = posts.find((item) => item.id === id);
  if (!item) {
    throw new CustomError("L'elemento non esiste", 404);
  }
  res.json({ success: true, item });
}

function store(req, res) {
  let newId = 0;
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id > newId) {
      newId = posts[i].id;
    }
  }
  newId += 1;
  console.log(req.body);
  // new data is in req.body
  const newItem = {
    id: newId,
    ...req.body,
  };

  posts.push(newItem);
  res.status(201).json(newItem);
}

function update(req, res) {
  const id = parseInt(req.params.id);
  const item = posts.find((item) => item.id === id);
  if (!item) {
    throw new CustomError("L'elemento non esiste", 404);
  }

  //console.log(req.body);
  for (key in item) {
    if (key !== "id") {
      item[key] = req.body[key];
    }
  }

  //console.log(posts);
  res.json(item);
}
function destroy(req, res) {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((item) => item.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    res.sendStatus(204);
  } else {
    throw new CustomError("L'elemento non esiste", 404);
  }
}

export { index, show, store, update, destroy };
