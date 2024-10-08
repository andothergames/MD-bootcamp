const separateCSV = (string) => {
    const splitByLine = string.split("\n");
    const orderedArray = splitByLine.map(element => element.split(","));
    return orderedArray;
}

const string = "abc,def,ghi\njkl,mno,pqr\nstu,vwx,yza";

console.log(separateCSV(string));
