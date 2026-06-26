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
  
    var result1 = loader.engine.document.getElementById(121427311).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427312).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121427310).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427316).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121424847).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427317).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121427342).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427473).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121427343).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427474).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121427344).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427475).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121427477).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427478).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121427480).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427481).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121427483).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427484).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121427517).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427518).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121427520).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427521).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121427523).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121427524).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431348).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431231).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431233).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431234).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431236).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431237).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431239).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431240).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431242).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431243).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431245).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431246).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431254).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431255).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431257).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431258).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431260).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431261).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431265).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431266).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431268).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431269).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121431271).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121431272).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators
  }, 2000)
};
  
  ['input', 'change'].forEach(function(event) {
    document.addEventListener(event, function(e) {
      if (e.target.matches('input, textarea, select')) {
        roundAndSeparate();
      }
    });
  });

  document.addEventListener('click', roundAndSeparate);

