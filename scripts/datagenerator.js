import fs from "fs";

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  let id = 1;
  for (const file of fileList) {
    files.push({
      id,
      profile: file,
      name: file.split(".")[0].replaceAll("_", " "),
      details: file,
    });
    id++;
  }

  return files;
}

const write = (path, data) => {
  fs.writeFile(path, JSON.stringify(data, null, 2), (error) => {
    if (error) {
      console.log("An error has occurred ", error);
      return;
    }
    console.log("Data written successfully to disk");
  });
};

write("./data/officers.json", getFiles("./public/images/profile"));
