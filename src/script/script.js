const tableInfo = document.getElementById("informations");
const tableStatus = document.getElementById("informations--status");

var infos = "";
var status = "";

axios.get('https://api.github.com/users/mikeludemann')
	.then(function(response){
		const dataObject = JSON.stringify(response.data, null);
		const dataJSON = JSON.parse(dataObject);
		infos += "<tr><th>Options</th><th>Information</th></tr>";

			for (x in dataJSON) {
				infos += "<tr><td>" + x + "</td><td>" + dataJSON[x] + "</td></tr>";
			}

		tableInfo.innerHTML = infos;

		status += "<table><tr><th>Options</th><th>Information</th></tr><tr><td>Status</td><td>" + response.status + "</td></tr></table>";
		tableStatus.innerHTML = status;
	});
