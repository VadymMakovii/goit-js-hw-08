import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

populateTimeLine();

player.on('timeupdate', throttle(onVideoPlayed, 1000));

function onVideoPlayed(e) {
    const currentTime = e.seconds;
    localStorage.setItem(STORAGE_KEY, currentTime);
};

function populateTimeLine() {
    const playedTime = localStorage.getItem(STORAGE_KEY);
    
    if(playedTime) {
        player.setCurrentTime(playedTime ?? 0);
    };
};