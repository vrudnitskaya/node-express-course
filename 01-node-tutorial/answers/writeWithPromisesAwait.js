const { writeFile, readFile } = require("fs").promises;
const path = require("path");

const filePath = path.resolve(__dirname, "./temp.txt");

const writer = async () => {
    try {
        await writeFile(filePath, "One\nTwo\nBuckle My Shoe\n", { flag: "a" });
    } catch(error) {
        console.log(error.message);
    }
}

const reader = async() => {
    try{
        const data = await readFile(filePath, "utf8");
        console.log("File content: ", data);

    } catch (error) {
        console.log(error.message);
    }
    
}

const readWrite = async() => {
    await writer();
    await reader();
}

readWrite();