(function(){
    angular.module("realestate")
    .controller("realestateCtrl",["$scope","realestateSvc",
                           function($scope,realestateSvc){
    realestateSvc.getRealestate()
    .then(function(response){
        $scope.realestate = response.data.realestate;
    })
    .catch(function(response){
        $scope.showError=response;
    });
        
    /*Get Details Aftr Clicking Button */
     $scope.getDetails = function (item) {
            $scope.detail = {};
            $scope.detail = item;

        }
     /*End Of get detail function*/   

    }]);
})();