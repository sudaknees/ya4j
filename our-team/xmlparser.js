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
    $("#content").append("<div class='personal'><div class='imgtd'><img src='"+$(this).find("imgurl").text()+"'/></div><div class=''personalbio><h2 class='nametxt'>"+$(this).find("name").text()+"</h2><h2 class='postext'>"+$(this).find("position").text()+"</h2><h3 class='perinfo'>"+$(this).find("age").text()+", "+$(this).find("location").text()+", "+$(this).find("pronouns").text()+"</h3><p>"+$(this).find("bio").text()+"</p></div></div><br /><hr /><br />");
  });  
}