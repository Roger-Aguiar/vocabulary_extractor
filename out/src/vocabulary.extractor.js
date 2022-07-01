"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VocabularyExtractor = void 0;
var fs = require("fs");
var VocabularyExtractor = /** @class */ (function () {
    function VocabularyExtractor() {
    }
    VocabularyExtractor.prototype.extractVocabulary = function () {
        var directory = './documents';
        var test = "C:/Users/SQUADRA/Desktop/Studies/RetrievalInformation/vocabulary_extractor/documents";
        var words = '';
        var documents = fs.readdirSync(test);
        var index = 0;
        while (index < documents.length) {
            //words += this.readFile(directory, documents[index]).replace(/[\r\n!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, " ");
            words += this.readFile(test, documents[index]).replace(/[\r\n!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, " ");
            index++;
        }
        var listOfFiles = words.toLowerCase().split(' ');
        var vocabulary = listOfFiles.filter(function (item, i, ar) { return ar.indexOf(item) === i; });
        vocabulary.sort().shift();
        return vocabulary;
    };
    VocabularyExtractor.prototype.readFile = function (directory, document) {
        var file;
        try {
            file = fs.readFileSync("".concat(directory, "/").concat(document), 'utf-8');
        }
        catch (error) {
            console.log(error);
        }
        return file;
    };
    return VocabularyExtractor;
}());
exports.VocabularyExtractor = VocabularyExtractor;
//# sourceMappingURL=vocabulary.extractor.js.map