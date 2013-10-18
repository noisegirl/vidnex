<!--client Javasctript-->
<script type="text/javascript">

OPENTOK_API_KEY = '38953222';
OPENTOK_API_SECRET = '50b4adf245fd0457fd49b51b6a3b381ff97e4364'; 
TOKEN = '';
SESSION_ID = '';

function sessionConnectedHandler(event){
	session.publish ( publisher );
	subscribeToStreams (event.streams);
}

function subscribeToStreams(streams){
	for (var i = 0; i < streams.length; i++){
		var stream = streams[i];
		if(stream.connection.connectionId 
			!= session.connection.connectionId) {
			session.subscribe(stream);
		}
	}
}

function streamCreatedHandler(event){
	subscribeToStreams(event.streams);
}

var publisher TB.initPublisher(OPENTOK_API_KEY);
var session TB.initSession (SESSION_ID);

session.connect(OPENTOK_API_KEY, TOKEN);

session.addEventListener("session created", sessionConnectedHandler);
session.addEventListener("stream created", streamCreatedHandler);
</script>