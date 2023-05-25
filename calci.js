(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button){
      button.addEventListener('click',function(e) {
        let value = e.target.dataset.num;
        console.log(value);
        screen.value += value;
      })
    });

    equal.addEventListener('click', function(e){
      if(screen.value === ''){
        screen.value = "";
      }
      else{
        let answer = eval(eval(screen.value.split('u')[0]));
        screen.value = answer;
      }
    })

    clear.addEventListener('click', function(e){
       screen.value = "";
    })


  })();