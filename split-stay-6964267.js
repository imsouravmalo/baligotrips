var timeout;

function roundAndSeparate() {
	clearTimeout(timeout);

  timeout = setTimeout(function() {
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
  
    var result1 = loader.engine.document.getElementById(121446797).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449822).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121444692).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449797).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121444694).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449801).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121444695).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449803).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121444697).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449794).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121444699).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449807).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121444767).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449813).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121444770).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449814).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121444700).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449817).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121444703).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449818).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121447773).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121449821).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators
  }, 2000);
};
  
  ['input', 'change'].forEach(function(event) {
    document.addEventListener(event, function(e) {
      if (e.target.matches('input, textarea, select')) {
        roundAndSeparate();
      }
    });
  });

  document.addEventListener('click', roundAndSeparate);

