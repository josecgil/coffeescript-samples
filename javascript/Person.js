var Person=function(name) {
    this.name=name;
};

Person.prototype.greet=function() {
    console.log("Hello "+this.name+"!");
};

new Person("Carlos").greet();