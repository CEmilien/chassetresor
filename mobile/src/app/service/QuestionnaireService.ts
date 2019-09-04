import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Questionnaire } from '../model/questionnaire';
import { RemotePersistentDataService } from './RemotePersistentDataService';
import { ToastController } from '@ionic/angular';

@Injectable()
export class QuestionnaireService  extends RemotePersistentDataService<Questionnaire> {

    constructor(
        db: AngularFirestore,
        toastController: ToastController,
    ) {
        super(db, toastController);
    }

    getLocalStoragePrefix(): string {
        return 'questionnaire';
    }
}
