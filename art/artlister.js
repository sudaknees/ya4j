$(document).ready(function() {
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
	$(xml).find("artwork").each(function() {
		$("#gridthingy").append("<div class='listing grid-sizer " + $(this).find("segment").text()+ "'><a href='" + $(this).find("shopurl").text() + "' target='_blank'><img src='artfiles/" + $(this).find("imageurl").text() + "'/><br /><h4 class='arttitle'>" + $(this).find("title").text() + "</h4></a><a href='https://instagr.am/" + $(this).find("artist").text() + "' target='_blank'><h5 class='artinfo'>@" + $(this).find("artist").text() + "</h5></a><p>Funds to " + $(this).find("charity").text() + "</p><p>" + $(this).find("addinfo").text() + "</p></div>");
	});
}

function runisotope()
{
	var $grid = $('#gridthingy').isotope({
		itemSelector: '.listing',
		masonry: {
			columnWidth: 300,
			horizontalOrder: true,
			gutter: 25,
			fitWidth: true
		},
		getSortData: {
			name: function( itemElem ) {
				var name = $( itemElem ).find('.arttitle').text();
				return name.toLowerCase();
			},
			nameb: function( itemElem2 ) {
				var nameb = $( itemElem2 ).find('.arttitle').text();
				return nameb.toLowerCase();
			},
			person: function( itemElem3 ) {
				var person = $( itemElem3 ).find('.artinfo').text();
				return person.toLowerCase();
			},
			personb: function( itemElem4 ) {
				var personb = $( itemElem4 ).find('.artinfo').text();
				return personb.toLowerCase();
			}
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