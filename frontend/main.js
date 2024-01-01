const url = "https://api.web.tux.software"

document.addEventListener("DOMContentLoaded", () => {
    const statusCircle = document.querySelector('.circle');
    statusCircle.style.backgroundColor = 'transparent';

        fetch(url+'/me')
            .then(response => response.json())
            .then(data => {
                const statusCircle = document.querySelector('.circle');

                document.getElementById('header-avatar').src = `https://cdn.discordapp.com/avatars/725316907187568701/${data.avatar}`;
            
                switch (data.status) {
                    case 'online':
                        statusCircle.style.backgroundColor = '#43b581';
                        break;
                    case 'dnd':
                        statusCircle.style.backgroundColor = '#f04747'; 
                        break;
                    case 'idle':
                        statusCircle.style.backgroundColor = '#faa61a'; 
                        break;
                    case 'offline':
                        statusCircle.style.backgroundColor = '#747f8d';
                        break;
                    default:
                        statusCircle.style.backgroundColor = 'transparent';
                        break;
                }
            
            })
            .catch(error => console.error('Error:', error));
            fetch(url + '/me/activities')
            .then(response => response.json())
            .then(data => {
                const spotifyPlayer = document.getElementById('spotify-container');
                const txt = document.getElementById('spotify-txt');
                const appHeader = document.querySelector('.app-header p[style="color: gray; margin: 0;"]');
                const spoti = data.spotify;
                const activities = data.act;
        
                if (spoti && !activities) {
                    appHeader.innerText = "Escuchando Spotify";
                    spotifyPlayer.style.display = 'block';
                    txt.style.display = 'block';
        
                    document.getElementById('song-image').src = spoti.album_art_url;
                    document.getElementById('song-title').innerText = spoti.song;
                    document.getElementById('song-details').innerText = `${spoti.artist} - ${spoti.album}`;
                } else if (activities.length > 0) {
                    const activityName = activities[0].name;
                    appHeader.innerText = `Jugando a ${activityName}`;
        
                    if (spoti === false){
                        spotifyPlayer.style.display = 'none';
                        txt.style.display = 'none';
               } else {
                spotifyPlayer.style.display = 'block';
                    
                txt.style.display = 'block';
                
                document.getElementById('song-image').src = spoti.album_art_url;
                document.getElementById('song-title').innerText = spoti.song;
                document.getElementById('song-details').innerText = `${spoti.artist} - ${spoti.album}`;
               
                    }
                } else {
                    appHeader.innerText = "No estoy haciendo nada";
                    spotifyPlayer.style.display = 'none';
                    txt.style.display = 'none';


                }
            })
            .catch(error => console.error('api ', error));
        


    setInterval(() => {
        fetch(url+'/me')
        .then(response => response.json())
        .then(data => {
            const statusCircle = document.querySelector('.circle');

            document.getElementById('header-avatar').src = `https://cdn.discordapp.com/avatars/725316907187568701/${data.avatar}`;
        
            switch (data.status) {
                case 'online':
                    statusCircle.style.backgroundColor = '#43b581';
                    break;
                case 'dnd':
                    statusCircle.style.backgroundColor = '#f04747'; 
                    break;
                case 'idle':
                    statusCircle.style.backgroundColor = '#faa61a'; 
                    break;
                case 'offline':
                    statusCircle.style.backgroundColor = '#747f8d';
                    break;
                default:
                    statusCircle.style.backgroundColor = 'transparent';
                    break;
            }
        
        })
        .catch(error => console.error('Error:', error));

        fetch(url + '/me/activities')
        .then(response => response.json())
        .then(data => {
            const spotifyPlayer = document.getElementById('spotify-container');
            const txt = document.getElementById('spotify-txt');
            const appHeader = document.querySelector('.app-header p[style="color: gray; margin: 0;"]');
            const spoti = data.spotify;
            const activities = data.act;
    
            if (spoti && !activities) {
                appHeader.innerText = "Escuchando Spotify";
                spotifyPlayer.style.display = 'block';
                txt.style.display = 'block';
    
                document.getElementById('song-image').src = spoti.album_art_url;
                document.getElementById('song-title').innerText = spoti.song;
                document.getElementById('song-details').innerText = `${spoti.artist} - ${spoti.album}`;
            } else if (activities.length > 0) {
                const activityName = activities[0].name;
                appHeader.innerText = `Jugando a ${activityName}`;
    
                if (spoti === false){
                    spotifyPlayer.style.display = 'none';
                    txt.style.display = 'none';
           } else {
            spotifyPlayer.style.display = 'block';
                
            txt.style.display = 'block';
            
            document.getElementById('song-image').src = spoti.album_art_url;
            document.getElementById('song-title').innerText = spoti.song;
            document.getElementById('song-details').innerText = `${spoti.artist} - ${spoti.album}`;
           
                }   } else {
                appHeader.innerText = "No estoy haciendo nada";
                spotifyPlayer.style.display = 'none';
                txt.style.display = 'none';
            }
        })
        .catch(error => console.error('api ', error));
    
    }, 5000);
    
});
