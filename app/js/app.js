(function appIife() {
    const app = angular.module('angularkeep', ['ngRoute']);

    function routing($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/Home', {
                templateUrl: 'home.html',
            })
            .when('/NewNote', {
                templateUrl: 'newnote.html',
            })
            .when('/NewList', {
                templateUrl: 'newlist.html',
                controller: 'newListController',
            })
            .otherwise({ redirectTo: '/Home' });
    }

    app.config(routing);
}());
