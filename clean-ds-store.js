const fs = require("fs");
const path = require("path");

function deleteDSStore(directory) {
  fs.readdirSync(directory).forEach((file) => {
    const filePath = path.join(directory, file);
    if (fs.statSync(filePath).isDirectory()) {
      deleteDSStore(filePath);
    } else if (file === ".DS_Store") {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${filePath}`);
    }
  });
}

deleteDSStore(".");
