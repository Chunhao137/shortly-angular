angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
	//Links is a factory that we find in services.js
  // Your code here
  $scope.data = []; 
  $scope.getLinks = function(){
  	 Links.getLinks().then(function (data){

  	 	$scope.data.links = data; 
  	 });
  }
  $scope.getLinks(); 
});
