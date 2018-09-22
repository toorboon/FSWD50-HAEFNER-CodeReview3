//JavaScript File for the team.html page
function TeamMember(name, email, image){
	this.name = name;
	this.email = email;
	this.image = image;
}

function import_team_members(){
	for (var i = 0; i < team_members.length; i++) {
		member = new TeamMember(team_members[i].name, team_members[i].email, team_members[i].image);
			team_array.push(member);
	}
console.log(team_array);
}

function write_team_members_to_page(){
	console.log('length.teamarray: ' + team_array.length);
	for (var i = 0; i < team_array.length; i++) {
		document.getElementById('team_container').innerHTML += '<div class="team" id="team'+i+'""></div>';
		document.getElementById('team'+i).insertAdjacentHTML('afterbegin','<div class="team_p" id="team_p'+i+'"><h5>'+team_array[i].name + '</h5></div>');
		document.getElementById('team_p'+i).insertAdjacentHTML('beforeend', team_array[i].email);
		document.getElementById('team'+i).insertAdjacentHTML('afterbegin','<img src="' + team_array[i].image + '">');
	}
}

team_array = new Array();
import_team_members();
write_team_members_to_page();