var wavesurfer = Object.create(WaveSurfer);
var wavesurfer2 = Object.create(WaveSurfer);
var wavesurfer3 = Object.create(WaveSurfer);
var wavesurfer4 = Object.create(WaveSurfer);

$(document).ready(function(){ 
    wavesurfer.init({
        container: document.querySelector('#wave'),
        height: 100,
        pixelRation: 1,
        normalize: true,
        waveColor: 'blue',
        progressColor: 'grey'
    });

    wavesurfer2.init({
        container: document.querySelector('#wave2'),
        height: 100,
        pixelRation: 1,
        normalize: true,
        waveColor: 'blue',
        progressColor: 'grey'
    });
    wavesurfer3.init({
        container: document.querySelector('#wave3'),
        height: 100,
        pixelRation: 1,
        normalize: true,
        waveColor: 'blue',
        progressColor: 'grey'
    });
    wavesurfer4.init({
        container: document.querySelector('#wave4'),
        height: 100,
        pixelRation: 1,
        normalize: true,
        waveColor: 'blue',
        progressColor: 'grey'
    });
    wavesurfer.load('../../images/one.mp3');
    wavesurfer2.load('../../images/paradise.mp3');
    wavesurfer3.load('../../images/one.mp3');
    wavesurfer4.load('../../images/paradise.mp3');

    $('#playdaft').click(function () { wavesurfer.playPause(); });
    $('#playmassive').click(function () { wavesurfer2.playPause(); });
    $('#playdaft2').click(function () { wavesurfer3.playPause(); });
    $('#playmassive2').click(function () { wavesurfer4.playPause(); });

    wavesurfer4.on('ready', function() {
        $.getJSON('../../images/paradise.json', function (data){ 
            obj = data;
            for (i=0; i < obj.length; i++) {
                loadRegions4(obj[i]);
            };
        })
    });

    wavesurfer3.on('ready', function() {
        $.getJSON('../../images/one.json', function (data){ 
            obj = data;
            for (i=0; i < obj.length; i++) {
                loadRegions3(obj[i]);
            };
        })
    });
});

function loadRegions4(regions) {
    regions.color = randomColor(0.3);
    wavesurfer4.addRegion(regions);
}

function loadRegions3(regions) {
    regions.color = randomColor(0.3);
    wavesurfer3.addRegion(regions);
}

function randomColor(alpha) {
    return 'rgba(' + [
        ~~(Math.random() * 255),
        ~~(Math.random() * 255),
        ~~(Math.random() * 255),
        alpha || 1
            ] + ')';
}   

