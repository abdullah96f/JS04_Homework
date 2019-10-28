  
/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/

class monkeys{

      constructor(name,speice, foodEaten){
            this.name = name;
            this.speice = speice;
            this.foodEaten = foodEaten
      }
      
    Introduce(){
          return this.name + ' ' + this.speice + ' ' + this.foodEaten
      }
}


var monkeyList= []

monkeyList[0] = new monkeys("monkey1", "white", "apple")
monkeyList[1] = new monkeys("monkey2", "black", "chicken")
monkeyList[2] = new monkeys("monkey3", "green", "watermelon")

 for (i in monkeyList) {
      console.log(monkeyList[i].Introduce())
 }