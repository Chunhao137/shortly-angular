angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.loading = false; 

  $scope.link = {}; 
  
  $scope.addLink = function(){
  	$scope.loading = true; 
  	//$scope.link.url = undefined;
     Links.addLink($scope.link).then(function(){
     	$scope.loading = false;
     })
  }
});
