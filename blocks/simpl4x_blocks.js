'use strict';



Blockly.defineBlocksWithJsonArray([{
  "type": "simpl4x_action",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "actions",
      "options": [
        [
          "Buy",
          "buy"
        ],
        [
          "Sell",
          "sell"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "actionAmount",
      "value": 0
    },
    {
      "type": "input_value",
      "name": "actionSymbol",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "simpl4x_getbidprice",
  "message0": "%1",
  "args0": [
    {
      "type": "field_input",
      "name": "getPriceSymbol",
      "text": "EUR/USD"
    }
  ],
  "output": "Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "simpl4x_getprice_col",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "getPriceSymolCol",
      "text": "EUR/USD"
    },
    {
      "type": "field_dropdown",
      "name": "column",
      "options": [
        [
          "Bid",
          "Bid"
        ],
        [
          "Ask",
          "Ask"
        ],
        [
          "High",
          "High"
        ],
        [
          "Low",
          "Low"
        ]
      ]
    }
  ],
  "output":"Number",
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);