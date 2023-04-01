// const post = {
//     title: "a",
//     body: "text",
//     author: "Dariush",
//     views: 2300,
//     comments: [
//         {
//             author: "anyone",
//             body: "comment text",
//         },
//         {
//             author: "somebody",
//             body: "comment text",
//         },
//     ],
//     isLive: true,
// };

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

const post = new Post("a", "b", "c");

console.log(post);
