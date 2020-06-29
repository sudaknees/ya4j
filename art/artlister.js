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
   $("#container").html();
  $(xml).find("director").each(function()
  {
    $("#container").append("<div class='listing "+$(this).find("segment").text()+"'><img src='"+$(this).find("imagegurl").text()+"'/><br /><a href='"+$(this).find("shopurl").text()+" target='_blank'><h3 class='arttitle'>"+$(this).find("title").text()+"</h3><h4 class='artinfo'>"+$(this).find("artist").text()+"</h4><p>Funds to"+$(this).find("charity").text()+"</p></div>");
  });  
}

// $(this).find("imgurl").text()