
export interface Flashcard {
  id: number;
  term_ru: string;
  translation_vi: string;
  translation_en: string;
  explanation_ru: string;
  explanation_vi: string;
  explanation_en: string;
}

export interface VocabularyItem {
  id: number;
  term_ru: string;
  translation_vi: string;
  translation_en: string;
}

export interface PresentationItem {
  id: number;
  question_ru: string;
  question_vi: string;
  question_en: string;
  answer_ru: string;
  answer_vi: string;
  answer_en: string;
}
