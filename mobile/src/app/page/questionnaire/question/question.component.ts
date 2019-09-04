import { Question } from './../../../model/questionnaire';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { QuestionnaireService } from './../../../service/QuestionnaireService';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { flatMap, map } from 'rxjs/operators';
import { Questionnaire } from 'src/app/model/questionnaire';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {

  questionnaireId: string;
  questionId: string;
  questionnaire: Questionnaire;
  question: Question;

  constructor(private questionnaireService: QuestionnaireService,
              private activatedRoute: ActivatedRoute,
              private changeDetectorRef: ChangeDetectorRef
              ) {
  }

  ngOnInit() {
    /*
    this.questionnaireService.save({
      id: null,
      version: 0,
      creationDate: new Date(),
      lastUpdate: new Date(),
      dataStatus: 'NEW',
      questions: [
        { id: '1', intitule: 'l age du capitain', response: '42', lettreIdx: 0 },
        { id: '2', intitule: 'q2', response: 'qsdfgdsf', lettreIdx: 0 },
        { id: '3', intitule: 'q3', response: 'sdfgzerg', lettreIdx: 2 },
        { id: '4', intitule: 'q4', response: 'xcvbcvb', lettreIdx: 3 }
      ]
    }).subscribe((rqest) => console.log(rqest.data.id));
    */
    this.activatedRoute.paramMap.pipe(
      flatMap((params: ParamMap) => {
        this.questionnaireId = params.get('idQuestionnaire');
        this.questionId = params.get('questionId');
        return this.questionnaireService.all();
      }),
      map((rques) => {
        this.questionnaire = rques.data[0];
        console.log(rques);
        if (this.questionnaire) {
          this.question = this.questionnaire.questions.filter((question) => question.id === this.questionId)[0];
        }
        this.changeDetectorRef.detectChanges();
      })
    ).subscribe();
  }

  lskdhgldfk(): boolean {
    return true;
  }
}
