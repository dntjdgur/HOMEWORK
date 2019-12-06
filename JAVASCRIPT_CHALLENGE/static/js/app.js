// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

data.forEach(function(ufodata) {
  console.log(ufodata);
  var row = tbody.append("tr");
  Object.entries(ufodata).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });

});


var button = d3.select("button");

button.on("click", function() {

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(ufo_data => ufo_data.datetime === inputValue);
  console.log(filteredData);

  var list = d3.select("tbody");
  list.html("");

  filteredData.forEach(function(ufo_data) {
    console.log(ufo_data);
    var row = tbody.append("tr");
    Object.entries(ufo_data).forEach(function([key, value]) {
      console.log(key, value);
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
});









