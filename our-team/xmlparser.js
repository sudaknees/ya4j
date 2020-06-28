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
  $(xml).find("director").eq(0)
  {
    $(".pername:eq(0)").html($(this).find("name").text());
	$(".perpos:eq(0)").html($(this).find("position").text());
	$("h3:eq(0)").html($(this).find("age").text()+', '+$(this).find("location").text()+', '+$(this).find("pronouns").text()+', ');
	$("p:eq(0)").html($(this).find("bio").text());
  };  
	
	$(xml).find("director").eq(0)
  {
    $(".pername:eq(0)").html($(this).find("name").text());
	$(".perpos:eq(0)").html($(this).find("position").text());
	$("h3:eq(0)").html($(this).find("age").text()+', '+$(this).find("location").text()+', '+$(this).find("pronouns").text()+', ');
	$("p:eq(0)").html($(this).find("bio").text());
  }; 
	
	$(xml).find("director").eq(2)
  {
    $(".pername:eq(2)").html($(this).find("name").text());
	$(".perpos:eq(2)").html($(this).find("position").text());
	$("h3:eq(2)").html($(this).find("age").text()+', '+$(this).find("location").text()+', '+$(this).find("pronouns").text()+', ');
	$("p:eq(2)").html($(this).find("bio").text());
  }; 
}