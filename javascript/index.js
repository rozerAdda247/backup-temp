/**
    Anonymous Object Interface
    In this approach you decide which variables and methods you keep private and which you expose 
    by putting them in the return statement. You create an object literal, which is returned and 
    stored in a global variable.
 */

var moduleName = (function (text, bool) {
    // here you define variables and methods
    var privateMethod = function () {
        // code here
    };

    return {
        // here you put public methods
        publicMethod: function () {
            console.log(text)
        },
        publicVar: "bagh",
    };
}("rozer", false));
moduleName.publicMethod();
const newPromise = new Promise((res, rej) => {
    if (true) {
        res(setTimeout(() => console.log("hello"), 2000))
    } else {
        rej(err=>console.log("error"))
    }
})
newPromise.catch(err => {
    
})
