
function TwitterCanTalk(){
  var instance = this;
  
  instance.queue = ["Agora seu twitter fala! Ó Sim! Conforme as atualizações aparecerem, eu lerei"]
  instance.fetchInterval = 0
  instance.scrapeInterval = 0
  
  
  
  // call on start
  function init(){
    // Write credits to the body.
    $('body').prepend('<div id="flockonus_mod" style="position: absolute;z-index: 1000;top: 50px;left: 10px;padding: 10px;background-color: #4AF; border-radius: 5px;"> TwitterCanTalk by <a class="  twitter-atreply" data-screen-name="georgeju" target="_blank" href="http://twitter.com/flockonus" rel="nofollow"><span class="at">@</span><span class="at-text">flockonus</span></a> </div>')
    // IE compatible mode =/
    instance.fetchInterval  = setInterval('TCT.fetch()', 2000)
    instance.scrapeInterval = setInterval('TCT.scrape()',      5000)
    // it is important to mark a stop point
    $('div.stream-item:first').attr('data-queued', 'true')
    insert_swf()
  }
  instance.init = init
  
  
  function insert_swf(){
    // ? https://raw.github.com/flockonus/TwitterCanTalk/master/src/js/TwitterReader.js
    // ? https://github.com/flockonus/TwitterCanTalk/raw/master/public/9000player.swf
    
    $('#flockonus_mod').append(
      '<object width="30" height="30" id="9000player" align="middle">' +
        '<param name="movie" value="https://raw.github.com/flockonus/TwitterCanTalk/master/public/9000player.swf" /> ' +
        '<embed src="https://raw.github.com/flockonus/TwitterCanTalk/master/public/9000player.swf" quality="high" width="30" height="30" align="middle" allowfullscreen="false" flashvars="" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" />' +
      '</object>'
    )
  }
  
  // AS3 to call
  function dequeue(){
    return ( instance.queue.shift() );
  }
  instance.dequeue = dequeue
  
  
  // fetch routine
  function fetch(){
    console.log('fetching..')
    var newsE = $('#new-tweets-bar')
    if( newsE.length )
      newsE.click()
  }
  instance.fetch = fetch
  
  
  // scrap routine
  function scrape(){
    console.log('scraping..')
    $('div.stream-item').each(function(i,e){
      var thisE = $(e)
      
      if( thisE.attr('data-queued') ) return false
      
      thisE.attr('data-queued', 'true')
      
      treat_and_queue( thisE.find('.tweet-text.pretty-link').text() )
       
    })
  }
  instance.scrape = scrape
  
  
  function treat_and_queue(txt){
    
    txt = ( remove_links(txt).replace( /(\#|\@)/g, '' ) )
    
    // google TTS limit
    txt = txt.substring(0,100)
    
    instance.queue.push( "http://translate.google.com/translate_tts?ie=UTF-8&tl=pt&q=" + escape(txt) )
    console.log('Added 1!')
  }
  
  function remove_links(txt){
    return txt.replace(/\bhttps?\:\S*/ig, "LINK!")
  }
  
}

TCT = new TwitterCanTalk()
TCT.init()




