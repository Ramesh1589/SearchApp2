

(function(){
    angular.module("home")
                .controller("homeCtrl",["$scope","homeSvc",

                    function($scope,homeSvc){
                         homeSvc.getHome()
                    .then(function(response){
                          $scope.home = response.data.home;
                        })
                    .catch(function(response){
                          $scope.showError=response;
                     });   
                 
                      $scope.getDetails = function (item) {
                             debugger;
                             $scope.detail = {};
                             $scope.detail = item;

                         }

             }]);

         


    
})();