#class
#for
#splats
#post-if
#default values

class Numbers

  constructor:(@_numbers=[]) ->

  add:(number, otherNumbers...) ->
    type=typeof number

    @_numbers.push number if (type is "number")
    @_addString number if (type is "string")
    @_addArray number if (number instanceof Array)
    @_addArray otherNumbers

  _addString:(number) ->
    @_numbers.push parseInt(number, 10)

  _addArray:(numbers) ->
    for number in numbers
      @_numbers.push number

  sum: ->
    total=0
    for number in @_numbers
      total+=number
    total


numbers=new Numbers([40,20])
numbers.add "11"
numbers.add 1
numbers.add 1
numbers.add 1
numbers.add 1
numbers.add 1,1,1,1,1
numbers.add [10, 10]
console.log numbers.sum()





###
numbers.add 2
console.log numbers.count()
console.log numbers.sum()
console.log numbers.avg()

numbers.add 1,2,3
numbers.add [1, 10]

numbers new Numbers [1,2,3]

###


