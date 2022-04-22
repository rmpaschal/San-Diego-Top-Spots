$(document).ready(function () {
    $.getJSON("./data.json", function(spotsData){
    for(let i = 0; i < spotsData.length; i++){
        $("#table-body").before(`<tr><td>${spotsData[i].name}</td><td>${spotsData[i].description}</td><td ><a href="https://www.google.com/maps?q=${spotsData[i].location[0]},${spotsData[i].location[1]}">Link</a></td></tr>`);
}
})})
