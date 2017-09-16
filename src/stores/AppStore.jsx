import { observable, computed } from 'mobx';

export default class AppStore {
  @observable appName = 'OffGrid App Template';


  constructor(){
    document.title = this.appName;
  }
   
}
