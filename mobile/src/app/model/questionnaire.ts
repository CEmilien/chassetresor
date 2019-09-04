import { PersistentData, HasId } from './common';

export interface Questionnaire extends PersistentData {
    questions: Question[];
}
export interface Question extends HasId {
    intitule: string;
    response: string;
    lettreIdx: number;
}
