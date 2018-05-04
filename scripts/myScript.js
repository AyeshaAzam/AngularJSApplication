// creating module, module is like main() method
var myApp = angular.module("myModule", []);

/*
// controller is nothing but a javascript function
//creating a controller
var myController = function($scope){ // passing scope object
  $scope.message = "Hello Ayesha!";
};


//Register our controller with our module which is myApp
myApp.controller("myController", myController);  */

//instead of above we can do in this way to
myApp.controller("myController", function($scope){
      // this is for likes and dislikes technology task
      var ProgrammingLang = [
         {name: "C#", likes: 0, dislikes: 0},
         {name: "AngularJS", likes: 0, dislikes: 0},
         {name: "HTML/CSS", likes: 0, dislikes: 0},
         {name: "SQL", likes: 0, dislikes: 0},
         {name: "javascript", likes: 0, dislikes: 0},
         {name: "JAVA", likes: 0, dislikes: 0},
         {name: "C++", likes: 0, dislikes: 0},
         {name: "NodeJS", likes: 0, dislikes: 0},
         {name: "Python", likes: 0, dislikes: 0},
         {name: "ASP.Net", likes: 0, dislikes: 0},
      ];

   // model added
    $scope.ProgrammingLang = ProgrammingLang;

    //functions
    $scope.incrementLikes = function(languages){
      languages.likes++;
    };

    $scope.incrementDislikes = function(languages){
      languages.dislikes++;
    };
});
