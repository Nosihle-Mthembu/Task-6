setTimeout(function(){
    $("#hexagon").hide();
    $("#fpage").show()

},2000);

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://spotify23.p.rapidapi.com/albums/?ids=4JAvwK4APPArjIsOdGoJXX',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '8297dfaa3bmshc15c5061dd470c1p1acea1jsnd7245e07173d',
// 		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
// 	}
	
// };


const settings = {
	async: true,
	crossDomain: true,
	url: 'https://spotify23.p.rapidapi.com/albums/?ids=4JAvwK4APPArjIsOdGoJXX',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ba7f269905msh076825b29d44169p194b64jsnada696a68912',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {

	var singer = response.albums[0].artists[0].name
	var album_name = response.albums[0].name
	var album = response.albums[0].album_type
	var date = response.albums[0].release_date
	var total_tracks = response.albums[0].total_tracks
	var tracks_list = response.albums[0].tracks.items
	var tracks = ""

	for(var i = 0; i < tracks_list.length; i++){
		tracks = tracks + `<p><span class="mdi--music"></span>.${tracks_list[i].name}</p>`
	}
	// var tracks = tracks_list.map()
	
	$("#singer").text(singer)
	$("#name").text(album_name)
	$("#album").text(album)
	$("#date").text(date)
	$("#total_tracks").text(total_tracks)
	$("#tracks").html(tracks)


	console.log(tracks);
});

// $(document).ready(function(){
// 	$(".fluent-emoji-flat--play-button").click(function(){
// 	  $(".grid-container").hide();
// 	  $("#page3").show();
// 	})
// });

	

// fetch('https://spotify23.p.rapidapi.com/albums/?ids=4JAvwK4APPArjIsOdGoJXX', settings)
// 	.then(function(response){
// 		console.log(response)
// 	})
// 	.catch(err=>{console.log(err)})
	
	// $("#hexagon").hide();
    // $("#fpage").show()

