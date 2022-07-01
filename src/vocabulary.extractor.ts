import * as fs from "fs";

export class VocabularyExtractor {
  constructor(private readonly directory: string){}

  extractVocabulary(): string[] {
    const documents = fs.readdirSync(this.directory);
    let words: string = "";    
    let index = 0;

    while (index < documents.length) {
      words += this.readFile(this.directory, documents[index]).replace(/[\r\n!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g," ");
      index++;
    }

    let listOfFiles = words.toLowerCase().split(" ");
    let vocabulary = listOfFiles.filter((item, i, ar) => ar.indexOf(item) === i);
    vocabulary.sort().shift();
    return vocabulary;
  }

  private readFile(directory: string, document: string) {
    let file: string;
    try {
      file = fs.readFileSync(`${directory}/${document}`, "utf-8");
    } catch (error) {
      console.log(error);
    }
    return file;
  }
}
