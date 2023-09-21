const fs = require('fs')
const youtubedl = require('youtube-dl');
const express = require('express');
const app = express();


app.get('/', (req, res) => {

// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started')
  console.log('filename: ' + info._filename)
  console.log('size: ' + info.size)
})

    
    
    const videolink = req.body.link;
    let videoName;
    data = {
        
    }

    const video = youtubedl(videolink,
        // Optional arguments passed to youtube-dl.
        ['--format=18'],
        // Additional options can be given for calling `child_process.execFile()`.
        { cwd: __dirname });

    video.on('info', (info) => {
        console.log('download started');

        data.filename = info._filename;
        data.byte_size = info._size;

    })


    youtubedl.getInfo(videoLink, (err, info) => {
        if(err)  throw err;
        videoName = info._filename + '.mp4';
        video.pipe(fs.createWriteStream(videoName));
        data.id = info.id;
        data.title = info.title;
        data.url = info.url;
        data.thumbnail = info.thumbnail;
        data.description = info.description;
        filename = info.filename;
        data.format_id = info.format_id;
    })
    
    video.on('complete', () =>{
        'use strict';
        console.log('filename' + info._filename + 'already downloaded');
    })

    video.on('end', () => {
        console.log('download complete');
    })
});

const port = 5000;
app.listen(port, () => {
    console.log('server listening on port', port);
});