"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vocabulary_extractor_1 = require("../src/vocabulary.extractor");
var vocabulary_1 = require("../mocks/vocabulary");
describe("Vocabulary extractor tests", function () {
    var vocabularyExtractor;
    beforeEach(function () {
        vocabularyExtractor = new vocabulary_extractor_1.VocabularyExtractor();
    });
    it("should return an array with the complete vocabulary.", function () {
        expect(vocabularyExtractor.extractVocabulary().length).toBe(14);
        expect(vocabularyExtractor.extractVocabulary()).toStrictEqual(vocabulary_1.vocabulary.sort());
    });
});
//# sourceMappingURL=vocabulary.extractor.spec.js.map