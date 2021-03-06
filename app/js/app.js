'use strict';

//var testing = window.location.search.replace("?testing=", "");
var testing = 'true';

var myApp = angular.module('myApp', ['ngResource']);

//All of the overrides for testing the controllers.
//This is used to simulate the backend. 
//See http://docs.angularjs.org/#dsq-login-google for details
if (testing=='true') {
	var myAppDev = angular.module('myApp', ['ngResource','ngMockE2E']);
	
	myAppDev.run(function($httpBackend) {

  		//var player = {name: 'Sandra'};
  		var user = {nickname: "Zen"};

  		$httpBackend.whenGET('/api/user').respond(user); 

	});
}
