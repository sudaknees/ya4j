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
   $("#dirlist").html("<ul id='content' data-role='listview' data-inset='true'></ul>");
  $(xml).find("director").each(function()
  {
    $("#content").append("<table><tr><td><img src='"+$(this).find("imgurl").text()+"'/></td><td><h2 class='nametxt'>"+$(this).find("name").text()+"</h2 class='postext'><h2>"+$(this).find("position").text()+"</h2><h3 class='perinfo'>"+$(this).find("age").text()+", "+$(this).find("location").text()+", "+$(this).find("pronouns").text()+"</h3><p>"+$(this).find("bio").text()+"</p></td>");
  });  
}