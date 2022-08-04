let search = document.getElementById("search");
let result = document.getElementById("result");

let users = [
  { id: 1, name: "Aram", surname: "Simonyan" },
  { id: 2, name: "Manvel", surname: "Ghazaryan" },
  { id: 3, name: "Luys", surname: "Mamikonyan" },
  { id: 4, name: "Vardan", surname: "Sahajyan" },
  { id: 5, name: "Mariam", surname: "Hovhanisyan" },
  { id: 6, name: "Laura", surname: "Hovhanisyan" },
];

function printLists(users) {
  let html = "";
  users.forEach(function (item) {
    // html += `<li>${item.name} ${item.surname}</li>`;
    html += `<div><ion-icon name="person-circle-outline"></ion-icon><li>${item.name} ${item.surname}</li</div>`;
  });
  result.innerHTML = html;
}
printLists(users);

// search.addEventListener('keyup', function(){})
search.onkeyup = function () {
  let time = search.value == "" ? 0 : 1000;
  setTimeout(function () {
    let searchResult = users.filter(function (item) {
      return item.name.toLowerCase().includes(search.value.toLowerCase());
    });
    printLists(searchResult);
  }, time);
};

search.onkeyup = function () {
  let time = search.value == "" ? 0 : 1000;
  setTimeout(function () {
    let searchResult = users.filter(function (item) {
      return item.surname.toLowerCase().includes(search.value.toLowerCase());
    });
    printLists(searchResult);
  }, time);
};

search.onkeyup = function () {
  let time = search.value == "" ? 0 : 1000;
  setTimeout(function () {
    let searchResult = users.filter(function (item) {
      return (
        item.surname.toLowerCase().includes(search.value.toLowerCase()) ||
        item.name.toLowerCase().includes(search.value.toLowerCase())
      );
    });
    printLists(searchResult);
  }, time);
};
