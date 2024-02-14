let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

favFood = (dict, key) => {
    if (Array.isArray(dict[key])) {
      if (typeof dict[key][0] === 'object') {
        return Object.values(dict[key][0]).join('\n');
      } else {
        return dict[key].join('\n');
      }
    } else {
      return dict[key];
    }
  }
console.log(favFood(person3,'shakes'))

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = function() {
        return name
    }

    this.addAge = function() {
        this.age = this.age +1;
        return this.age
    }

}

let Person_1 = new Person('John', 28)
let Person_2 = new Person('Methuselah', 969)

console.log(Person_2.printInfo())
console.log(Person_1.addAge())
console.log(Person_1.addAge())
console.log(Person_1.addAge())

isGreater = (string) => {
    return new Promise ( (accept, reject) => {
        if (string.length>10){
            accept(true)
            console.log('Big Word')
        } else {
            reject(false)
            console.log('Small Number')
        }

    })

}

isGreater("Hello").then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);})