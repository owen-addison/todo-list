// Trigger store data event
function storeData(projArray) {
  // console.log("stored JSON", JSON.stringify(projArray)); // Log the data stored in local storage as JSON
  localStorage.setItem("projArray", JSON.stringify(projArray));
  // console.log("converted JSON", JSON.parse(localStorage.getItem("projArray"))); // Log the object converted back from the JSON data
}

export default storeData;
