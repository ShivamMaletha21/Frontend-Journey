// actual playlist (It starts empty because the user hasn't added anything yet).
let playlist = [];


// sample music library
let music = [
    {
        title : "Believer",
        artist: "Imagine Dragons",
        duration: "3:24"
    },


    {
    title: "Attention",
    artist: "Charlie Puth",
    duration: "3:28"
    },
    {
        title: "Shape of you",
        artist: "Ed Sheeran",
        duration: "3:53"
    },

    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: "3:20"
    },

    {
        title: "Perfect",
        artist: "Ed Sheeran",
        duration: "4:23"
    },

    {
        title: "Someone You Loved",
        artist: "Lewis Capaldi",
        duration: "3:02"
    },

    {
        title: "Sunflower",
        artist: "Post Malone",
        duration: "2:38"
    }
]





// submit value
let form = document.getElementById("playlistForm");
form.addEventListener("submit",(event)=>{ // here event is the event object means.. it contains the info about the particular click.

event.preventDefault();

// user type
let user_value = document.getElementById("new_song").value;

    // add new song..
let new_songs = music.find(function(song){
    return song.title === user_value; 
});

// check if song doesn't exist
if(!new_songs) {
    alert("Song not found!");
    return;
}

// Check if song already exists in playlist
let alreadyExists = playlist.some(function(song) {
    return song.title === new_songs.title;
    });

// If song already exists
if (alreadyExists) {
    alert("Song is already in your playlist!");
    return;
    }

//add song to playlist array
playlist.push(new_songs);

// show playlist
document.getElementById("playlist").innerHTML = JSON.stringify(playlist);

    // Clear input
    document.getElementById("new_song").value = "";

})


// Search Song
search_song.addEventListener("input", () => {
    let search_value = document.getElementById("search_song").value;

    let search = playlist.filter(function(song) {
        return song.title.toLowerCase().includes(search_value.toLowerCase());
    });

    document.getElementById("playlist").innerHTML = JSON.stringify(search);
});





// with the help of render playlist whatever we do i.e sort , push, update, delete we can do it directly with the help of it
// bcz of this we dont need to write document.getElementById("playlist").innerHTML = JSON.stringify(playlist); every single time when we are implementing something..
function RenderPlaylist() {
    document.getElementById("playlist").innerHTML = JSON.stringify(playlist);
}



// Sort Song
sortBtn.addEventListener("click",()=>{
    playlist.sort((songA, songB) => {
    return songA.title.localeCompare(songB.title);

// // another approach
// //     playlist.sort((songA, songB) => {
// //     if (songA.title < songB.title) {
// //         return -1;
// //     } 
// //     else if (songA.title > songB.title) {
// //         return 1;
// //     } 
// //     else {
// //         return 0;
// //     }
// // });
});

RenderPlaylist();

})



// Reverse
reverseBtn.addEventListener("click",()=>{
    playlist.reverse((reverse_song)=>{
        return reverse_song;

    });
RenderPlaylist();
});




// Shufflesong ->change the order of the entire playlist.
shuffleBtn.addEventListener("click", () => {

    // playlist.length - 1 → starts with the last index
    // i-- → moves backward to the previous position
    for (let i = playlist.length - 1; i > 0; i--) {

        // Generate a random index
        // i + 1 → gives the number of available positions
        let shuffleIndex = Math.floor(Math.random() * (i + 1));

        // Swap values using destructuring
        [playlist[i], playlist[shuffleIndex]] =
        [playlist[shuffleIndex], playlist[i]];

    }

    RenderPlaylist();
});

// Random song-> select one random song from the playlist
randomBtn.addEventListener("click",()=>{

    let randomIndex = Math.floor(Math.random ()* playlist.length);
    let randomSong = playlist[randomIndex];

    document.getElementById("playlist").innerHTML =JSON.stringify(randomSong);
});