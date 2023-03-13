const { Before, AfterAll, Given, When, Then } = require("@wdio/cucumber-framework");

let display;



Given(/^que a calculadora está aberta$/, async () => {
    // inicia a calculadora
    await driver.launchApp();
    display = '//android.widget.TextView[@content-desc="No result"]';
    
    // validar se carregou o display de resultado
    await $(display).waitForDisplayed();
});

When(/^clico no botao "([^"]*)?"$/, async (numero) => {
  const buttonNumber = `//android.widget.ImageButton[@content-desc="${numero}"]`;
  await $(buttonNumber).click();
});

When(/^clico no botao Somar$/, async () => {
  const buttonPlus = `//android.widget.ImageButton[@content-desc="plus"]`;
  await $(buttonPlus).click();
});

When(/^clico no botao igual$/, async () => {
  const buttonEqual = `//android.widget.ImageButton[@content-desc="equals"]`;
  await $(buttonEqual).click();
});

Then(/^exibe o resultado como "([^"]*)?"$/, async (numero) => {
  const displayResult = "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.TextView";

  // validar o resultado esperado
  expect(await $(displayResult).getText()).toEqual(numero);
});
