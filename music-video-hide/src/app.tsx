const HIDDEN_SELECTORS = [
    '.main-nowPlayingView-section',
    '[data-testid="video-player-npv"]',
    '.main-trackInfo-xsmallBadges',
    '.x-music-video',
];

function hide() {
    HIDDEN_SELECTORS.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            (el as HTMLElement).style.display = 'none';
        });
    });

    (document.querySelector('.main-watchFeed-contentWrapper') as HTMLElement)
        ?.style.setProperty('--marquee-width', '0px');
}

//TODO
//hide the player
//hide the switching button
//make album cover the default

async function main() {
    hide();
    new MutationObserver(hide).observe(document.body, { childList: true, subtree: true });
}

export default main;