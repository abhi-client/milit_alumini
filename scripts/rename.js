import fs from "fs";

async function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  let id = 1;
  for (const file of fileList) {
    fs.rename(dir+'/'+file,dir+'/'+file.split(".")[0].replaceAll(/[0-9]+/g,'').trim().replaceAll(" ", "_")+".JPG",()=>{console.log("done")})
  }
}

getFiles('./public/images/details')
getFiles('./public/images/profile')