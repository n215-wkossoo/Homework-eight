function initListeners() {}
$("nav a").on("click", (e) => {
  let btnID = e.currentTarget.id;
  loadContent(btnID);
});

function loadContent(pageName) {
  $.get(`pages/${pageName}.html`, (data) => {
    $("#app").html(data);
    console.log(data);
  }).fail((error) => {
    //console.log("error", error);
    alert("page is not " + error.statusText);
  });
}

function moreinfo(pageName) {
  loadContent(pageName);
}

$(document).ready(function () {
  loadContent("home");
  initListeners();
});
