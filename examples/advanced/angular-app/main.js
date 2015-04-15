var app = angular.module('MyApp', ['ngRoute']);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider
    .when(
    '/',
    {
      templateUrl: './templates/home.html'
    })
    .when(
    '/help',
    {
      templateUrl: './templates/help.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);