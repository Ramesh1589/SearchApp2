(function(){
    angular.module("jobs")
    .controller("jobCtrl",["$scope","jobSvc",function($scope,jobSvc){
        jobSvc.getJobs()
        .then(function(response){
        $scope.jobs = response.data.jobs;
        })
        .catch(function(response){
        $scope.showError=response;
        });
    }]);
    
   /*.controller("engineeringCtrl",["$scope","engineeringSvc",function($scope,engineeringSvc){
        engineeringSvc.getEngineeringjobs()
        .then(function(response){
        $scope.engineeringjobs = response.data.engineeringjobs;
        })
        .catch(function(response){
        $scope.showError=response;
        });
    }]);*/
    
    
    
})();





