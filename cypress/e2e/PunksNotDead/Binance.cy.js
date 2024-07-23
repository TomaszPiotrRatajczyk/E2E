import mainPage from "../../Page Objects/mainPage";
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
    const valueX = 0.010; //'0.' + Math.random().toString().substr(2, 2);
    const valueY = 0.020; //'0.' + Math.random().toString().substr(2, 2);
    const totalValue = valueX + valueY;

    loginObj.Login();
    //Kasowanie potencjalnych transakcji przed testem
    mainPageObj.addValue(valueX); 
    mainPageObj.addPosition();
    mainPageObj.closeAll();
    //Test na kupno 1
    mainPageObj.addValue(valueX);
    mainPageObj.addPosition();
    //Sprawdzenie 1 pozycji 
    mainPageObj.checkPosition(valueX);
    //Test na kupno 2
    mainPageObj.addValue(valueY);
    mainPageObj.addPosition();
    //Sprawdzenie 2 pozycji 
    mainPageObj.checkPosition(totalValue);
    //Sprzedaż market
    mainPageObj.marketSell();
    //Przejscie do Order history
    mainPageObj.checkOrderHistory();

  })
})