$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "charities.xml",
		dataType: "xml",
		success: parseXml,
		complete: runisotope
	});
});

function parseXml(xml)
{
	$("cgrid").html();
	$(xml).find("charity").each(function() {
		$("#gridthingy").append("<div class='listc'><img src='" + $(this).find("logo").text() + "'/><br /><a href='" + $(this).find("website").text() + "' target='_blank'><h4 class='cname'>" + $(this).find("name").text() + "</h4><p>" + $(this).find("mission").text() + "</p></div>");
	});
}

function runisotope()
{
	var $grid = $('#cgrid').isotope({
		itemSelector: '.listc',
		masonry: {
			columnWidth: 300,
			horizontalOrder: true,
			gutter: 25,
			fitWidth: true
		},
		getSortData: {
			name: function( itemElem ) {
				var name = $( itemElem ).find('.cname').text();
				return name.toLowerCase();
			},
			nameb: function( itemElem2 ) {
				var nameb = $( itemElem2 ).find('.cname').text();
				return nameb.toLowerCase();
			},
		},
		sortAscending: {
			name: true,
			nameb: false,
		}
	});

	$grid.imagesLoaded().progress( function() {
		$grid.isotope('layout');
	});
}