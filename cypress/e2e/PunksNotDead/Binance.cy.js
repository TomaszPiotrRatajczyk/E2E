import mainPage from "../../Page Objects/mainPage"
import { Login } from "../../Page Objects/login";


describe('Binance', () => {
  it('successfully loads', () => {
    const mainPageObj = new mainPage();
    const loginObj = new Login;
    
    loginObj.Login();
    mainPageObj.hotFeaturClose();
    mainPageObj.elements.buyButton().should('exist');

  })
  it('addBit',() =>{
    const mainPageObj = new mainPage();
    const loginObj = new Login;
    const valueX = '0,' + Math.random().toString().substr(2, 2);
    const valueY = '0,' + Math.random().toString().substr(2, 2);
    const totalValue = valueX + valueY;

    loginObj.Login();
    mainPageObj.hotFeaturClose();
    mainPageObj.addValue(valueX); //Input kasuje '0,' przy wpiswaniu. Nie mogłem tego przejść.
    mainPageObj.addPosition();
    mainPageObj.checkPosition(valueX.replace(',', '.'));


  })
})