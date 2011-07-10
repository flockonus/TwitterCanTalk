/* bookmarklet ex: http://erkie.github.com/
var s = document.createElement('script');
s.type='text/javascript';
document.body.appendChild(s);
s.src='http://erkie.github.com/asteroids.min.js';
void(0);
*/


function TwitterCanTalk(){
  var instance = this;
  
  instance.queue = ["Agora seu twitter fala! Ó Sim! Conforme as atualizações aparecerem, eu lerei"]
  instance.fetchInterval = 0
  instance.scrapeInterval = 0
  
  
  
  // call on start
  function init(){
    // Write credits to the body.
    $('body').prepend('<div id="flockonus_mod" style="position: absolute;z-index: 1000;top: 50px;left: 10px;padding: 10px;background-color: #4AF;"> :D </div>')
    instance.fetchInterval  = setInterval('TCT.fetch()', 2000)
    instance.scrapeInterval = setInterval('TCT.scrape()',      5000)
    // it is important to mark a stop point
    $('div.stream-item:first').attr('data-queued', 'true')
    insert_swf()
  }
  instance.init = init
  
  
  function insert_swf(){
    // ?
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





//ex and challange
'http://translate.google.com/translate_tts?ie=UTF-8&q=HOJE%2009/07%20s%E1bado%20-%20TIM%20MAIA%20COVER%20Abertura%20com%20Bemol%20Blues%20Band%20Grava%E7%E3o%20do%20DVD%20-%20Mulher%20R%2410%20/%20Homem%20R%2415.%20-%20http%3A//migre.me/59qwc&tl=pt'




