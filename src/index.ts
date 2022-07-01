import {VocabularyExtractor} from "./vocabulary.extractor";

const directory = "C:/Users/SQUADRA/Desktop/Studies/RetrievalInformation/vocabulary_extractor/documents";

let vocabularyExtractor = new VocabularyExtractor(directory);
let vocabulary = vocabularyExtractor.extractVocabulary();
console.log(vocabulary);