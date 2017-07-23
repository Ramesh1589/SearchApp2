var myApp = angular.module("myApp",['ui.router']);

myApp.controller("mainController",function($scope){
    console.log("It works");
});

myApp.config(function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('home',{
        url: '/',
        templateUrl: 'app/views/home.html',
        controller:'homeController'
    }).state('about',{
        url: '/about',
        templateUrl: 'app/views/home.html',
        controller:'aboutController'
    }).state('contact',{
        url: '/contact',
        templateUrl: 'app/views/contact.html',
        controller:'contactController'
    }).state('services',{
        url: '/services',
        templateUrl: 'app/views/services.html',
        controller:'serviceController'
    }).state('services.services1',{
        url: '/services1',
        templateUrl: 'app/views/services1.html',
    }).state('services.services2',{
        url: '/services2',
        templateUrl: 'app/views/services2.html',
    }).state('services.services3',{
        url: '/services3',
        templateUrl: 'app/views/services3.html',
    });
    
});


myApp.controller("homeController",function($scope){
    console.log("I am in home controller");
});

myApp.controller("aboutController",function($scope){
    console.log("I am in about controller");
});

myApp.controller("contactController",function($scope){
    console.log("I am in contact controller");
});

myApp.controller("serviceController",function($scope){
    console.log("I am in services controller");
});