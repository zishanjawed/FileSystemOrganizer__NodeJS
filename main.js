#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let helpObj = require('./commands/help')
let treeObj = require('./commands/help')
let organizeObj = require('./commands/organize')

let inputArr = process.argv.slice(2);


let types = {
    media: ["mp4", "mkv","png","jpg"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz","bz2"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

// console.log(inputArr)


// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help 


let command = inputArr[0]

switch(command.toLowerCase()){
    case "tree":
        treeObj.treeKey(inputArr[1])
        break;
    case "organize":
        organizeObj.organizeKey(inputArr[1])
        break;
    case "help":
        helpObj.helpKey()
        break;
    default:
        console.log('Please Input Right command');
        break;

}








