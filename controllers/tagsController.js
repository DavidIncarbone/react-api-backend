import { filteredTags } from "../models/tags.js";

function index(req, res) {
    const response = {
        totalCount: filteredTags.length,
        data: [...filteredTags],
    };
    res.json(response);
}

export { index }