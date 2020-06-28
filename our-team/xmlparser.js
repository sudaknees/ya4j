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
    $("#content").append("<table id='dirtable'><tr><td><img src='"+$(this).find("imgurl").text()+"'/></td><td><h2>"+$(this).find("name").text()+"</h2><br><h2>"+$(this).find("position").text()+"</h2><p>"+$(this).find("bio").text()+"</p></td>");
  });  
}