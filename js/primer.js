impress().init()

var observable = function() {
  this.state = ko.observable(false)
  this.setState = function() {
    this.state(!this.state())
  }
}

var example01 = {
  firstName: 'David',
  lastName:  'Bowman'
}

var example02 = {
  firstName: ko.observable('Frank'),
  lastName:  ko.observable('Poole')
}

var example03 = {
  crew: ko.observableArray([])
}

var example04 = function() {
  this.firstName = ko.observable('')
  this.lastName =  ko.observable('')
  this.fullName =  function() {
    return this.firstName() + ' ' + this.lastName()
  }
}

var example05 = {
  query: ko.observable('')
}

var example06 = {
  entry: ko.observable('')
}

var example07 = {
  entry: ko.observable('')
}

var example08 = {
  entry: ko.observable('')
}

var example09 = {
  entry: ko.observable('')
}

var example10 = {
  entry: ko.observable('')
}

$(function(){
  ko.applyBindings(new observable, $('#observable')[0])

  ko.applyBindings(example01, $('#example01')[0])
  ko.applyBindings(example02, $('#example02')[0])
  ko.applyBindings(example03, $('#example03')[0])
  ko.applyBindings(new example04, $('#example04')[0])
  ko.applyBindings(example05, $('#example05')[0])
  ko.applyBindings(example06, $('#example06')[0])
  ko.applyBindings(example07, $('#example07')[0])
  ko.applyBindings(example08, $('#example08')[0])
  ko.applyBindings(example09, $('#example09')[0])
  ko.applyBindings(example10, $('#example10')[0])

  $('.js-play-example02').click(function(){
    example02.firstName('HAL')
    example02.lastName('9000')
  })

  $('.js-play-example03').click(function(){
    example03.crew([
      {"firstName": "David", "lastName":  "Bowman"},
      {"firstName": "Frank",  "lastName":  "Poole"}
    ])
  })

  $('.js-play-example03-add').click(function(){
    var member = prompt('Crew member name:')
    var name = member.split(' ')
    example03.crew.push({
      firstName: name[0],
      lastName:  name[1]
    })
  })

  $('.js-play-example03-del').click(function(){
    example03.crew.removeAll()
  })


})
