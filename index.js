require("babel-core")


//////////////////////////////////////////////////////////
// var type = 'Hello'
//
//
//
// while(true){
//   let type = 'World'
//   console.log(type);
//   break
// }
//
// console.log(type);























//////////////////////////////////////////////////////////
// const PI = Math.PI
//
// PI = 123
// const moment = require('moment')


























//////////////////////////////////////////////////////////
// class Bear {
//   constructor(){
//     let x = 2;
//     let y = 5;
//
//     this.type = 'bear'
//     this.x = x;
//     this.y = y;
//   }
//   says(say){
//     console.log(this.type + ' says ' + say);
//   }
//   logx(x){
//     console.log(this.x);
//   }
// }
//
// class Grizzly extends Bear{
//   constructor(){
//     super()
//     this.type = 'grizzly'
//     this.x = 3;
//
//   }
// }
// let bear = new Grizzly();
// let bear = new Bear;
// bear.says('growl')
// function Bear(){
//
// }
// // new Bear() class
// // Bear() function

















//////////////////////////////////////////////////////////

// let teams = ['Giants' , 'Jets' , 'Yankees'].filter(function(team){
//   return team !== 'Yankees'
// })
// console.log(teams);
//
//
// let teams = ['Giants' , 'Jets' , 'Yankees'].filter((team) => team !== 'Yankees')
// console.log(teams);








//////////////////////////////////////////////////////////////////

// class Bear {
//   constructor(){
//     this.type = 'bear'
//   }
//   says(say){
//     setTimeout(function () {
//       console.log(this.type + ' says ' + say)
//     }, 1000)
//   }
// }
//
// var bear = new Bear()
// bear.says()



////////////////////////////////////////////////////////////////

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
//backticks

//////////////////////////////////////////////////////////////

// let team1 = 'jets'
// let team2 = 'giants'
// let teams = {team1: team1, team2:team2}
// console.log(teams);

//////////////////////////////////////////////////////////
//
// function bear(type){
//   //type = type || 'grizzly'
//   console.log(type);
// }
// bear();


///////////////////////////////////////////////////////
//
// function bears (types){
//   console.log(types);
// }
// bears('polar' , 'grizzly');
