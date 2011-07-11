
function TwitterCanTalk(){
  var instance = this;
  
  instance.queue = ["Agora seu twitter fala! Ó Sim! Conforme as atualizações aparecerem, eu lerei"]
  instance.fetchInterval = 0
  instance.scrapeInterval = 0
  
  
  
  // call on start
  function init(){
    // Write credits to the body.
    $('body').prepend('<div id="flockonus_mod" style="position: absolute;z-index: 1000;top: 50px;left: 10px;padding: 10px;background-color: #4AF; border-radius: 5px;"> TwitterCanTalk by <a class="  twitter-atreply" data-screen-name="georgeju" target="_blank" href="http://twitter.com/flockonus" rel="nofollow"><span class="at">@</span><span class="at-text">flockonus</span></a> </div> <br />')
    // IE compatible mode =/
    instance.fetchInterval  = setInterval('TCT.fetch()', 2000)
    instance.scrapeInterval = setInterval('TCT.scrape()',      5000)
    // it is important to mark a stop point
    $('div.stream-item:first').attr('data-queued', 'true')
    insert_swf()
  }
  instance.init = init
  
  
  // It is hard..
  /* REFS:
      http://kb2.adobe.com/cps/164/tn_16494.html
      http://stackoverflow.com/questions/452415/how-to-make-cross-domain-communication-between-javascript-and-flash
      
  */    
  
  function insert_swf(){
    // ? https://raw.github.com/flockonus/TwitterCanTalk/master/src/js/TwitterReader.js
    // ? https://github.com/flockonus/TwitterCanTalk/raw/master/public/9000player.swf
    // ? http://raw.github.com/flockonus/TwitterCanTalk/master/public/9000player.swf
    // ? https://raw.github.com/flockonus/TwitterCanTalk/master/public/9000player.swf
    
    //var flash_64 = 'data:application/x-oleobject;base64,Q1dTCwMLAAB4nKVWXWzb1hU+lxR59WdH/lOcf8axm6WNREqe61pLlNqS3Nmxq9RSu+zBi2jy0mJDkRpJWTZQoN6wrC/BBgwotgEB+tiHASv2uodlK9q3ouUyIE/ZMGQLsAEd0CDDgmEYvEtK/kuytOsuJF6ec77z3XO/+yNdhouAzgJEERT7hgHgzYF+DuCcrWq5peKssN4wTCdHrfMjdddt5kSx3W6n2+Npy14VM1NTU6KUFbPZFEWknA3TlddTpnNqJC8EDEXiKLbedHXLFHxbXrFa7vmRkS7teqO5Q2s6aVm1VkhasRriutwUM2lJ9HkoKFewiexadtWyjPy0jxJmDdmpC5dsSyOOQ+llQyhUJtITQkpYaemGKoxnJ86Jj+buYSNF+s1npUwmJU2mMlI183wuk81NTKak8Zwk7cntIDupi8SVVdmVH0t+gebkvirtTd6H7aZbqq5tfKHkXaRwTnxEyy+mrqrsiNts2UawYqoiEoM0iOk6VOBMILCq5DTLbshuXm42DV2RfUJxPeXULeVqW14jKc0X+5y4C/yyJdGZLS4+fckbDXEb7bhLRHs62qluNIm4RByrZSuEwk91t8ziYm7OdFzZVMhcMU8daV1Xcy+UsjOzz4/PZkvTMyW6ADMzU5PTpUJmslSUSpnsTKD9/tRttqKltHzdumzq/8C2J3WbrWzrqzrdtE9gnSxMZLKl8fHs1NNZn0CxUyux9TWiztpWI1iFpmw7xFfq/Mi2VL5Mgb45/XGZPr+Ex1K32dQvM6HHUrfZrP9Hpv9KIewszK5OT97SYvcazAtQYLa2tm4OxegViaCiEJMIGYCtwRXkO5bfvfjah+nN5V/Q7swmQrBFY5AYaud//+D+xqcL//g49s7D68OTDw7d+Osbwk5Yf/0Pzj+/+enC3zvhlx6cuDG/Nzx93Lm/8RkNX/nJb777r9yFw9dH8olOGA2C3z7a6htrnzx2V8DXex463k/v3/n3zxf+1J6fVkqfbaIAsIuc+MZbQx8L6c1EZTPxLebPd2K/fHFAh+Yrn/zxFoi/2xTf7zn6weC1Xw8chEQ6n6Dz2s5EY5UHz9391Y/E7+1zVrXVuzfXDux3Tt748bXbbwh7XcLPHr5NC9/rKg799t7KI3Rf/9vb967+cL/v5Tvv3XtzE7YitBxgqNLf5/k47eBFav+A5xF1fsj2fuetM6cvbN4cxCF/NWhLQNrv0hBas3Q1HtxgabLmX3zRqt4gdsl/54JnvKI3mga5ZMgbxO7pQFXdaVI7smit6aRg6E3WMdVYJ9Ygqi5zFatlqlipy6ZJjHhgFTpGpGldJcEg3YSWqxsOF3giuuOPo5ureIb+IhHZDFPiV1qkRbhp25Y3eD95vtLrtnX3il8CUa8oK7xmyw2SYZ2y2SurdMdSqxJsVK46t1haSlBnMJcF3XHp3rQ5ejJtt7c773WX2PQM9JW6L3Mm7TVZIbFqoZpWybf98UOKbBi8QcxVtx7pJJrEjb66tLDkAxw3ZFiyGvJr6q2UX325eKVQXry0UKqWQo5rNfnyyutEcQ8EZRSpfLKr1KmexY6SnWhfMLKsuPTcdTzJffGCRf9C6LR+vtK0dZfEkyjJJvEwz0EymjxwEA0PJ48lR+AZjBjMhDDDYcRjNoy5COZjmItjvgdzvRgnMNeHUT/mBjAaxNwQ5pI4fBCjYYwOYXQYoyMYHcXR4xgJGJ3EsVMYjWI0hhFlPo3RVzBzBrPPYvY5zJ7FbCoC3YYQ4z9YeHJjQlwkBCjMA2AIA0QgChCDOEBPNNoLcADo8WX6ELD9CEIDXDhCcQA8MBwKhRCE0UAIoQgdIRJlPeklOhaLorGveZK3HJmPQD3sLcfG/oLnY6ge9V6Deq83B8uDo+Bp/eVBxtOiNUYb8rREOekb5YNAKRiWjcYue5Jw7banxfsuAtSGz56YPYSu3b619mw/LeDMLe3wKLzXLwF4z9Tj3jKex1DnPY1fPnJr/ggqH0UeNUZh9hiiJWjhGqsd97Q+OgrlZxkmGsO0xNP1ODXpBKKxsCctnyif8IfnGDqb055EoCZItZNSbUSqnZJqo1JtTKpx9HMZjnVaPUTh/O7csc/EU+I5nyf8uTxom2eAwi/Qa8y/Mhigh4a+7T3kwe3xHy67JHU='
    
    $('#flockonus_mod').append(
      
      // data="'+flash_64+'"
      '<object width="32" height="32" id="9000player" align="middle" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" >' +
        '<param name="movie" value="http://citrons.com.br/soro/player9000.swf" /> ' +
        '<param name="quality" value="high" />' +
        '<param name="allowScriptAccess" value="always" />' +
        '<param name="play" value="true" />' +
        '<embed src="http://citrons.com.br/soro/player9000.swf" allowscriptaccess="true" quality="high" width="30" height="30" align="middle" allowfullscreen="false" flashvars="" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" />' +
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



