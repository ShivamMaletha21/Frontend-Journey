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


