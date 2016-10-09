$(document).ready(function(){
var LinkedinAuth = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=75rsv9vpa1ixv3&redirect_uri=https%3A%2F%2Fmattobra.github.io/page.html&state=987654321&scope=r_basicprofile"
var start = function(){ $.getJSON(LinkedinAuth).then(function(data){
  console.log(data);
})}
console.log("ready")
$("#start").click(
function(){
location.replace(LinkedinAuth)
}
);
var pullskills = function(){
var skill1 = $("#skill1").val();
var skill2 = $("#skill2").val();
}
$("a[value=submit]").click(pullskills);
})
