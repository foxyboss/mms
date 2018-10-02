var input = document.getElementById("myinput");
var awesomplete = new Awesomplete(input);

function a() {
    return new Promise(function(resolve, reject){
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        /**
         * @todo: extract paht to library
         */
        url = "foxyboss";
        url = "./data/persons/" + url + ".jsonld";
        req.open("GET", url);

        req.onload = () => {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                //reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = () => {
            //reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    }).then(JSON.parse);

    promise1.then(function(value) {
    console.log(value);
        // expected output: "foo"
    });
}
a = a();

console.log(a);

awesomplete.list = ["Ada", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"];
