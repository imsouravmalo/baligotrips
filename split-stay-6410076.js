function roundAndSeparate() {

  //---Add only thousands separators----

  /* Offer Price IDR (Breakfast) 99332759 -> 99482258 (first number is formula, second is short text) 
  Offer Price IDR (Half Board)   99136529 -> 99482259
  Offer Price IDR (Full Board)   99136530 -> 99482261 */

  //   var number1 = loader.engine.document.getElementById(99332759).getProperty('value.value');
  // loader.engine.document.getElementById(99482258).setValue(({"value": number1.toLocaleString('en-US')})); //- adds thousand separators

  //   var number2 = loader.engine.document.getElementById(99136529).getProperty('value.value');
  // loader.engine.document.getElementById(99482259).setValue(({"value": number2.toLocaleString('en-US')})); //- adds thousand separators

  //   var number3 = loader.engine.document.getElementById(99136530).getProperty('value.value');
  // loader.engine.document.getElementById(99482261).setValue(({"value": number3.toLocaleString('en-US')})); 

  //---Round up AND add thousands separators----

  /* INR Cost (Breakfast Plan)                99117086 -> 99482262
  INR Cost ( Breakfast Plan - India Billing ) 99391056 -> 99482263
  INR Cost(Half Board Plan)                   99390975 -> 99482265
  INR Cost ( Half Board  - India Billing )    99391060 -> 99391060
  INR Cost ( Full Board Plan)                 99390976 -> 99482272
  INR Cost ( Full Board - India Billing )     99391070 -> 99482273 */

    var result1 = loader.engine.document.getElementById(106656263).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106656264).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106656266).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106656267).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106656269).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106656270).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106656275).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106656276).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106656277).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106656278).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106656279).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106656280).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106656281).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106656282).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106656283).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106656284).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106656285).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106656286).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106785932).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106785933).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106785939).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106785941).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  var result1 = loader.engine.document.getElementById(106785942).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(106785945).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

  };

window.onclick = function() {
    setTimeout(function() {
      roundAndSeparate();
    }, 100);
  };
