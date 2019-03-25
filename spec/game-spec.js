// import Game from './../src/game.js';
// import Tamagotchi from './../src/tamagotchi.js'
//
// describe('game', function(){
//   let game;
//
//   beforeEach(function(){
//     game = new Game();
//     jasmine.clock().install();
//   });
//
//   afterEach(function() {
//     jasmine.clock().uninstall();
//   })
//
//   it('tests whether the game is created', function(){
//     expect(game.timer).toEqual(0);
//     expect(game.isTicking).toEqual(false);
//   });
//
//   it('should start the timer and create a tamagotchi', function() {
//     game.start();
//     jasmine.clock().tick(20001);
//     expect(game.timer).toEqual(2);
//     expect(game.tamagotchi.name).toEqual("Tom");
//   });
//
//   it('should pause the game', function(){
//     game.start();
//     jasmine.clock().tick(20001);
//     game.pauseGame();
//     jasmine.clock().tick(30001);
//     expect(game.timer).toEqual(2);
//     expect(game.isTicking).toEqual(false);
//   });
//
//   it('should resume the game after a pause', function(){
//     game.start();
//     jasmine.clock().tick(20001);
//     game.pauseGame();
//     jasmine.clock().tick(30001);
//     game.resume();
//     jasmine.clock().tick(20001);
//     expect(game.timer).toEqual(4);
//     expect(game.isTicking).toEqual(true);
//   });
//
//
//
// });
