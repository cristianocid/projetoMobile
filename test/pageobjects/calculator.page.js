const DISPLAY_SELECTOR =
  "/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout[1]/android.widget.TextView";
const BUTTON_SELECTOR_TEMPLATE = '//android.widget.ImageButton[@content-desc="%s"]';
const ADD_BUTTON_SELECTOR = '//android.widget.ImageButton[@content-desc="plus"]';
const EQUAL_BUTTON_SELECTOR = '//android.widget.ImageButton[@content-desc="equals"]';

class CalculatorPage {
  async open() {
    await $(DISPLAY_SELECTOR).waitForDisplayed();
  }

  async clickButton(numero) {
    const buttonSelector = BUTTON_SELECTOR_TEMPLATE.replace("%s", numero);
    await $(buttonSelector).click();
  }

  async clickAddButton() {
    await $(ADD_BUTTON_SELECTOR).click();
  }

  async clickEqualButton() {
    await $(EQUAL_BUTTON_SELECTOR).click();
  }

  async getDisplayText() {
    return await $(DISPLAY_SELECTOR).getText();
  }
}

module.exports = new CalculatorPage();
