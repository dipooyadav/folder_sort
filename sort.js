let fs = require("fs");
let extensions = require("./extensions");
let testfolder = "./test_folder2";
let contents = fs.readdirSync(testfolder);

for(let i=0;i<contents.length;i++){
    let file = contents[i];
    sortfile(file);
    console.log("Sorting Complete");
}

function sortfile(file){
    let ext = file.split(".")[1];
    let foldername=getfoldername(ext);
    let folderpath = testfolder+"/"+foldername;
    if(!fs.existsSync(folderpath)){
        fs.mkdirSync(folderpath);
    }
    let sourcefilepath = testfolder+"/"+file;
    let destfilepath = folderpath+"/"+file;
    fs.copyFileSync(sourcefilepath, destfilepath);
    fs.unlinkSync(sourcefilepath);
}


function getfoldername(ext){
    let foldername;
    for(let i in extensions){
        if(extensions[i].includes(ext)){
            foldername = i;
            return foldername;
        }
    }
}