
OPENTOK_API_KEY = '38953222';
OPENTOK_API_SECRET = '50b4adf245fd0457fd49b51b6a3b381ff97e4364'; 
CLIENT_TOKEN = 'T1==cGFydG5lcl9pZD0zODk1MzIyMiZzZGtfdmVyc2lvbj10YnJ1YnktdGJyYi12MC45MS4yMDExLTAyLTE3JnNpZz1hNmUwZDVhNDIxM2UwNTVhYTk0MjdkZWMyNzQ5ZjJjOWU0YjYyMWU5OnJvbGU9cHVibGlzaGVyJnNlc3Npb25faWQ9MV9NWDR6T0RrMU16SXlNbjUtVFc5dUlFOWpkQ0F4TkNBeE5Eb3hPRG93TUNCUVJGUWdNakF4TTM0d0xqWTBORGMyTVRnMmZnJmNyZWF0ZV90aW1lPTEzODE3ODU1NTUmbm9uY2U9MC40MTM1OTk4NTUyNTQ0Njg2MyZleHBpcmVfdGltZT0xMzgxODcxOTU1JmNvbm5lY3Rpb25fZGF0YT0=';
SESSION_ID = '1_MX4zODk1MzIyMn5-TW9uIE9jdCAxNCAxNDoxODowMCBQRFQgMjAxM34wLjY0NDc2MTg2fg';

function sessionConnectedHandler(event){
	session.publish ( publisher );
	subscribeToStreams (event.streams);
}

function subscribeToStreams(streams){
	for (var i = 0; i < streams.length; i++){
		var stream = streams[i];
		//if(stream.connection.connectionId 
		//	!= session.connection.connectionId) {
			session.subscribe(stream);
		//}
	}
}

function streamCreatedHandler(event){
	subscribeToStreams(event.streams);
}

var publisher = TB.initPublisher(OPENTOK_API_KEY, 'column-center',
                                 {width:400, height:300});
var session = TB.initSession (SESSION_ID);

session.connect(OPENTOK_API_KEY, CLIENT_TOKEN);

session.addEventListener("session created", sessionConnectedHandler);
session.addEventListener("stream created", streamCreatedHandler);

