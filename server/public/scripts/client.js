function onReady() {
    console.log('Hello from client.js');

    axios({
        method: 'GET',
        url: '/artist'
    })
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            // quotesFromServer will be an Array of quotes
            let quotesFromServer = response.data;
            let contentDiv = document.querySelector('#artistTableBody');
            for (let artist of quotesFromServer) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        });

    // TODO Add Axios request for /songs and display on DOM
    axios({
        method: 'GET',
        url: '/song'
    })
        .then(function(response){
            console.log(response);
            let songs = response.data;
            let songTableBody = document.getElementById('songTableBody');
            for(let song of songs){
                songTableBody.innerHTML += `
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        });
}

function createNewArtist(event){
    event.preventDefault();
    console.log("You hit submit");
    let artistName = document.getElementById('artistName').value;
    let artistBorn = document.getElementById('artistBorn').value;
    let artistDied = document.getElementById('artistDied').value;

    let newArtist = {
        name: artistName,
        born: artistBorn,
        died: artistDied
    }

    axios({
        method: 'POST',
        url: '/artist',
        data: newArtist
    });
}

onReady();
