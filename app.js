/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */

function getList() {
  //This entire function is the SINGLE parmeter for the Promise.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

// TODO: Handle the resolved or rejected states of the promise
let para = document.getElementById("error");
let ul = document.getElementById("list");

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)
getList() //.then and .catch attached directly on.
  .then((list) => {
    list.forEach((name) => {
      let li = document.createElement("li");
      li.textContent = name;
      ul.appendChild(li);
    });
  })
  .catch((err) => {
// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
para.textContent = err.message; //This .message comes from the pair above.
  });


