let chars, particles, canvas, ctx, w, h, current;
const duration = 10000; //time loading text title
// let title = 'Happy Rikkeisoft 9th Anniversary & Rikkeisoft DaNang 5th Anniversary';
const line = [
    [ 'Happy Rikkeisoft', 'Rikkeisoft DaNang'],
    [ '9th Anniversary', '5th Anniversary']
];
let timeStart; // Time is begin render canvas
let firstRender = true; // Time is begin render canvas

function clone(data) {
    return JSON.parse(JSON.stringify(data))
}

var isBegin = false;
const bgMusic = new Audio('./audio/background.mp3');
function initAll() {
    if (!isBegin) {
        isBegin = true;

        // Music bacground
        // bgMusic.play();

        // Load title text
        initTitle();
        requestAnimationFrame(renderTitle);

        // Load small fire
        initFire();
        // DrawFire
        // drawFire(0.5, 0.5);
        // Remove Fire
        // setCoordsFire(0, 0)


        // Load fireworks
        music1();
    }
}

function music1() {
    const root = {
        "quality": "2",
        "shell": "Random",  // shellTypes
        "size": "1",
        "autoLaunch": false,
        "finale": false,
        "skyLighting": "2",
        "hideControls": false,
        "longExposure": false,
        "scaleFactor": 1
    };



    setTimeout(() => {
        store.state.config = clone(root);
        store.state.config.size = '3'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.9)
    }, 1000);

    setTimeout(() => {
        store.state.config = clone(root);
        store.state.config.size = '1'
        store.state.config.shell = 'Floral'
        simSpeed = 0.2
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.85, 0.9)
    }, 1500);
    setTimeout(() => {simSpeed = 1}, 2000);
}