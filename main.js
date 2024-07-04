"use strict";
/*
Q40. Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in an artist name and an
album title, and it should return a Object containing these two pieces of
information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the
album information correctly.
Add an optional parameter to make_album() that allows you to store the
number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new
function call that includes the number of tracks on an album.
*/
function make_album(artistname, albumtitle) {
    return { artistname, albumtitle };
}
let firstAlbum = make_album("Sherry", "Dosti hai yar");
let secondAlbum = make_album("Sheraz", "Tum meri zindaghi ho");
let thirdAlbum = make_album("Shahid", "Nafrat hai tum se");
console.log(firstAlbum);
console.log(secondAlbum);
console.log(thirdAlbum);
function make_album1(artistname, albumtitle, numberoftrack) {
    return { artistname, albumtitle, numberoftrack };
}
let firstAlbum1 = make_album1("Sherry", "Dosti hai yar", 30);
let secondAlbum2 = make_album1("Sheraz", "Tum meri zindaghi ho", 20);
let thirdAlbum3 = make_album1("Shahid", "Nafrat hai tum se", 23);
console.log(firstAlbum1);
console.log(secondAlbum2);
console.log(thirdAlbum3);
