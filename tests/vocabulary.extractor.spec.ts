import { VocabularyExtractor } from "../src/vocabulary.extractor";
import { vocabulary } from "../mocks/vocabulary";

describe("Vocabulary extractor tests", () => {
  let vocabularyExtractor: VocabularyExtractor;

  beforeEach(() => {
    const directory = "C:/Users/SQUADRA/Desktop/Studies/RetrievalInformation/vocabulary_extractor/documents";
    vocabularyExtractor = new VocabularyExtractor(directory);
  });

  it("should return an array with the complete vocabulary.", () => { 
    expect(vocabularyExtractor.extractVocabulary().length).toBe(14);   
    expect(vocabularyExtractor.extractVocabulary()).toStrictEqual(vocabulary.sort());
  });
});
