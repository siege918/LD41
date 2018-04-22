function RandomBool()
{
	return Math.random() < .5;
}

var topics = [
	"Horses",
	"Reddit",
	"Puppies",
	"Kitties",
	"Chocolate",
	"Pasta",
	"Mushrooms",
	"Family",
	"Crust",
	"Rap",
	"Country",
	"Flowers",
	"Baking",
	"ICP",
	"Georgia",
	"Twitter",
	"Vanilla",
	"Redhots",
	"Lobster",
	"Beaches",
	"Books",
	"Horror",
	"Ke$ha",
	"Torture",
	"Space",
	"Dolphins",
	"The Void",
	"Greg"
];

function GetLikesAndDislikes()
{
	var likeNums = [null, null, null];
	var dislikeNums = [null, null, null];
	
	var i = 0;
	while (i < likeNums.length)
	{
		var num = Math.floor(Math.random() * topics.length);
		
		for (var j = 0; j < likeNums.length; j++)
		{
			if (num === likeNums[j])
			{
				num = null;
				break;
			}
		}
		
		if (num != null)
		{
			likeNums[i] = num;
			i++;
		}
	}
	
	i = 0;
	while (i < likeNums.length)
	{
		var num = Math.floor(Math.random() * topics.length);
		
		for (var j = 0; j < likeNums.length; j++)
		{
			if (num === likeNums[j] || num === dislikeNums[j])
			{
				num = null;
				break;
			}
		}
		
		if (num != null)
		{
			dislikeNums[i] = num;
			i++;
		}
	}
	
	return {likes: [topics[likeNums[0]], topics[likeNums[1]], topics[likeNums[2]]], dislikes: [topics[dislikeNums[0]], topics[dislikeNums[1]], topics[dislikeNums[2]]]};
}

var namePrefix = [
	"Jess",
	"Chris",
	"John",
	"Sarah",
	"Alex",
	"Reb",
	"Seb",
	"Tony",
	"Jane",
	"Shaun",
	"Chan",
	"Rad",
	"Helga"
];

var nameSuffix = [
	"",
	"",
	"",
	"ica",
	"i",
	"topher",
	"son"
];

function GetName()
{
	var num = Math.random() * namePrefix.length;
	
	num = Math.floor(num);
	
	var num2 = Math.random() * nameSuffix.length;
	
	num2 = Math.floor(num2);
	
	return namePrefix[num] + nameSuffix[num2];
}

function GenerateHairstyle()
{
	var num = Math.random() * 6;
	
	return Math.floor(num);
}

var hairColors = 
[
	"090806",
	"2C222B",
	"71635A",
	"B7A69E",
	"D6C4C2",
	"CABFB1",
	"DCD0BA",
	"FFF5E1",
	"E6CEA8",
	"E5C8A8",
	"DEBC99",
	"B89778",
	"A56B46",
	"B55239",
	"8D4A43",
	"91553D",
	"533D32",
	"3B3024",
	"554838",
	"4E433F",
	"504444",
	"6A4E42",
	"A7856A",
	"977961"
];

function GenerateHairColor()
{
	var num = Math.random() * hairColors.length;
	
	num = Math.floor(num);
	
	return hairColors[num];
}	

function GenerateSkinColor()
{
	var num = Math.random() * 5;
	
	if (num < 1)
		return "8d5524";
	if (num < 2)
		return "c68642";
	if (num < 3)
		return  "e0ac69";
	if (num < 4)
		return "f1c27d";
	
	return "FFAC8D";
}

function GenerateBodyStyle()
{
	var num = Math.random() * 3;
	
	return Math.floor(num);
}

function GenerateBodyColor()
{
	var num = Math.random() * 16777216;
	
	num = Math.floor(num);
	
	var string = num.toString(16);
	
	while (string.length < 6)
	{
		string = "0" + string;
	}
	
	return string;
}

function GenerateBodyColor2()
{
	var num = Math.random() * 16777216;
	
	num = Math.floor(num);
	
	var string = num.toString(16);
	
	while (string.length < 6)
	{
		string = "0" + string;
	}
	
	return string;
}

module.exports = {
	generate: function() {
		var person = {};
		
		person.name = GetName();
		
		var likedis = GetLikesAndDislikes();
		
		person.likes = likedis.likes;
		person.dislikes = likedis.dislikes;
		
		person.hairstyle = GenerateHairstyle();
		person.haircolor = GenerateHairColor();
		person.skincolor = GenerateSkinColor();
		person.bodystyle = GenerateBodyStyle();
		person.bodycolor = GenerateBodyColor();
		person.bodycolor2 = GenerateBodyColor2();
		
		return person;
		
	}
};