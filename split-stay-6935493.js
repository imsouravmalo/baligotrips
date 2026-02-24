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
  
    var result1 = loader.engine.document.getElementById(120546069).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(120546070).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(120547107).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(120553735).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(120553737).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(120553738).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators
    
  };
  
  window.onclick = function() {
    setTimeout(function() {
      roundAndSeparate();
    }, 100);
  };