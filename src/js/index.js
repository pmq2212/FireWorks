let chars, particles, canvas, ctx, w, h, current;
let duration = 9500; //time loading text title
// let title = 'Happy Rikkeisoft 9th Anniversary & Rikkeisoft DaNang 5th Anniversary';
let line = [
    [ 'Happy Rikkeisoft', 'Rikkeisoft DaNang'],
    [ '9th Anniversary', '5th Anniversary']
];
let fontTextMin = 100;
let fontTextMax = 150; // Front text
let spaceLine = 0.2; // Space between 2 line text
let timeStart; // Time is begin render canvas
let firstRender = true; // Time is begin render canvas
let cntRender = duration * line[0].length;
let dt = 50;

function clone(data) {
    return JSON.parse(JSON.stringify(data))
}

var isBegin = false;
const bgMusic = new Audio('./audio/background.mp3');

const delayStart = 1000;
function initAll() {
    if (!isBegin) {
        isBegin = true;
        document.getElementById('btn-play-overflow').remove();
        document.getElementById('btn-play').remove();

        // Music background
        setTimeout(() => {
            bgMusic.play();
            // Load title text
            initTitle();
            requestAnimationFrame(renderTitle);

            startFireWorks();

            middleFireWorks();

            // Music 3, 4
            let end_time;
            end_time = endFireWorks(delayStart + 165000);

            setTimeout(() => {
                // line = [['THANKS'], ['YOU']];
                // duration = 9000;
                // chars = [[]];
                // cntRender = duration * line[0].length
                // fontTextMax = 350;
                // dt = 20;
                // spaceLine = 0.3;
                // firstRender = true;
                // requestAnimationFrame(renderTitle);
                document.getElementById("container-end").style.display = "block";
            }, end_time + 1000);
        }, delayStart);
    }
}

window.addEventListener('keyup', ()=>{
    if (event.keyCode === 13) {
        initAll();
    }
});

const rootConfig = {
    "quality": "10",
    "shell": "Random",  // shellTypes
    "size": "2",
    "autoLaunch": false,
    "finale": false,
    "skyLighting": "2",
    "hideControls": false,
    "longExposure": false,
    "scaleFactor": 1
};

// scene music 1,2
function startFireWorks() {
    var hoand = delayStart;

    // DrawFire
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '0.5';
            store.state.config.shell = 'Crackle';
            simSpeed = 1;
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.2 * i, -0.1)
        }, hoand + i * 100);
    }

    hoand += 9000;
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '0.5';
            store.state.config.shell = 'Crackle';
            simSpeed = 1;
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.2 * i, -0.1)
        }, hoand + i * 100);
    }
    hoand += 5 * 1000;

    //5
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Crossette'
            simSpeed = 1
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0.0)
        }, hoand + i * 100 + 2000);
    }

    hoand += 5 * 1000;

    // 10
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Crossette'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.5)
    }, hoand);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Crossette'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.8, 0.5)
    }, hoand);

    hoand += 5 * 1000;

    // 15
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Strobe'
            simSpeed = 1
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.125 * i, 0)
        }, hoand);
    }
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '7'
            store.state.config.shell = 'Strobe'
            simSpeed = 1
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.2 + 0.2 * i, 0.8)
        }, hoand);
    }

    hoand += 5 * 1000;
    //20
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '9'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.8, 0.8)
    }, hoand);

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Strobe'
            simSpeed = 1
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0)
        }, hoand + 1000);
    }

    hoand += 5 * 1000;
    //25
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Crossette'
            simSpeed = 1
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0.3)
        }, hoand + 0 * 1000 + i * 100);
    }

    for (let i = 10; i > 5; i--) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Crossette'
            simSpeed = 1
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0.3)
        }, hoand + 2 * 1000 - i * 200);
    }

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Crossette'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.7)
    }, hoand);

    hoand += 5 * 1000;
    //30

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '9'
        store.state.config.shell = 'Ring';
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.25, 0.5)
    }, hoand);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '9'
        store.state.config.shell = 'Ring';
        simSpeed = 1;
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.75, 0.5)
    }, hoand);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crysanthemum'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        for (let i = 0; i < 5; i++) {
            shell1.launch(0.1 + 0.2 * i, 0.1)
        }
    }, hoand);

    // setTimeout(() => {
    //     store.state.config = clone(rootConfig);
    //     store.state.config.size = '3'
    //     store.state.config.shell = 'Crossette'
    //     simSpeed = 1
    //     const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
    //     for (let i = 0; i < 5 ; i++) {
    //         shell1.launch(0.1 + 0.2 *i, 0.8)
    //     }
    // }, hoand);
    //
    // initFire();
    // for (let i = 0; i <= 1; i += 0.1) {
    //     setTimeout(() => {
    //         // Load small fir
    //         drawFire(1-i, 0.6);
    //     }, hoand + i * 5000);
    // }
    // setTimeout(() => {
    //     setCoordsFire(0, 0)
    // }, hoand );

    hoand += 5 * 1000;
    //30

    for (let i = 5; i > 0; i--) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Palm'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0.3)
        }, hoand + 0 * 1000 + i * 100);
    }

    for (let i = 5; i < 10; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Palm'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0.3)
        }, hoand + 2 * 1000 - i * 200);
    }

    for (let i = 5; i > 0; i--) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Palm'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0.8)
        }, hoand + 0 * 1000 + i * 100);
    }

    for (let i = 5; i < 10; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Palm'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0.8)
        }, hoand + 2 * 1000 - i * 200);
    }

    hoand += 5 * 1000;
    //35

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '3'
            store.state.config.shell = 'Ghost'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.2 + 0.3 * i, 0.8)
        }, hoand);
    }

    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '6'
            store.state.config.shell = 'Ghost'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 + 0.25 * i, 0.1)
        }, hoand);
    }


    hoand += 5 * 1000;
    //40

    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '3'
            store.state.config.shell = 'Ghost'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.4 + 0.4 * i, 0.8)
        }, hoand);
    }

    for (let i = 0; i < 2; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '6'
            store.state.config.shell = 'Crackle'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.3 + 0.3 * i, 0.1)
        }, hoand);
    }

    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Crossette'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0)
        }, hoand + 0 * 1000 + i * 100);
    }


    hoand += 4 * 1000;
    //45

    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Random'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(Math.random(), Math.random())
        }, hoand + i * 100);
    }


// ========================================================================
    hoand += 9 * 1000 + 500;
    // 55
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crysanthemum'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.9)
        shell1.launch(0.2, 0.9)
        shell1.launch(0.3, 0.9)
    }, hoand);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crysanthemum'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.4)
        shell1.launch(0.5, 0.4)
        shell1.launch(0.6, 0.4)
    }, hoand);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '3'
        store.state.config.shell = 'Crossette'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.7, 0.1)
        shell1.launch(0.8, 0.1)
        shell1.launch(0.9, 0.1)
        shell1.launch(1, 0.1)
    }, hoand);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Ring'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.8, 0.9)
    }, hoand);

    hoand += 1000;
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crysanthemum'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0)
        shell1.launch(0.2, 0)
        shell1.launch(0.3, 0)
    }, hoand);

    // 60
    hoand += 4000;
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '9'
        store.state.config.shell = 'Ring'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.8)
    }, hoand + 1);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '2'
        store.state.config.shell = 'Crossette'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.2)
        shell1.launch(0.6, 0.2)
    }, hoand + 2);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Crossette'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.9, 0.6)
    }, hoand + 3);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Crossette'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.6)
    }, hoand + 3);

    //63
    hoand += 4000;
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Crossette'
            simSpeed = 2
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0.1 * i)
        }, hoand + i * 100);
    }
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Crossette'
            simSpeed = 2
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(1 - 0.1 * i, 0.1 * i)
        }, hoand + i * 100);
    }

    //67
    hoand += 4000;
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crackle'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.6, 0)
        shell1.launch(0.55, 0)
        shell1.launch(0.4, 0)
        shell1.launch(0.45, 0)
    }, hoand);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crackle'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.2)
        shell1.launch(0.7, 0.2)
    }, hoand);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crackle'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.4)
        shell1.launch(0.8, 0.4)
    }, hoand);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crackle'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.6)
        shell1.launch(0.9, 0.6)
    }, hoand);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Willow'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.7)
    }, hoand);
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Random'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(Math.random(), Math.random())
        }, hoand + 1000 + i * 100);
    }

    //71
    // hoand += 4000;
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Crysanthemum'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            if (i == 2 || i == 5 || i == 8) {

            } else shell1.launch(0.1 * i, 0);
        }, hoand - 1000);
    }
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Horse Tail'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.7)
    }, hoand);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Horse Tail'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.7)
    }, hoand);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Horse Tail'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.8, 0.7)
    }, hoand);

    // 75
    hoand += 4000;
    for (let i = 0; i <= 10; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Crysanthemum'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(0.1 * i, 0);
        }, hoand - 1000 + i * 100);
    }

    for (let i = 0; i <= 10; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Ghost'
            simSpeed = 1.5
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(1 - 0.1 * i, 0.6);
        }, hoand + i * 100);
    }

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Ring'
        simSpeed = 1.5
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.9);
        shell1.launch(0.7, 0.9);
    }, hoand + 1000);

    hoand += 4000;
    //80

    for (let i = 0; i <= 6; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Falling Leaves'
            simSpeed = 2
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(1 - 0.12 * i, 0.1 * i)
        }, hoand + i * 100);
    }

    hoand += 5000;
    //85
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Crysanthemum'
        simSpeed = 2
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.8)
    }, hoand);
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '6'
        store.state.config.shell = 'Crysanthemum'
        simSpeed = 2
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.7, 0.8)
    }, hoand);
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            store.state.config = clone(rootConfig);
            store.state.config.size = '1'
            store.state.config.shell = 'Ghost'
            simSpeed = 2
            const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
            shell1.launch(Math.random(), Math.random())
        }, hoand + i * 100);
    }
}

// scene music 3
function middleFireWorks() {
// ======================================================================================
// của mình bắt đầu từ 1p30 đến 2p36s
    // nhạc khá bóc nên cần cái gì đó đệm nhanh
    /*màu có vẽ hơi random*/
    /*Crackle*/
    /*Crossette*/ //hiệu ứng lạ khá đẹp
    /*Crysanthemum*/ // đổi màu khá đẹp
    /*Falling Leaves*/ //xỏa hiệu ứng nhè nhẹ đẹp
    /*Floral*/ // màu chủ đạo đc nè
    /*Ghost*/ // 2 màu khá đẹp
    /*Palm*/ // màu vàng nhưng khá đẹp hơn cái trước
    /*Ring*/ //màu hồng nổ vòng tròn
    /*Strobe*/ //màu xanh nổ to có rớt nhẹ
    /*Willow*/ //màu vàng nổ to, pháo k sặc sỡ.
    /*setTimeout(() => {
      store.state.config = clone(rootConfig);
      store.state.config.size = '2'
      store.state.config.shell = 'Random'
      simSpeed = 1
      const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
      shell1.launch(0.1, 0.8)
      shell1.launch(0.2, 0.8)
      shell1.launch(0.3, 0.8)
      shell1.launch(0.4, 0.8)
      shell1.launch(0.5, 0.8)
    }, 1000);

    setTimeout(() => {
      store.state.config = clone(rootConfig);
      store.state.config.size = '2'
      store.state.config.shell = 'Crysanthemum'
      simSpeed = 1
      const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
      shell1.launch(0.5, 0.5)
    }, 6000);*/

    var time = delayStart + 97 * 1000;
    // var time = 1000;

    /*1 hiệu ứng*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.1)
    }, time + 1000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.2)
    }, time + 1150);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.3)
    }, time + 1300);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.4)
    }, time + 1300);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.5)
    }, time + 1450);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.6, 0.6)
    }, time + 1600);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.7, 0.7)
    }, time + 1750);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.8, 0.8)
    }, time + 1900);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.9, 0.9)
    }, time + 2050);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Floral'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.6)
    }, time + 2100);

    /*1 hiệu ứng*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.9, 0.1)
    }, time + 5000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.8, 0.2)
    }, time + 5150);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.7, 0.3)
    }, time + 5300);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.6, 0.4)
    }, time + 5450);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.5)
    }, time + 5600);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.6)
    }, time + 5850);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.7)
    }, time + 6000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.8)
    }, time + 6150);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.9)
    }, time + 6300);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Floral'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.9, 0.6)
    }, time + 6450);

    /*1 hiệu ứng*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crysanthemum'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.1)
        shell1.launch(0.7, 0.1)
    }, time + 8500);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.7)
        shell1.launch(0.5, 0.7)
        shell1.launch(0.9, 0.7)
    }, time + 8700);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crossette'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.1)
        shell1.launch(0.7, 0.1)
    }, time + 8900);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ghost'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.7)
    }, time + 9200);

    /*1 hieu ung*/

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Palm'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.1)
        shell1.launch(0.3, 0.1)
        shell1.launch(0.5, 0.1)
        shell1.launch(0.7, 0.1)
        shell1.launch(0.9, 0.1)
    }, time + 13200);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.7)
        shell1.launch(0.5, 0.7)
        shell1.launch(0.9, 0.7)
    }, time + 8700);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crossette'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.1)
        shell1.launch(0.7, 0.1)
    }, time + 8900);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ghost'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.8)
    }, time + 9200);

    /*1 hieu ung*/

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Palm'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.1)
        shell1.launch(0.3, 0.1)
        shell1.launch(0.5, 0.1)
        shell1.launch(0.7, 0.1)
        shell1.launch(0.9, 0.1)
    }, time + 13200);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Floral'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.6)
        shell1.launch(0.8, 0.6)
    }, time + 13500);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Crysanthemum'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.7)
    }, time + 15500);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.1)
        shell1.launch(0.3, 0.1)
        shell1.launch(0.7, 0.1)
        shell1.launch(0.9, 0.1)
    }, time + 15000);

    /*1 hieu ung*/

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.9)
    }, time + 18000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.7)
        shell1.launch(0.7, 0.7)
    }, time + 18500);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.5)
        shell1.launch(0.7, 0.5)
    }, time + 19000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.3)
    }, time + 19500);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ghost'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.9, 0.5)
    }, time + 20000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.5)
    }, time + 20000);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.1)
        shell1.launch(0.3, 0.1)
        shell1.launch(0.4, 0.1)
        shell1.launch(0.5, 0.1)
        shell1.launch(0.9, 0.1)
    }, time + 21000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Falling Leaves'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.1)
        shell1.launch(0.4, 0.1)
        shell1.launch(0.6, 0.1)
        shell1.launch(0.8, 0.1)
    }, time + 23000);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ghost'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.7)
        shell1.launch(0.9, 0.7)
    }, time + 24000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.1)
        shell1.launch(0.9, 0.1)
    }, time + 25000);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.5)
        shell1.launch(0.9, 0.5)
    }, time + 26000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.5)
        shell1.launch(0.8, 0.5)
    }, time + 26500);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.5)
        shell1.launch(0.7, 0.5)
    }, time + 27000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.5)
        shell1.launch(0.6, 0.5)
    }, time + 27500);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.5)
    }, time + 28000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Floral'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.7)
        shell1.launch(0.6, 0.7)
    }, time + 29000);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.7)
        shell1.launch(0.5, 0.7)
        shell1.launch(0.9, 0.7)
    }, time + 32000);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.9)
    }, time + 35000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.8)
        shell1.launch(0.6, 0.8)
    }, time + 36000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.7)
        shell1.launch(0.7, 0.7)
    }, time + 37000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.6)
        shell1.launch(0.8, 0.6)
    }, time + 38000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.5)
        shell1.launch(0.9, 0.5)
    }, time + 39000);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Falling Leaves'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.5)
        shell1.launch(0.2, 0.5)
        shell1.launch(0.3, 0.5)
        shell1.launch(0.4, 0.5)
        shell1.launch(0.5, 0.5)
        shell1.launch(0.6, 0.5)
        shell1.launch(0.7, 0.5)
        shell1.launch(0.8, 0.5)
        shell1.launch(0.9, 0.5)
    }, time + 41000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Floral'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.5)
        shell1.launch(0.7, 0.5)
    }, time + 42000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Strobe'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.1)
        shell1.launch(0.3, 0.1)
        shell1.launch(0.5, 0.1)
        shell1.launch(0.7, 0.1)
        shell1.launch(0.9, 0.1)
    }, time + 44000);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.1)
    }, time + 47000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.1)
    }, time + 47500);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.1)
    }, time + 48000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.1)
    }, time + 48500);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.1)
    }, time + 49000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.6, 0.1)
    }, time + 49500);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.7, 0.1)
    }, time + 50000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.8, 0.1)
    }, time + 50500);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.9, 0.1)
    }, time + 51000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Falling Leaves'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.8)
        shell1.launch(0.4, 0.8)
        shell1.launch(0.5, 0.8)
        shell1.launch(0.6, 0.8)
    }, time + 52000);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.9, 0.5)
    }, time + 53000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.8, 0.5)
    }, time + 54000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.7, 0.5)
    }, time + 55000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.6, 0.5)
    }, time + 56000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.5, 0.5)
    }, time + 57000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.5)
    }, time + 58000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.3, 0.5)
    }, time + 59000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.5)
    }, time + 60000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Willow'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.1, 0.5)
    }, time + 61000);

    /*1 hieu ung*/
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.8)
        shell1.launch(0.6, 0.8)
    }, time + 61000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Ring'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.4, 0.4)
        shell1.launch(0.6, 0.4)
    }, time + 62000);

    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = '1'
        store.state.config.shell = 'Floral'
        simSpeed = 1
        const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(0.2, 0.6)
        shell1.launch(0.8, 0.6)
    }, time + 63000);

    /*Crossette*/ //hiệu ứng lạ khá đẹp
    /*Crysanthemum*/ // đổi màu khá đẹp
    /*Falling Leaves*/ //xỏa hiệu ứng nhè nhẹ đẹp
    /*Floral*/ // màu chủ đạo đc nè
    /*Ghost*/ // 2 màu khá đẹp
    /*Palm*/ // màu vàng nhưng khá đẹp hơn cái trước
    /*Ring*/ //màu hồng nổ vòng tròn
    /*Strobe*/ //màu xanh nổ to có rớt nhẹ
    /*Willow*/ //màu vàng nổ to, pháo k sặc sỡ.

    /*setTimeout(() => {
      store.state.config = clone(rootConfig);
      store.state.config.size = '0.5'
      store.state.config.shell = 'Crossette'
      simSpeed = 1
      const shell1 = new Shell(shellFromConfig(shellSizeSelector()));
      shell1.launch(0.1, 0.3)
      shell1.launch(0.3, 0.3)
      shell1.launch(0.5, 0.3)
      shell1.launch(0.7, 0.3)
      shell1.launch(0.9, 0.3)
    }, 1500);
    setTimeout(() => {simSpeed = 1}, 2000);*/
}

function endFireWorks(time_start = 0) {
    const ar_shellTypes = [
        'Crackle',
        'Crossette',        //hiệu ứng lạ khá đẹp
        'Crysanthemum',     // đổi màu khá đẹp
        'Falling Leaves',   //xỏa hiệu ứng nhè nhẹ đẹp
        'Floral',           // màu chủ đạo đc nè
        'Ghost',            // màu chủ đạo đc nè
        'Horse Tail',       // 2 màu khá đẹp
        'Palm',             // màu vàng nhưng khá đẹp hơn cái trước
        'Ring',             //màu hồng nổ vòng tròn
        'Strobe',           //màu xanh nổ to có rớt nhẹ
        'Willow'];          //màu vàng nổ to, pháo k sặc sỡ.


    let ar_shell = [

        ['Crackle','Crackle','Crackle'],


        ['Crossette','Crossette','Crossette','Crossette','Crossette','Strobe','Crossette','Crossette','Crossette','Crossette','Crossette'],

        ['Palm','Palm','Palm','Palm','Palm','Strobe','Palm','Palm','Palm','Palm','Palm'],


        ['Ring','Ring','Ring'],
        ['Crackle','Crackle','Crackle','Crackle','Crackle','Crackle'],


        ['Crackle','Strobe','Crackle'],
        ['Crackle','Crackle','Strobe'],
        ['Crossette','Crackle','Crackle','Crossette'],
        ['Crysanthemum','Crossette','Crossette','Crysanthemum'],
        ['Crackle','Crossette','Crackle'],
        ['Ring','Ring'],
        ['Crysanthemum','Crysanthemum','Crysanthemum','Crysanthemum'],
        ['Horse Tail','Horse Tail','Horse Tail','Horse Tail'],
        ['Crackle','Crackle','Crackle','Crackle','Crackle','Crackle','Crackle','Crackle'],
        ['Crossette','Crossette','Crossette','Crossette','Crossette','Crossette','Crossette','Crossette'],


        ['Crackle','Crossette','Crackle'],               // Trai tim
        ['Crackle','Ring','Crackle'],
        ['Crackle','Crackle'],
        ['Crossette'],
        ['Crackle','Crossette','Crackle','Crackle','Crossette','Crackle'],
        ['Crackle','Ring','Crackle','Crackle','Ring','Crackle'],
        ['Crackle','Crackle','Crackle','Crackle'],
        ['Crossette','Crossette'],

        ['Crossette'],                               // Ngoi nha
        ['Crossette','Crossette'],
        ['Crossette','Palm','Crossette'],
        ['Crossette','Crossette'],
        ['Crossette','Crossette','Crossette'],

        ['Crossette','Crossette'],
        ['Crossette','Crossette','Crossette','Crossette'],
        ['Crossette','Palm','Crossette','Crossette','Palm','Crossette'],
        ['Crossette','Crossette','Crossette','Crossette'],
        ['Crossette','Crossette','Crossette','Crossette','Crossette','Crossette'],


        ['Ring','Ring','Ring'],
        ['Crackle','Crackle','Crackle','Crackle','Crackle','Crackle'],

        ['Crossette','Crossette','Crossette','Crossette','Crossette','Crossette'],      //R
        ['Crossette','Crossette','Crossette','Crossette','Crossette'],
        ['Crossette','Crossette','Crossette','Crossette','Crossette'],
        ['Crossette','Crossette','Crossette','Crossette','Crossette'],
        ['Crossette','Crossette','Crossette','Crossette','Crossette'],
        //

        ['Crossette','Crossette'],
        ['Crossette','Crossette'],
        ['Crossette','Crossette'],
        ['Crossette','Crossette'],
        ['Crossette','Crossette'],
        ['Ring'],


        ['Ring','Ring'],
        ['Ring','Ring'],
        ['Ring','Ring'],
        ['Ring','Ring'],
        ['Ring','Ring'],
        ['Ring'],

        ['Crysanthemum','Crysanthemum','Crysanthemum','Crysanthemum'],
        ['Ring','Ring'],
        ['Crackle','Crackle','Crackle','Crackle'],
        ['Crossette','Crossette','Crossette'],
        ['Crackle','Crackle','Crackle'],
        ['Palm','Palm'],
        ['Ring','Ring'],
        ['Falling Leaves','Falling Leaves','Falling Leaves','Falling Leaves'],
        ['Horse Tail','Horse Tail','Horse Tail','Horse Tail'],
        ['Crysanthemum','Crysanthemum','Crysanthemum','Crossette','Crossette','Crysanthemum','Crysanthemum','Crysanthemum'],
        ['Ring','Ring'],
        ['Palm','Palm'],
        ['Crackle','Crackle','Crackle'],
        ['Strobe','Strobe','Strobe'],

        ['Strobe'],
        ['Strobe','Strobe'],
        ['Strobe','Strobe'],
        ['Strobe','Ring','Strobe'],
        ['Strobe','Strobe'],
        ['Strobe','Strobe'],
        ['Strobe'],

        ['Strobe','Strobe'],
        ['Ring'],

        ['Strobe','Strobe','Strobe','Strobe'],
        ['Ring','Ring'],

        ['Crossette','Crossette'],
        ['Palm','Strobe','Palm'],
        ['Strobe','Strobe'],
        ['Strobe','Strobe','Strobe'],
        ['Crysanthemum','Ring','Ring','Crysanthemum'],
        ['Ring','Crysanthemum','Crysanthemum','Ring'],
        ['Strobe','Strobe','Strobe'],
        ['Crossette','Crossette'],
        ['Palm','Strobe','Palm'],
        ['Ring','Ring'],
        ['Crysanthemum'],


        ['Crysanthemum','Crysanthemum','Crysanthemum','Crysanthemum','Crysanthemum','Crysanthemum'],
        ['Ring','Ring','Ring','Ring','Ring','Ring'],
        ['Ring','Ring','Ring','Ring','Ring','Ring'],
        ['Strobe','Strobe','Strobe','Strobe','Strobe','Strobe'],


        ['Crossette','Crossette','Crossette', 'Crossette','Crossette','Crossette', 'Crossette','Crossette'],      //R
        ['Crossette','Crossette', 'Crossette','Ring','Crossette', 'Crossette','Crossette'],
        ['Crossette','Crossette', 'Crossette','Crossette', 'Crossette','Crossette'],
        ['Crossette','Crossette', 'Crossette', 'Crossette','Crossette'],
        ['Crossette','Crossette', 'Crossette','Crossette'],



    ]

    let ar_position = [

        [[0.25,0.65],[0.5,0.8],[0.75,0.65]],

        [[0.1,0.4],[0.18,0.4],[0.26,0.4],[0.34,0.4],[0.42,0.4],[0.5,0.7],[0.58,0.4],[0.66,0.4],[0.74,0.4],[0.82,0.4],[0.9,0.4]],

        [[0.1,0.4],[0.18,0.4],[0.26,0.4],[0.34,0.4],[0.42,0.4],[0.5,0.75],[0.58,0.4],[0.66,0.4],[0.74,0.4],[0.82,0.4],[0.9,0.4]],

        [[0.2,0.8],[0.5,0.8],[0.8,0.8]],
        [[0.1,0.35],[0.3,0.35],[0.4,0.35],[0.6,0.35],[0.7,0.35],[0.9,0.35]],


        [[0.15,0.6],[0.5,0.8],[0.85,0.6]],
        [[0.25,0.6],[0.5,0.8],[0.75,0.6]],
        [[0.15,0.7],[0.35,0.8],[0.65,0.8],[0.85,0.7]],
        [[0.15,0.4],[0.35,0.4],[0.65,0.4],[0.85,0.4]],
        [[0.25,0.65],[0.5,0.65],[0.75,0.65]],
        [[0.35,0.75],[0.65,0.75]],
        [[0.15,0.4],[0.35,0.4],[0.65,0.4],[0.85,0.4]],
        [[0.2,0.9],[0.4,0.9],[0.6,0.9],[0.8,0.9]],
        [[0.83,0.2],[0.73,0.2],[0.63,0.2],[0.53,0.2],[0.43,0.2],[0.33,0.2],[0.23,0.2],[0.13,0.2]],
        [[0.1,0.8],[0.2,0.8],[0.3,0.8],[0.4,0.8],[0.5,0.8],[0.6,0.8],[0.7,0.8],[0.8,0.8]],


        [[0.4,0.7],[0.5,0.55],[0.6,0.7]],                // Trai tim
        [[0.35,0.5],[0.5,0.45],[0.65,0.5]],
        [[0.39,0.3],[0.61,0.3]],
        [[0.5,0.1]],
        [[0.1,0.8],[0.2,0.7],[0.3,0.8],[0.65,0.8],[0.75,0.7],[0.85,0.8]],
        [[0.05,0.6],[0.2,0.6],[0.35,0.6],[0.6,0.6],[0.75,0.6],[0.9,0.6]],
        [[0.1,0.4],[0.3,0.4],[0.65,0.4],[0.85,0.4]],
        [[0.2,0.2],[0.75,0.2]],

        [[0.5,0.8]],                             // Ngoi nha
        [[0.45,0.6],[0.55,0.6]],
        [[0.4,0.5],[0.5,0.5],[0.6,0.5]],
        [[0.45,0.3],[0.55,0.3]],
        [[0.45,0.2],[0.5,0.2],[0.55,0.2]],

        [[0.2,0.8],[0.8,0.8]],
        [[0.15,0.6],[0.25,0.6],[0.75,0.6],[0.85,0.6]],
        [[0.1,0.5],[0.2,0.5],[0.3,0.5],[0.7,0.5],[0.8,0.5],[0.9,0.5]],
        [[0.15,0.3],[0.25,0.3],[0.75,0.3],[0.85,0.3]],
        [[0.15,0.2],[0.2,0.2],[0.25,0.2],[0.75,0.2],[0.8,0.2],[0.85,0.2]],

        [[0.25,0.8],[0.5,0.8],[0.75,0.8]],
        [[0.15,0.35],[0.35,0.35],[0.4,0.35],[0.6,0.35],[0.65,0.35],[0.85,0.35]],

        [[0.1,0.8],[0.2,0.8],[0.3,0.8],[0.5,0.8],[0.7,0.8],[0.85,0.8]],
        [[0.1,0.65],[0.25,0.65],[0.5,0.65],[0.7,0.65],[0.8,0.65]],
        [[0.1,0.5],[0.2,0.5],[0.5,0.5],[0.7,0.5],[0.75,0.5]],              // R I K
        [[0.1,0.35],[0.25,0.35],[0.5,0.35],[0.7,0.35],[0.8,0.35]],
        [[0.1,0.25],[0.3,0.25],[0.5,0.25],[0.7,0.25],[0.85,0.25]],

        //
        [[0.1,0.9],[0.9,0.9]],
        [[0.18,0.8],[0.82,0.8]],
        [[0.26,0.7],[0.74,0.7]],
        [[0.34,0.6],[0.66,0.6]],
        [[0.42,0.5],[0.58,0.5]],
        [[0.5,0.2]],

        [[0.1,0.2],[0.9,0.2]],
        [[0.18,0.5],[0.82,0.5]],
        [[0.26,0.6],[0.74,0.6]],
        [[0.34,0.7],[0.66,0.7]],
        [[0.42,0.8],[0.58,0.8]],
        [[0.5,0.9]],

        [[0.2,0.9],[0.4,0.9],[0.6,0.9],[0.8,0.9]],
        [[0.1,0.2],[0.9,0.2]],
        [[0.2,0.9],[0.4,0.9],[0.6,0.9],[0.8,0.9]],
        [[0.4,0.8],[0.5,0.8],[0.6,0.8]],
        [[0.4,0.8],[0.5,0.8],[0.6,0.8]],
        [[0.1,0.2],[0.9,0.2]],
        [[0.1,0.2],[0.9,0.2]],
        [[0.2,0.9],[0.4,0.9],[0.6,0.9],[0.8,0.9]],
        [[0.2,0.9],[0.4,0.9],[0.6,0.9],[0.8,0.9]],
        [[0.1,0.4],[0.2,0.4],[0.3,0.4],[0.45,0.4],[0.55,0.4],[0.7,0.4],[0.8,0.4],[0.9,0.4]],
        [[0.1,0.2],[0.9,0.2]],
        [[0.1,0.2],[0.9,0.2]],
        [[0.4,0.3],[0.5,0.3],[0.6,0.3]],
        [[0.4,0.6],[0.5,0.6],[0.6,0.6]],

        [[0.5,0.8]],
        [[0.4,0.6],[0.6,0.6]],
        [[0.35,0.5],[0.65,0.5]],
        [[0.25,0.4],[0.5,0.4],[0.75,0.4]],
        [[0.35,0.3],[0.65,0.3]],
        [[0.4,0.2],[0.6,0.2]],
        [[0.5,0.1]],

        [[0.4,0.8],[0.6,0.8]],
        [[0.5,0.6]],

        [[0.1,0.8],[0.3,0.8],[0.7,0.8],[0.9,0.8]],
        [[0.2,0.6],[0.8,0.6]],


        [[0.1,0.2],[0.9,0.2]],
        [[0.4,0.5],[0.5,0.5],[0.6,0.5]],
        [[0.1,0.7],[0.9,0.7]],
        [[0.3,0.8],[0.5,0.8],[0.7,0.8]],
        [[0.2,0.9],[0.4,0.9],[0.6,0.9],[0.8,0.9]],
        [[0.3,0.4],[0.5,0.4],[0.7,0.4],[0.9,0.4]],
        [[0.4,0.8],[0.5,0.8],[0.6,0.8]],
        [[0.1,0.2],[0.9,0.2]],
        [[0.4,0.6],[0.5,0.6],[0.6,0.6]],
        [[0.1,0.7],[0.9,0.7]],
        [[0.5,0.5]],

        [[0.2,0.3],[0.2,0.3],[0.2,0.3],[0.2,0.3],[0.2,0.3],[0.2,0.3]],
        [[0.4,0.8],[0.4,0.8],[0.4,0.8],[0.4,0.8],[0.4,0.8],[0.4,0.8]],
        [[0.6,0.8],[0.6,0.8],[0.6,0.8],[0.6,0.8],[0.6,0.8],[0.6,0.8]],
        [[0.8,0.3],[0.8,0.3],[0.8,0.3],[0.8,0.3],[0.8,0.3],[0.8,0.3]],


        [[0.05,0.8],[0.2,0.8],[0.3,0.8],[0.4,0.7],[0.5,0.55],[0.6,0.7],[0.75,0.8],[0.9,0.8]],
        [[0.05,0.65],[0.25,0.65],[0.35,0.5],[0.5,0.45],[0.65,0.5],[0.75,0.65],[0.85,0.65]],
        [[0.05,0.5],[0.2,0.5],[0.39,0.3],[0.61,0.3],[0.75,0.5],[0.8,0.5]],              // R I K
        [[0.05,0.35],[0.25,0.35],[0.5,0.1],[0.75,0.35],[0.85,0.35]],
        [[0.05,0.25],[0.3,0.25],[0.75,0.25],[0.9,0.25]],

    ]

    let ar_time = [

        [100,0,0],

        [1900,0,0,0,0,0,0,0,0,0,0],

        [3000,0,0,0,0,0,0,0,0,0,0],


        [2000,0,0],
        [500,0,0,0,0,0],

        [2500,0,0],
        [1000,0,0],
        [2000,0,0,0],
        [1500,0,0,0],
        [500,0,0],
        [500,0],
        [1000,0,0,0],
        [2000,0,0,0],
        [2000,200,400,600,800,1000,1200,1400],
        [1500,200,400,600,800,1000,1200,1400],
        //
        [3500,0,0],         // trai tim
        [100,0,0],
        [100,0],
        [100],

        [2000,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0],
        [100,0],

        [1500],     // Ngoi nha
        [100,0],
        [100,0,0],
        [100,0],
        [100,0,0],
        [1000,0],
        [100,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0],
        [100,0,0,0,0,0],

        [2000,0,0],
        [500,0,0,0,0,0],

        [2000,0,0,0,0,0], //R I K
        [100,0,0,0,0],
        [100,0,0,0,0],
        [100,0,0,0,0],
        [100,0,0,0,0],
        //


        //
        [1000,0],
        [200,0],
        [200,0],
        [200,0],
        [200,0],
        [200],

        [1500,0],
        [200,0],
        [200,0],
        [200,0],
        [200,0],
        [200],

        [3000,0,0,0],
        [1000,0],
        [500,0,0,0],
        [500,0,0],
        [500,0,0],
        [1000,0],
        [500,0],
        [300,0,0,0],
        [300,0,0,0],
        [1000,0,0,500,500,0,0,0],
        [1000,0],
        [1000,0],
        [1000,0,0],
        [800,0,0],


        [1000],
        [300,0],
        [300,0],
        [300,0,0],
        [100,0],
        [100,0],
        [100],

        [1000,0],
        [100],

        [2000,0,0,0],
        [100,0],

        [1000,0],
        [500,0,0],
        [300,0],
        [500,0,0],
        [800,0,0,0],
        [800,0,0,0],
        [200,0,0],
        [200,0],
        [200,0,0],
        [500,0],
        [1000],

        [2000,300,600,900,1200,1500],
        [50,300,600,900,1200,1500],
        [50,300,600,900,1200,1500],
        [50,300,600,900,1200,1500],


        [4000,0,0,0,0,0,0,0], //R I K
        [100,0,0,0,0,0,0],
        [100,0,0,0,0,0],
        [100,0,0,0,0],
        [100,0,0,0],

        //
    ]

    let ar_size = [

        [0,3,0],

        [0,0,0,0,0,6,0,0,0,0,0],

        [0,0,0,0,0,6,0,0,0,0,0],

        [2,2,2],
        [0,0,0,0,0,0,0,0],

        [0,0,0],
        [0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0],
        [3,3],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],

        [0,0,0],
        [0,4,0],
        [0,0],
        [0],
        [0,0,0,0,0,0],
        [0,4,0,0,4,0],
        [0,0,0,0],
        [0,0],

        [0],        // Ngoi nha
        [0,0],
        [0,0,0],
        [0,0],
        [0,0,0],
        [0,0],
        [0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0],
        [0,0,0,0,0,0],

        [2,2,2],
        [0,0,0,0,0,0,0,0],

        [0,0,0,0,0,0],  //R I K
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],

        //
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [6],
        //
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [0,0],
        [6],

        [0,0,0,0],
        [0,0],
        [0,0,0,0],
        [0,3,0],
        [0,0,0],
        [0,0],
        [3,3],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,3,0,0,3,0,0],
        [3,3],
        [0,0],
        [0,3,0],
        [0,3,0],

        [0],
        [0,0],
        [0,0],
        [0,6,0],
        [0,0],
        [0,0],
        [0],

        [0,0],
        [6],

        [0,0,0,0],
        [5,5],

        [0,0],
        [0,3,0],
        [0,0],
        [0,3,0],
        [0,0,0,0],
        [0,0,0,0],
        [3,0,3],
        [0,0],
        [0,3,0],
        [4,4],
        [4],

        [0,0,0,0,0,3],
        [0,0,0,0,0,3],
        [0,0,0,0,0,3],
        [0,0,0,0,0,3],

        [0,0,0,0,0,0,0,0],  //R I K
        [0,0,0,4,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0],


    ]

    let length_ar_shell = ar_shell.length;
    let time_run = time_start;
    for (let i = 0; i < length_ar_shell; i++) {
        for (let j = 0; j < ar_shell[i].length; j++) {
            let size = ar_size[i][j];
            time_run = time_start;
            if (ar_time[i][j] != 0) {
                if (j == 0) {
                    time_start += ar_time[i][j];
                }
                time_run += ar_time[i][j];
            }
            if (size != 0) {
                fireRun(ar_shell[i][j], ar_position[i][j][0], ar_position[i][j][1], time_run, size);
            } else {
                fireRun(ar_shell[i][j], ar_position[i][j][0], ar_position[i][j][1], time_run);
            }

        }
    }

    return time_start;

}

function fireRun(shell = "Random", x = 0.5, y = 0.5, time = 0, size = 1, speed = 1.3) {
    setTimeout(() => {
        store.state.config = clone(rootConfig);
        store.state.config.size = size;
        store.state.config.shell = shell;
        simSpeed = speed;
        let shell1 = new Shell(shellFromConfig(shellSizeSelector()));
        shell1.launch(x, y);
    }, time);
}
