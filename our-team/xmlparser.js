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
    $("#dirlist").append("<div class='personal'><div class='imgtd'><img src='"+$(this).find("imgurl").text()+"'/></div><div class=''personalbio'><h2 class='nametxt'>"+$(this).find("name").text()+"</h2><h3 class='postext'>"+$(this).find("position").text()+"</h3><h4 class='perinfo'>"+$(this).find("age").text()+", "+$(this).find("location").text()+", "+$(this).find("pronouns").text()+"</h4><p>"+$(this).find("bio").text()+"</p></div></div>");
  });  
}