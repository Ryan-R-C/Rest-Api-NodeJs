const fs = require('fs')
/*
Now it is necessary to handle images

make a upload of image through a buffer
*/
fs.readFile('../assets/thumbsUp.bmp', (error, buffer) => {
    console.log('Redered Image 👍');
    console.log(buffer);

    /*
    writes a file
     path
     write options, what will write
     callBack Function
    */
    fs.writeFile('../assets/thumbsUp2.bmp', buffer, (error)=>{
        console.log('Image was wrote')
    } )
} )
/*
fs.readFile ->
 first argument is the path to file
 the second some more config like type of file
 and the third is a callBack function
    and with arguments -> (error, buffer)
*/