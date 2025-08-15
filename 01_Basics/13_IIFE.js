// IIFE (Immediately Invoked Function Expression) 
// Used to execute a function immediately after its definition
// Helps avoid polluting the global scope

(function chai() { 
    // Named IIFE
    console.log(`DB Connected`);
})(); 
// The extra () at the end invokes the function immediately

// Arrow function IIFE with a parameter
((name) => { 
    console.log(`DB CONNECTED TWO ${name}`);
})('hit'); 
// 'hit' is passed as the argument to the IIFE