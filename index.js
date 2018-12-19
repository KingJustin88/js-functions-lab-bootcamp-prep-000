function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(greeting, name){
  return `Happy ${greeting}, ${name}!`
}

function holidayCountdown(days, holiday){
  return `It\'s ${holiday} days until ${days}!`
}

happyHolidays()
happyHolidaysTo("you")
happyHolidayTo("Independence", "you")
holidayCountdown("20", "Mother\'s Day")