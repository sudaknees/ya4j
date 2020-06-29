$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "artworks.xml",
    dataType: "xml",
    success: parseXml
  });
});

function parseXml(xml)
{
	$("#container").html();
	$(xml).find("artwork").each(function(){
		$("#container").append("<div class='listing "+$(this).find("segment").text()+"'><img src='"+$(this).find("imageurl").text()+"'/><br /><a href='"+$(this).find("shopurl").text()+" target='_blank'><h3 class='arttitle'>"+$(this).find("title").text()+"</h3></a><h4 class='artinfo'>"+$(this).find("artist").text()+"</h4><p>Funds to "+$(this).find("charity").text()+"</p></div>");
		var $grid = $('#container').isotope({
			itemSelector: '.listing',
			percentPosition: true,
			masonry: {
		  		columnWidth: '.grid-sizer',
		  		gutter: 20}
		});
		$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');
		});})}

