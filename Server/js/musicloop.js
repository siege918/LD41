    //this is the webaudio loooooppppppp
    //enter url in the next line
    var bettingURL  = '/audio/BettingMusic.ogg';

    /* --- set up web audio --- */
    //create the context
    var context = new AudioContext();
    //...and the bettingSource
    var bettingSource = context.createBufferSource();
    //connect it to the destination so you can hear it.
    bettingSource.connect(context.destination);

    /* --- load buffer for betting music ---  */
    var bettingRequest = new XMLHttpRequest();
    //open the bettingRequest
    bettingRequest.open('GET', bettingURL, true); 
    //webaudio paramaters
    bettingRequest.responseType = 'arraybuffer';
    //Once the bettingRequest has completed... do this
    bettingRequest.onload = function() {
        context.decodeAudioData(bettingRequest.response, function(response) {
            /* --- play the sound AFTER the buffer loaded --- */
            //set the buffer to the response we just received.
            bettingSource.buffer = response;
            //start(0) should play asap.
			bettingSource.start();
			console.log(bettingSource);
            _startBettingSong();
            bettingSource.loop = true;
        }, function () { console.error('The bettingRequest failed.'); } );
    }
    //Now that the bettingRequest has been defined, actually make the bettingRequest. (send it)
    bettingRequest.send();
	
	//this is the webaudio loooooppppppp
    //enter url in the next line
    var datingURL  = '/audio/ReggaeDate.ogg';

    //...and the datingSource
    var datingSource = context.createBufferSource();
    //connect it to the destination so you can hear it.
    datingSource.connect(context.destination);

    /* --- load buffer for betting music ---  */
    var datingRequest = new XMLHttpRequest();
    //open the datingRequest
    datingRequest.open('GET', datingURL, true); 
    //webaudio paramaters
    datingRequest.responseType = 'arraybuffer';
    //Once the datingRequest has completed... do this
    datingRequest.onload = function() {
        context.decodeAudioData(datingRequest.response, function(response) {
            /* --- play the sound AFTER the buffer loaded --- */
            //set the buffer to the response we just received.
            datingSource.buffer = response;
            //start(0) should play asap.
			datingSource.start();
			datingSource.disconnect(context.destination);
            datingSource.loop = true;
        }, function () { console.error('The datingRequest failed.'); } );
    }
    //Now that the datingRequest has been defined, actually make the datingRequest. (send it)
    datingRequest.send();
	
	var datingSongRunning = false;
	var bettingSongRunning = false;
	
	function _startDatingSong(when)
	{
		if (!datingSongRunning)
		{
			datingSource.connect(context.destination);
			datingSongRunning = true;
		}
	}
	
	function _stopDatingSong(when)
	{
		if (datingSongRunning)
		{
			datingSource.disconnect(context.destination);
			datingSongRunning = false;
		}
	}
	
	function _startBettingSong(when)
	{
		if (!bettingSongRunning)
		{
			bettingSource.connect(context.destination);
			bettingSongRunning = true;
		}
	}
	
	function _stopBettingSong(when)
	{
		if (bettingSongRunning)
		{
			bettingSource.disconnect(context.destination);
			bettingSongRunning = false;
		}
	}
	
	function BettingSongIsPlaying()
	{
		return bettingSongRunning;
	}
	
	function DatingSongIsPlaying()
	{
		return datingSongRunning;
	}
	
	function StartDatingSong()
	{
		_stopBettingSong();
		_startDatingSong(3);
	}
	
	function StartBettingSong()
	{
		_stopDatingSong();
		_startBettingSong(3);
	}