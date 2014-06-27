var Numbers=function(numbers) {
    if (numbers==undefined) numbers=[];
    this._numbers=numbers;
};

Numbers.prototype.add=function(number) {
    this._numbers.push(number);
};

Numbers.prototype.sum=function() {
    var total=0;
    for(var i=0; i<this._numbers.length; i++) {
        var number=this._numbers[i];
        total+=number;
    }
    return total;
};



var numbers=new Numbers([2,3]);
numbers.add(1);
numbers.add(1);
numbers.add(1);
numbers.add(1);
numbers.add(1);
console.log(numbers.sum());