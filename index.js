require("babel-core")


/////// LET VS VAR /////////////////
// var type = 'Hello'
//
//
//
// while(true){
//   var type = 'World' //CHANGE TO LET TO SEE THE DIFFERENCE
//   console.log(type);
//   break
// }
//
// console.log(type);



//////////// CONSTANT VARIABLES //////////////////////
// const PI = Math.PI
//
// PI = 123
// const moment = require('moment')



////////////// CLASSES ////////////////////////
// class Bear {
//   constructor(){
//
//     this.type = 'bear'
//   }
//   says(say){
//     console.log(this.type + ' says ' + say);
//   }
// }
//
// class Grizzly extends Bear{
//   constructor(){
//     super()
//     this.type = 'grizzly'
//
//   }
// }
// let bear = new Grizzly();
// let bear = new Bear;
// bear.says('growl')





////////////// ARROW FUNCTIONS /////////////////////

// let teams = ['Giants' , 'Jets' , 'Yankees'].filter(function(team){
//   return team !== 'Yankees'
// })
// console.log(teams);
//
//
// let teams = ['Giants' , 'Jets' , 'Yankees'].filter((team) => team !== 'Yankees')
// console.log(teams);



//////////////// ARROW FUNCTIONS - THIS ///////////////////////////////

// class Bear {
//   constructor(){
//     this.type = 'bear'
//   }
//   says(say){
//     setTimeout( () => {
//       console.log(this.type + ' says ' + say)
//     }, 1000)
//   }
// }
//
// var bear = new Bear()
// bear.says()



////////////////// TEMPLATE STRINGS /////////////////////

// var team1 = 'Giants'
// var team2 = 'Jets'
// var teams = [
//   'giants',
//   'jets'
// ].join()
// console.log(team1);
// console.log(team2);
// console.log(teams);
//
// var sentence = "I love " + team1 + " And " + team2 + " !"
// console.log(sentence);
// let sentence = `I love ${team1} and ${team2} !`
// console.log(sentence);



////////////// DECONSTRUCTORS ///////////////////////

// let team1 = 'jets'
// let team2 = 'giants'
// var teams = {team1: team1, team2:team2} //native
// console.log(teams);
// let teams = {team1,team2} //es6
// console.log(teams);


/////////////// DEFAULT PAPAMETERS ////////////////////
//
// function bear(type = 'grizlly'){ //es6
//   //type = type || 'grizzly' //native
//   console.log(type);
// }
// bear();


////////////// MULTIPLE PARAMETERS /////////////////
//
// function bears (...types){
//   console.log(types);
// }
// bears('polar' , 'grizzly');
