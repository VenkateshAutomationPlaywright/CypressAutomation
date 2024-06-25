import LoginPage from '../page-object/LoginPage';

class PoManager {
  constructor() {
    this.login = new LoginPage();
  }
  getLoginPage(){
    return this.login;
  }
}

export default PoManager;
