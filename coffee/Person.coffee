class Person

  constructor:(@name)->

  greet:->
    console.log "Hello #{@name}!"


new Person("Carlos").greet()