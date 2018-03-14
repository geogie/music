//let和const都是es5，es6新版本的js语言规范出来的定义，在这以前定义一个变量只能用var。let和const都是为了弥补var的一些缺陷而新设计出来的
docute.init({
    landing: 'music2.html',
    plugins: [
        player()
    ]
});

function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer1();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + (i + 1)]) {
            window['ap' + (i + 1)].destroy();
        }
    }
}

function aplayer1 () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer1'),
        theme: '#F57F17',
        lrc: 3,
        audio: [
            {
                name: '不要说话',
                artist: '陈奕迅合集',
                url: './不要说话-陈奕迅.mp3',
                cover: './不要说话-陈奕迅.jpg',
                lrc: './不要说话-陈奕迅.lrc',
                theme: '#ebd0c2'
            }, {
            name: '光るなら',
            artist: 'Goose house',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/hikarunara.lrc',
            theme: '#ebd0c2'
        }, {
            name: 'トリカゴ',
            artist: 'XX:me',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/darling.lrc',
            theme: '#46718b'
        }, {
            name: '前前前世',
            artist: 'RADWIMPS',
            url: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.mp3',
            cover: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.jpg',
            lrc: 'https://moeplayer.b0.upaiyun.com/aplayer/yourname.lrc',
            theme: '#505d6b'
        }]
    });
}