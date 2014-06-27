// Generated by CoffeeScript 1.7.1
(function() {
  var Numbers, numbers,
    __slice = [].slice;

  Numbers = (function() {
    function Numbers(_numbers) {
      this._numbers = _numbers != null ? _numbers : [];
    }

    Numbers.prototype.add = function() {
      var number, otherNumbers, type;
      number = arguments[0], otherNumbers = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      type = typeof number;
      if (type === "number") {
        this._numbers.push(number);
      }
      if (type === "string") {
        this._addString(number);
      }
      if (number instanceof Array) {
        this._addArray(number);
      }
      return this._addArray(otherNumbers);
    };

    Numbers.prototype._addString = function(number) {
      return this._numbers.push(parseInt(number, 10));
    };

    Numbers.prototype._addArray = function(numbers) {
      var number, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = numbers.length; _i < _len; _i++) {
        number = numbers[_i];
        _results.push(this._numbers.push(number));
      }
      return _results;
    };

    Numbers.prototype.sum = function() {
      var number, total, _i, _len, _ref;
      total = 0;
      _ref = this._numbers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        number = _ref[_i];
        total += number;
      }
      return total;
    };

    return Numbers;

  })();

  numbers = new Numbers([40, 20]);

  numbers.add("11");

  numbers.add(1);

  numbers.add(1);

  numbers.add(1);

  numbers.add(1);

  numbers.add(1, 1, 1, 1, 1);

  numbers.add([10, 10]);

  console.log(numbers.sum());


  /*
  numbers.add 2
  console.log numbers.count()
  console.log numbers.sum()
  console.log numbers.avg()
  
  numbers.add 1,2,3
  numbers.add [1, 10]
  
  numbers new Numbers [1,2,3]
   */

}).call(this);
