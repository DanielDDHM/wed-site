
import langPt from './manifest/res_primaryLanguage';
import langDe from './manifest/res_secondaryLanguage';
import langFr from './manifest/res_thirdLanguage';


export default class languages {

constructor(props) {
    this.appliedLanguage = langPt;
}

applyPtLanguage(){
    this.appliedLanguage = langPt;
}

applyDeLanguage(){
    this.appliedLanguage = langDe;
}

applyFrLanguage(){
    this.appliedLanguage = langFr;
}

}
