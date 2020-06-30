$(document).ready(function()
{
  $.ajax({
    type: "GET",
    url: "artworks.xml",
    dataType: "xml",
    success: parseXml,
	complete: runisotope
  });
});

function parseXml(xml)
{
	$("gridthingy").html();
	$(xml).find("artwork").each(function(){
		$("#gridthingy").append("<div class='listing grid-sizer "+$(this).find("segment").text()+"'><a href='"+$(this).find("shopurl").text()+"' target='_blank'><img src='"+$(this).find("imageurl").text()+"'/><br /><h3 class='arttitle'>"+$(this).find("title").text()+"</h3></a><h4 class='artinfo'>"+$(this).find("artist").text()+"</h4><p>Funds to "+$(this).find("charity").text()+"</p></div>");
	});
}
				  
function runisotope()
{
	var $grid = $('#gridthingy').isotope({
		itemSelector: '.listing',
		percentPosition: true,
		filter: '*',
		masonry: {
			columnWidth: '.grid-sizer',
			gutter: 25
		},
		getSortData: {
		name: '.arttitle',
		nameb: '.arttitle',
		person: '.artinfo',
		personb: '.artinfo'
		},
		sortAscending: {
			name: true,
			nameb: false,
			person: true,
			personb: false
		}
	});

	$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');
	});
}