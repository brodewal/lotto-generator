
Template.lotto.helpers({

  digits: function () {
    Session.set('digits',6);
    return (Session.get('digits'));
  },

  digitsMax: function () {
    Session.set('digitsMax', 49);
    return (Session.get('digitsMax'));
  },


  numbers: function ( ) {
    var digit = Session.get('digits');
    var maximum = Session.get('digitsMax');

    var array = [0,0,0,0,0,0];
    for (i = 0; i < digit; i++){
      array[i] = Math.floor(Math.random() * maximum + 1)
      for (j = 0; j < i; j++){
        if (array[j] === array[i]){
          array[i] = Math.floor(Math.random() * maximum + 1);
          j = 0;
        }
      }
    }
    array.sort( function (a, b) {
      //not only does js let you define your own sorting parameters,
      //but you are forced to in node.js.
      return a - b;
    });

    Session.set('numbers', array);

    return Session.get('numbers');


  },

  bonus: function () {
    maximum = Session.get('digitsMax');
    num = Math.floor(Math.random() * maximum + 1);
    a = Session.get('numbers');

    for (i = 0; i < a.length; i++){
      if (a[i] === num){
        num = Math.floor(Math.random() * maximum + 1);
        a = 0;
      }
    }
    Session.set('bonus', num);

    return Session.get('bonus');
  }

});
