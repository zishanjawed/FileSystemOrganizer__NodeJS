function treeFn(dirPath){
    
    if(!dirPath){
        
        treeHelper(process.cwd(),"");
        return;
    }

    let doesExit = fs.existsSync(dirPath);
    if(!doesExit){
        console.log('Path Does not exits');
        return;
    }else{
        
        treeHelper(dirPath,"")
        

    }
}


function treeHelper(dirPath,indent){
    // check if file or directory
    if(fs.lstatSync(dirPath).isFile()){
        let fileName = path.basename(dirPath);
        console.log('├── '+fileName+indent)
    }
    if(fs.lstatSync(dirPath).isDirectory()){
        let dirName = path.basename(dirPath);
        console.log(indent+'└── '+dirName);
        let childrens = fs.readdirSync(dirPath);
        for (child of childrens){
            let chilrenPath = path.join(dirPath,child)
            treeHelper(chilrenPath,indent + '\t');
        }
    }
    
}

module.exports={
    treeKey:treeFn
}