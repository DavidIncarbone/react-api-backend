import posts from "./posts.js"

const myPosts = [...posts]
const filteredTags = []
const myTags = myPosts.map((post) => post.tags)
console.log(myTags)
for (let i = 0; i < myTags.length; i++) {

    for (let j = 0; j < myTags[i].length; j++) {
        filteredTags.indexOf(myTags[i][j]) === -1 && filteredTags.push(myTags[i][j])
    }
}
export { filteredTags }