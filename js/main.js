var app = angular.module("myApp", []);

app.controller("AssetsController", function ($scope){

    $scope.interest = .0043;
    $scope.empty = "";
    $scope.balance = 20434;
    $scope.baron = "Von Bonbon";
    $scope.inheritance = 2500000;
    $scope.newBalance = ($scope.balance + $scope.inheritance) * (1 + $scope.interest);
    $scope.statement = "The current assets of Baron " + $scope.baron + " stand at: $" +  $scope.newBalance.toFixed(2);

    $scope.somethingCrayCray = function(){
        console.log($scope.statement);
        return  $scope.statement;
    };

});

app.controller("NameController", function ($scope){

    $scope.first = "Joel";
    $scope.middle = "Thomas";
    $scope.last = "Miller";

    $scope.getFirst = function(){
        return $scope.first;
    };

    $scope.getMiddle = function(){
        return $scope.middle;
    };

    $scope.getLast = function(){
        return $scope.last;
    };

    $scope.getFullName = function(){
        return $scope.first + " " + $scope.middle + " " + $scope.last;
    };

    $scope.getDisplayName = function(){
        return $scope.first + " " + $scope.middle + " " + $scope.last;
    };

});



/*
 app.controller('PasswordController', function PasswordController($scope) {
 $scope.password = 'test';
 $scope.grade = function() {
 var size = $scope.password.length;
 if (size > 8) {
 $scope.strength = 'strong';
 } else if (size > 3) {
 $scope.strength = 'medium';
 } else {
 $scope.strength = 'weak';
 }
 };
 });*/
