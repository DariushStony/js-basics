function showProperties(object) {
    for (let key in object)
        if (typeof object[key] === "string") console.log(key, object[key]);
}

const movie = {
    title: "Shining",
    releaseYear: 2018,
    rating: 8.2,
    director: "Stanly",
};

showProperties(movie);
