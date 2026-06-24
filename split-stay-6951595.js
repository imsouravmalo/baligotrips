var timeout;

function roundAndSeparate() {
	clearTimeout(timeout);

  timeout = setTimeout(function() {
    //---Add only thousands separators----
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
  
    var result1 = loader.engine.document.getElementById(121283229).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121283230).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121283235).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121283237).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121283315).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121283317).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121283430).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121283432).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121284126).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121284128).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121284127).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121284130).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121284182).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121284186).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

    var result1 = loader.engine.document.getElementById(121284184).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121284189).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators

	var result1 = loader.engine.document.getElementById(121322019).getProperty('value.value');
    var roundedValue1 = Math.ceil(result1); //- rounding to next integer
  loader.engine.document.getElementById(121322022).setValue(({"value": roundedValue1.toLocaleString('en-US')})); //- adds thousand separators
  }, 100);
}

  function handleSpecialCaseForRadioButtons(el) {
    var targetedParent = el.closest('[data-type="radio"][data-id]');

    if (targetedParent === null) return; 

    if (targetedParent.dataset.id === '121357506') {
      loader.engine.document.getElementById(121357503).setValue(({"value": "b2bops@baligotrips.com"}));
    } else if(targetedParent.dataset.id === '121357505') {
      loader.engine.document.getElementById(121357503).setValue(({"value": "b2b@baligotrips.com"}));
    } else if(targetedParent.dataset.id === '121361049') {
      loader.engine.document.getElementById(121357503).setValue(({"value": "b2b@baligotrips.com"}));
    }
  }

  document.addEventListener('focusout', function(e) {
    if (e.target.matches('input, textarea, select')) {
      roundAndSeparate();
    }
  });
  
  document.addEventListener('change', function(e) {
    if (e.target.matches('input, textarea, select')) {
      roundAndSeparate();
    
      if (e.target.tagName.toLowerCase() === 'input' && e.target.type === 'radio') {
        handleSpecialCaseForRadioButtons(e.target);
      }
    }
  });

  document.addEventListener('click', roundAndSeparate);

