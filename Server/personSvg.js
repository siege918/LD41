function GetHairBack(hairstyle, haircolor)
{
	var retval = '<g><title>Hair Back</title>';
	
	if (hairstyle == "1")
	{
		retval += '<ellipse ry="52" rx="84" id="svg_1" cy="64.5" cx="100.5" stroke-opacity="null" stroke-width="null" stroke="null" fill="#' + haircolor + '"/>';
		retval += '<rect id="svg_2" height="109" width="167" y="65.5" x="17.5" stroke-opacity="null" stroke-width="null" stroke="null" fill="#' + haircolor + '"/>';
	}
	else if (hairstyle == "2" || hairstyle == "3")
	{
		retval += '<ellipse ry="52" rx="84" id="svg_1" cy="64.5" cx="100.5" stroke-opacity="null" stroke-width="null" stroke="null" fill="#' + haircolor + '"/>';
	}
	else if (hairstyle == "4")
	{
		retval += '<ellipse stroke="null" ry="118.000004" rx="84" id="svg_1" cy="130.500004" cx="100.5" stroke-opacity="null" stroke-width="null" fill="#' + haircolor + '"/>';
	}
	else if (hairstyle == "5")
	{
		
	}
	
	retval += "</g>"
	
	return retval;
}

function GetBody(bodystyle, bodycolor1, bodycolor2, skincolor)
{
	var retval = '<g><title>Body</title>';
	
	if (bodystyle == "0")
	{
		retval += '<ellipse stroke="null" ry="48.5" rx="77.000004" id="svg_4" cy="227" cx="101.499996" stroke-opacity="null" stroke-width="null" fill="#' + bodycolor1 + '"/>';
		retval += '<rect id="svg_5" height="154" width="152" y="226.5" x="26.5" fill-opacity="null" stroke-opacity="null" stroke-width="null" stroke="null" fill="#' + bodycolor1 + '"/>';
	}
	if (bodystyle == "1")
	{
		retval += '<ellipse stroke="null" ry="48.5" rx="77.000004" id="svg_4" cy="227" cx="101.499996" stroke-opacity="null" stroke-width="null" fill="#' + bodycolor1 + '"/>';
		retval += '<rect id="svg_5" height="154" width="152" y="226.5" x="26.5" fill-opacity="null" stroke-opacity="null" stroke-width="null" stroke="null" fill="#' + bodycolor1 + '"/>';
		retval += '<path id="svg_1" d="m88.5,185.5c0,0 36,87 36,87c0,0 -16,10 -16,10c0,0 -22,-20 -22,-20c0,0 23,-77 23,-77c0,0 -21,0 -21,0z" stroke-width="null" fill="#' + bodycolor2 + '"/>';
	}
	if (bodystyle == "2")
	{
		retval += '<ellipse stroke="null" ry="48.5" rx="77.000004" id="svg_4" cy="227" cx="101.499996" stroke-opacity="null" stroke-width="null" fill="#' + bodycolor1 + '"/>';
		retval += '<rect id="svg_5" height="154" width="152" y="226.5" x="26.5" fill-opacity="null" stroke-opacity="null" stroke-width="null" stroke="null" fill="#' + bodycolor1 + '"/>';
		retval += '<path id="svg_2" d="m64.5,183.5c0,0 41,54 40.5,53.5c0.5,0.5 34.5,-60.5 34,-61c0.5,0.5 -29.5,-36.5 -30.5,-36.5c-1,0 -44,44 -44,44z" stroke-width="null" fill="#' + skincolor + '"/>';
	}
	
	retval += "</g>"
	
	return retval;
}

function GetHead(skincolor)
{
	console.log(skincolor);
	var retval = '<g><title>Head</title>';
	
	retval += '<ellipse stroke="null" ry="77.499995" rx="72" id="svg_3" cy="116.999995" cx="100.500003" stroke-opacity="null" stroke-width="null" fill="#' + skincolor + '"/>';
	
	retval += "</g>"
	
	return retval;
}

function GetHairFront(hairstyle, haircolor)
{
	
	var retval = '<g><title>Hair Front</title>';
	
	if (hairstyle == "1" || hairstyle == "2")
	{
		retval += '<rect stroke="null" transform="rotate(-31.965024948120117 61.188991546630845,57.19407653808594) " id="svg_8" height="29.491506" width="86" y="42.448323" x="18.188993" fill-opacity="null" stroke-opacity="null" stroke-width="null" fill="#' + haircolor + '"/>';
		retval += '<rect stroke="null" transform="rotate(30 134.07595825195315,50.3325309753418) " id="svg_9" height="25.303847" width="83" y="37.680607" x="92.575962" fill-opacity="null" stroke-opacity="null" stroke-width="null" fill="#' + haircolor + '"/>'
	}
	if (hairstyle == "3")
	{
		
	}
	else if (hairstyle == "4")
	{
		retval += '<rect stroke="null" transform="rotate(-31.965024948120117 66.86550140380858,53.27191925048829) " id="svg_8" height="13.181952" width="67.125399" y="46.680946" x="33.302805" fill-opacity="null" stroke-opacity="null" stroke-width="null" fill="#' + haircolor + '"/>'
		retval += '<rect stroke="null" transform="rotate(30 130.56939697265628,52.40608596801757) " id="svg_9" height="11.277566" width="83" y="46.767308" x="89.069394" fill-opacity="null" stroke-opacity="null" stroke-width="null" fill="#' + haircolor + '"/>'
	}
	else if (hairstyle == "5")
	{
		retval += '<path id="svg_8" d="m26.5,72.5c0,0 -6,40 -6.5,39.5c0.5,0.5 32.5,-33.5 32,-34c0.5,0.5 -12.5,44.5 -13,44c0.5,0.5 37.5,-29.5 37,-30c0.5,0.5 -5.5,31.5 -4.5,31.5c1,0 32,-37 31.5,-37.5c0.5,0.5 8.5,32.5 8.5,33.5c0,1 31,-33 31,-33c0,0 -6,36 -6.5,35.5c0.5,0.5 27.5,-32.5 27.5,-32.5c0,0 0,41 0,41c0,0 15,-47 14.5,-47.5c0.5,0.5 -26.5,-62.5 -23,-30c13.5,-46.5 -138.5,-21.5 -42,-7c-2.5,-45.5 -62.5,0.5 -62.5,0.5c0,0 -24,26 -24,26z" fill-opacity="null" stroke-opacity="null" stroke-width="null" stroke="null" fill="#' + haircolor + '"/>';
	}
	
	retval += "</g>"
	
	return retval;
}

module.exports = {
	generate: function(hairstyle, haircolor, skincolor, bodystyle, bodycolor, bodycolor2)
	{
		var svg = '<svg width="200" height="375" xmlns="http://www.w3.org/2000/svg">';
	  
		svg += GetHairBack(hairstyle, haircolor);
	  
		svg += GetBody(bodystyle, bodycolor, bodycolor2, skincolor);
		
		svg += GetHead(skincolor);
		
		svg += GetHairFront(hairstyle, haircolor);
		
		svg += "</svg>";
		
		return svg;
	}
};