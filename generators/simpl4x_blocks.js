'use strict';

Blockly.Python['simpl4x_action'] = function(block) {
  var dropdown_actions = block.getFieldValue('actions');
  var number_actionamount = block.getFieldValue('actionAmount');
  var value_actionsymbol = Blockly.Python.valueToCode(block, 'actionSymbol', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `makeOrder('${dropdown_actions}',${number_actionamount},${value_actionsymbol})\n`;
  return code;
};

Blockly.Python['simpl4x_getbidprice'] = function(block) {
  var text_getpricesymbol = block.getFieldValue('getPriceSymbol');
  // TODO: Assemble Python into code variable.
  var code = `getSymbolPrice(\'${text_getpricesymbol}\')`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};