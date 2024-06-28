const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        await writeFile("./temp.txt", "One\n", { flag: "a" });
		await writeFile("./temp.txt", "Two\n", { flag: "a" });
		await writeFile("./temp.txt", "Buckle My Shoe\n", { flag: "a" });
    } catch(error) {
        console.log(error.message);
    }
}

const reader = async() => {
    try{
        const data = await readFile("./temp.txt", "utf8");
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