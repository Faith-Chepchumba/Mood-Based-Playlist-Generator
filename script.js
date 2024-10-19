const playlists = {

happy: ['Song 1', 'Song 2', 'Song 3'],

sad: ['Song A', 'Song B', 'Song C'],

calm: ['Song X', 'Song Y', 'Song Z']

};

function generatePlaylist() {

const mood = document.getElementById('mood').value.toLowerCase();

const playlist = playlists[mood];

if (playlist) {

document.getElementById('result').textContent = `Here is your playlist: ${playlist.join(', ')}`;

} else {

document.getElementById('result').textContent = "Sorry, we don't have a playlist for that mood.";

}

}
