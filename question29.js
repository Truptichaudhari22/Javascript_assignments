//  Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.
function inputFilename(filename) {
    let changeIntoString = String(filename);
    console.log(typeof changeIntoString);
  }
  inputFilename(false);
  inputFilename(0976);
  inputFilename("Trupti");
  inputFilename(null);
  inputFilename(undefined);