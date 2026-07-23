// ACTUAL PLAYLIST

let playlist = [];


// SAMPLE MUSIC LIBRARY

let music = [
    {
        title: "Believer",
        artist: "Imagine Dragons",
        duration: "3:24",
        starred: false
    },
    {
        title: "Attention",
        artist: "Charlie Puth",
        duration: "3:28",
        starred: false
    },
    {
        title: "Shape of You",
        artist: "Ed Sheeran",
        duration: "3:53",
        starred: false
    },
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        duration: "3:20",
        starred: true
    },
    {
        title: "Perfect",
        artist: "Ed Sheeran",
        duration: "4:23",
        starred: false
    },
    {
        title: "Someone You Loved",
        artist: "Lewis Capaldi",
        duration: "3:02",
        starred: false
    },
    {
        title: "Sunflower",
        artist: "Post Malone",
        duration: "2:38",
        starred: false
    }
];


// GET HTML ELEMENTS

let form = document.getElementById("playlistForm");
let search_song = document.getElementById("search_song");
let sortBtn = document.getElementById("sortBtn");
let reverseBtn = document.getElementById("reverseBtn");
let shuffleBtn = document.getElementById("shuffleBtn");
let starBtn = document.getElementById("starBtn");
let randomBtn = document.getElementById("randomBtn");
let clearBtn = document.getElementById("clearBtn");


// ADD NEW SONG

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let user_value = document.getElementById("new_song").value;

    // Find song in music library
    let new_songs = music.find(function(song) {
        return song.title === user_value;
    });

    // Check if song does not exist
    if (!new_songs) {
        alert("Song not found!");
        return;
    }

    // Check if song already exists
    let alreadyExists = playlist.some(function(song) {
        return song.title === new_songs.title;
    });

    if (alreadyExists) {
        alert("Song is already in your playlist!");
        return;
    }

    // Add song to playlist
    playlist.push(new_songs);

    // Update playlist
    RenderPlaylist();

    // Update first and last song
    UpdatePlaylistInfo();

    // Update playlist preview
    RenderPreview();

    // Update total songs
    document.getElementById("totalSongs").innerHTML =
        '<i class="fa-solid fa-music"></i> Total Songs: ' + playlist.length;

    // Update recently added
    document.getElementById("recentSong").innerHTML =
        '<i class="fa-regular fa-clock"></i> Recently Added: ' + new_songs.title;

    // Clear input
    document.getElementById("new_song").value = "";
});


// RENDER PLAYLIST

function RenderPlaylist() {
    let playlistElement = document.getElementById("playlist");

    // If playlist is empty
    if (playlist.length === 0) {
        playlistElement.innerHTML =
            '<li class="empty-playlist"><i class="fa-solid fa-music"></i><p>Your playlist is empty.</p><span>Add a song to get started.</span></li>';

        return;
    }

    // Clear old playlist
    playlistElement.innerHTML = "";

    // Display each song
    playlist.forEach(function(song, index) {
        playlistElement.innerHTML +=
            '<li class="song-card">' +
                '<div class="song-number">' + (index + 1) + '</div>' +
                '<div class="song-info">' +
                    '<h4>' + song.title + '</h4>' +
                    '<p>' + song.artist + ' <span>•</span> ' + song.duration + '</p>' +
                '</div>' +
                '<div class="song-star">' +
                    (song.starred
                        ? '<i class="fa-solid fa-star"></i>'
                        : '<i class="fa-regular fa-star"></i>') +
                '</div>' +
            '</li>';
    });
}


// UPDATE PLAYLIST INFORMATION

function UpdatePlaylistInfo() {
    // If playlist is empty
    if (playlist.length === 0) {
        document.getElementById("firstSong").innerHTML =
            '<i class="fa-solid fa-forward"></i> First Song: -';

        document.getElementById("lastSong").innerHTML =
            '<i class="fa-solid fa-forward-step"></i> Last Song: -';

        return;
    }

    // First song
    document.getElementById("firstSong").innerHTML =
        '<i class="fa-solid fa-forward"></i> First Song: ' + playlist[0].title;

    // Last song
    document.getElementById("lastSong").innerHTML =
        '<i class="fa-solid fa-forward-step"></i> Last Song: ' + playlist[playlist.length - 1].title;
}


// RENDER PLAYLIST PREVIEW

function RenderPreview() {
    let preview = document.getElementById("preview");

    // If playlist is empty
    if (playlist.length === 0) {
        preview.innerHTML =
            '<h3>Playlist Preview</h3><p>No songs in playlist.</p>';

        return;
    }

    // Get first 4 songs
    let previewSongs = playlist.slice(0, 4);

    // Add heading
    preview.innerHTML = '<h3>Playlist Preview</h3>';

    // Display preview songs
    previewSongs.forEach(function(song) {
        preview.innerHTML +=
            '<div class="preview-song">' +
                '<p><strong>' + song.title + '</strong></p>' +
                '<p>' + song.artist + ' • ' + song.duration + '</p>' +
            '</div>';
    });
}


// SEARCH SONG

search_song.addEventListener("input", () => {
    let search_value = document.getElementById("search_song").value;

    // Filter playlist
    let search = playlist.filter(function(song) {
        return song.title.toLowerCase().includes(search_value.toLowerCase());
    });

    let playlistElement = document.getElementById("playlist");

    // Clear playlist display
    playlistElement.innerHTML = "";

    // If nothing found
    if (search.length === 0) {
        playlistElement.innerHTML =
            '<li class="empty-playlist"><i class="fa-solid fa-magnifying-glass"></i><p>No songs found.</p></li>';

        return;
    }

    // Display search results
    search.forEach(function(song, index) {
        playlistElement.innerHTML +=
            '<li class="song-card">' +
                '<div class="song-number">' + (index + 1) + '</div>' +
                '<div class="song-info">' +
                    '<h4>' + song.title + '</h4>' +
                    '<p>' + song.artist + ' <span>•</span> ' + song.duration + '</p>' +
                '</div>' +
                '<div class="song-star">' +
                    (song.starred
                        ? '<i class="fa-solid fa-star"></i>'
                        : '<i class="fa-regular fa-star"></i>') +
                '</div>' +
            '</li>';
    });
});


// SORT SONG A-Z

sortBtn.addEventListener("click", () => {
    playlist.sort((songA, songB) => {
        return songA.title.localeCompare(songB.title);
    });

    // Update playlist
    RenderPlaylist();

    // Update first and last song
    UpdatePlaylistInfo();

    // Update preview
    RenderPreview();
});


// REVERSE PLAYLIST

reverseBtn.addEventListener("click", () => {
    playlist.reverse();

    // Update playlist
    RenderPlaylist();

    // Update first and last song
    UpdatePlaylistInfo();

    // Update preview
    RenderPreview();
});


// SHUFFLE PLAYLIST
// Fisher-Yates Shuffle

shuffleBtn.addEventListener("click", () => {
    for (let i = playlist.length - 1; i > 0; i--) {
        let shuffleIndex = Math.floor(Math.random() * (i + 1));

        // Swap songs
        [playlist[i], playlist[shuffleIndex]] =
        [playlist[shuffleIndex], playlist[i]];
    }

    // Update playlist
    RenderPlaylist();

    // Update first and last song
    UpdatePlaylistInfo();

    // Update preview
    RenderPreview();
});


// RANDOM SONG

randomBtn.addEventListener("click", () => {
    // Check if playlist is empty
    if (playlist.length === 0) {
        document.getElementById("playlist").innerHTML =
            "Playlist is empty";

        return;
    }

    // Generate random index
    let randomIndex = Math.floor(Math.random() * playlist.length);

    // Get random song
    let randomSong = playlist[randomIndex];

    // Display random song
    document.getElementById("playlist").innerHTML =
        '<li class="song-card">' +
            '<div class="song-number"><i class="fa-solid fa-dice"></i></div>' +
            '<div class="song-info">' +
                '<h4>' + randomSong.title + '</h4>' +
                '<p>' + randomSong.artist + ' <span>•</span> ' + randomSong.duration + '</p>' +
            '</div>' +
            '<div class="song-star">' +
                (randomSong.starred
                    ? '<i class="fa-solid fa-star"></i>'
                    : '<i class="fa-regular fa-star"></i>') +
            '</div>' +
        '</li>';
});


// STAR SONG
// Select one starred song

starBtn.addEventListener("click", () => {
    let star_song = playlist.find(function(song) {
        return song.starred === true;
    });

    // If starred song exists
    if (star_song) {
        document.getElementById("playlist").innerHTML =
            '<li class="song-card">' +
                '<div class="song-number"><i class="fa-solid fa-star"></i></div>' +
                '<div class="song-info">' +
                    '<h4>' + star_song.title + '</h4>' +
                    '<p>' + star_song.artist + ' <span>•</span> ' + star_song.duration + '</p>' +
                '</div>' +
                '<div class="song-star"><i class="fa-solid fa-star"></i></div>' +
            '</li>';
    }

    // If no starred song exists
    else {
        RenderPlaylist();
    }
});


// CLEAR PLAYLIST

clearBtn.addEventListener("click", () => {
    // Remove all songs
    playlist.length = 0;

    // Update playlist
    RenderPlaylist();

    // Update first and last song
    UpdatePlaylistInfo();

    // Update preview
    RenderPreview();

    // Update total songs
    document.getElementById("totalSongs").innerHTML =
        '<i class="fa-solid fa-music"></i> Total Songs: 0';

    // Update recently added
    document.getElementById("recentSong").innerHTML =
        '<i class="fa-regular fa-clock"></i> Recently Added: -';
});