let items_JSON = Cookies.get(`pokemon`);
let selected_item = {};
if (!(items_JSON === undefined)) {
  selected_item = JSON.parse(items_JSON);
}

// console.log(selected_item);