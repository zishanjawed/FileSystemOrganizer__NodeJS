function organizeFn(dirPath){
    /*
        1. input --> directory path
        2. creare organized_files directory --> given path
        3. identify category of all files present in that directory
        4. copy / cut files to that organized_files directory inside the specfied category 
    */
    

    // 1. input --> directory path
    if(!dirPath){
        let doesExit = process.cwd();
        return;
    }

    let doesExit = fs.existsSync(dirPath);
    if(!doesExit){
        console.log('Path Does not exits');
        return;
    }else{
        // 2. creare organized_files directory --> given path
        let desPath = path.join(dirPath,'organized_files');
        if(!fs.existsSync(desPath)){
            fs.mkdirSync(desPath);
        }
        organizeHelper(dirPath,desPath)
        

    }

}

function organizeHelper(src,des){
    // 3. identify category of all files present in that directory
    let allChild = fs.readdirSync(src);
    // console.log(allChild);
    for (child of allChild){
        let childPath = path.join(src,child);
        if(fs.lstatSync(childPath).isFile()){
            // console.log('File Category -->',getFileCategory(child),' ',child)
            let category = getFileCategory(child);
            copyFiles(childPath,des,category)
        }
        if(fs.lstatSync(childPath).isDirectory()){
            console.log('Directory -->',child)
        }
    }
}

function getFileCategory(name){
    let ext= path.extname(name).slice(1)
    for (let type in types){
        if (types[type].includes(ext)){
            return type;
        }
    }
    return "others";
}

function copyFiles(childPath,desPath,category){
    if (category !== "others"){
        let categoryPath = path.join(desPath,category);
        if(!fs.existsSync(categoryPath)){
            fs.mkdirSync(categoryPath);
        }

        let fileName = path.basename(childPath);
        let desFilePath = path.join(categoryPath,fileName);
        console.log(` ---- COPYING ${fileName} ---`)
        fs.copyFileSync(childPath,desFilePath);
        console.log(` ---- COPYED ${fileName} ---`)
    }
    


}

module.exports = {
    organizeKey:organizeFn
}