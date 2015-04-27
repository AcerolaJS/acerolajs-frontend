/**
 * Created by BorjaRFP on 11/4/15.
 */

angular.module('acerola.user', [
    'ui.router'
]).config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/user/views/login/login.html",
            controller: "LoginController"
        });

});
