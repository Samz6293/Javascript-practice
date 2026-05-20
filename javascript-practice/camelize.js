function camelize (str) {
    return str
        .split("-")
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join("");
}

console.log(camelize("Hello-world"));
console.log(camelize("hello-there"));
console.log(camelize("-hi-there"));

