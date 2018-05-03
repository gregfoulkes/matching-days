var dayOne = document.querySelector('.date1')

var dayTwo = document.querySelector('.date2')

var theDay = document.querySelector('.day')


var x = MatchDays()


dayOne.addEventListener('change', function(){
  let days = document.querySelectorAll('.day')

  for (let i = 0; i < days.length; i++){
    days[i].classList.remove('red')
    if(days[i].innerHTML == x.dayInOne(dayOne.value)){
      days[i].classList.add('red')
    }
  }
});

dayTwo.addEventListener('change', function(){

  let days = document.querySelectorAll('.day')

  for (let i = 0; i < days.length; i++){
    days[i].classList.remove('blue')

    if(days[i].innerHTML == x.dayInTwo(dayTwo.value)){
      days[i].classList.add('blue')
    }
  }
});
