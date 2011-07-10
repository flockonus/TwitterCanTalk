package{
	
	//http://www.youtube.com/user/flashandcode#p/u/2/v2QSUtJ3FDw
	//http://evolve.reintroducing.com/2008/01/10/as2-to-as3/as2-%E2%86%92-as3-loading-playing-external-sounds/
	
	//http://livedocs.adobe.com/flash/9.0/ActionScriptLangRefV3/flash/external/ExternalInterface.html
	//http://codingrecipes.com/calling-a-javascript-function-from-actionscript-3-flash
	
	import flash.display.MovieClip;
	import flash.events.TimerEvent;
	import flash.events.ProgressEvent;
	import flash.events.Event;
	import flash.net.URLRequest;
	
	import flash.external.ExternalInterface;
	
	import flash.utils.Timer;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	
	public class SimplePlayer extends MovieClip{
		private var snd:Sound;
		private var channel:SoundChannel = new SoundChannel();
		
		
		
		
		private var pokeTimer:Timer = new Timer(1000)
		
		private var isPlaying:Boolean = false;
		
		private var sndQueue:Array = []
		
		public function SimplePlayer(){
			// -- JS test
			/*
			var param1:uint = 3;
			var param2:uint = 7;
			var result:uint = ExternalInterface.call("addNumbers", param1, param2);
			ExternalInterface.call("alert", result );
			*/
			
			pokeTimer.addEventListener(TimerEvent.TIMER, pokeJS)
			pokeTimer.start()

		}
		
		private function pokeJS(e:TimerEvent):void {
			// load and play 1 sound at a time.
			if ( !isPlaying ) {
				
				var ttlUrl:String = ExternalInterface.call("TCT.dequeue");
				
				//ExternalInterface.call("console.log", 'pokeJS, peguei: '+ttlUrl)
				
				// if got any answer, load n play
				if ( ttlUrl && ttlUrl.length > 0 ) {
					isPlaying = true
					snd = new Sound();
					snd.load( new URLRequest( ttlUrl ) );
					// cb para saber quando carregou! snd.addEventListener(Event.COMPLETE, twit_played_cb)
					channel = snd.play(0)
					channel.addEventListener(Event.SOUND_COMPLETE, twit_played_cb)
				}
			} else {
				//ExternalInterface.call("console.log", 'pokeJS, mas to tocando, entao, nada.')
			}
		}
		
		private function twit_played_cb(e:Event):void {
			isPlaying = false
			//ExternalInterface.call("console.log", 'twit_played_cb, done!')
		}
		
		
		
		
		
		
		
	}
}
