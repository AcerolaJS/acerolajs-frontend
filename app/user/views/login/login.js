/**
 * Created by BorjaRFP on 11/4/15.
 */

angular.module('acerola.user').controller('LoginController', ['$scope', 'session', 'errorManage', function($scope, session, errorManage){

    $scope.login = function(){
        session.doLogin($scope.username, $scope.password) .
            then(function(response){
                session.initSession(response);
            })
            .catch(function(response){
                errorManage.manage(response, response.status, $scope, 'login');
            });

    };

    var init = function(){
        //Close last session
        session.closeSession();

        //init variables
        $scope.username = "borja.rfp@gmail.com";
        $scope.password = "aaa";

        //alerts definition
        $scope.forms = [];
        $scope.forms['login'] = {};
        $scope.forms['login'].alerts = [];
        $scope.closeAlert = function(form, index) {
            $scope.forms[form].alerts[index].show = false;
        };
    };

    init();


}]);


