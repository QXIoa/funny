const fs = require("fs/promises");

const s = [
  "He is among us.",
  "She is not who she says she is.",
  "They are waiting outside.",
  "I am exactly where I belong.",
  "You are not alone.",
  "We are almost there.",
  "He was here yesterday.",
  "She was never afraid.",
  "They were ready to leave.",
  "She knows the truth.",
];

(async () => {
  for (let filename of s) {
    if (filename.endsWith(".")) filename = filename + "txt";
    else { filename = filename + ".txt" };
    await fs.writeFile(filename, "");
    console.log(`Created "${filename}"`);
  }
})();
