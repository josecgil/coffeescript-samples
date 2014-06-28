class Params

  constructor:(params, separator=",")->
    @_params=params.split separator

  toNumbers:->
    parseFloat(param) for param in @_params

  toStrings:->
    param.trim() for param in @_params

console.log new Params("1,2,3,4").toNumbers()
console.log new Params("1,2,3,4").toStrings()
console.log new Params("1;2;3;4",";").toNumbers()
