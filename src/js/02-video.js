import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const PLAYER_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onUpdateTime, 1000));

function onUpdateTime(timeupdate) {
  localStorage.setItem(PLAYER_KEY, timeupdate.seconds);
}

const currentTime = localStorage.getItem(PLAYER_KEY);

player.setCurrentTime(currentTime);