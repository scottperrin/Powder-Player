import alt from '../../alt'
import _ from 'lodash';
import {
    ipcRenderer
}
from 'electron';

class PlayerActions {
    constructor() {
        this.generateActions(
            'play',
            'pause',
            'stop',
            'stopped',


            'playing',
            'uiShown',
            'position',
            'buffering',
            'seekable',
            'time',
            'length',
            'scrobble',
            'scrobbleState',

            'fullscreen',

            'metaUpdate',
            'wcjsInit',
            'close',
            'open',
            
            'humanTime'
        );
    }

    toggleFullscreen(state) {
        document.querySelector(".canvas-holder > div:first-of-type").style.display = 'none';
        _.delay(() => {
            document.querySelector(".canvas-holder > div:first-of-type").style.display = 'block';
        }, 1000);
        this.dispatch();
        ipcRenderer.send('app:fullscreen', state);
        this.actions.fullscreen(state);
    }
}


export
default alt.createActions(PlayerActions);