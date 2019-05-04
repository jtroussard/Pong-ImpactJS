ig.module(
  'game.entities.paddle-cpu'
)
.requires(
  'game.entities.paddle',
  'game.entities.puck'
)
.defines(function() {
  'use strict';

  window.EntityPaddleCpu = window.EntityPaddle.extend({

    //animSheet: new ig.AnimationSheet( 'media/paddle-yellow.png', 64, 128 ),

    update: function() {

      // puck is referenced in AI logic
      var puck = ig.getGameEntitiesByType ( window.EntityPuck )[0];

      // simple AI
      if ( puck.pos.y + puck.size.y/2 > this.pos.y + this.size.y/2 ) {
        this.vel.y = -100;
      } else {
        this.vel.y = 100;
      }


      this.parent();
    }
  });
});