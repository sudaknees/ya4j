$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "teammembers.xml",
    dataType: "xml",
    success: parseXml
  });
});

function parseXml(xml)
{
  $("#dirlist").html();
  $(xml).find("director").each(function()
  {
    $(".pername").html($(this).find("name").text());
	$(".perpos").html($(this).find("position").text());
	$("h3").html($(this).find("age").text()+', '+$(this).find("location").text()+', '+$(this).find("pronouns").text()+', ');
	$("p").html($(this).find("bio").text());
  });  
}