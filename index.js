var Input = require("./elementtypes/inputElement");
var Button = require("./elementtypes/buttonElement");
var Text = require("./elementtypes/textElement");
var Checkbox = require("./elementtypes/checkboxElement");
var RadioButton = require("./elementtypes/radioButtonElement");

var inputElem = new Input();
var buttonElem = new Button();
var textElem = new Text();
var checkBoxElem = new Checkbox();
var radioButtonElem = new RadioButton();

module.exports.inputElem  = Input;
module.exports.buttonElem = Button;
module.exports.textElem  = Text;
module.exports.checkBoxElem = Checkbox;
module.exports.radioButtonElem = RadioButton;
