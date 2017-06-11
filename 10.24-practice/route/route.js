angular.module('myRoute',['ui-router'])
    .config(function($stateProvider,$urlRouteProvider){
        $stateProvider.state('index',{
            templateUrl:'model/shou_ye.html'
        })
    });