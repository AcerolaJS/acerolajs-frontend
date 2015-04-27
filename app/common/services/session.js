/**
 * Created by BorjaRFP on 18/4/15.
 */

angular.module('acerola')
    .factory('session', ['Restangular',function(Restangular) {

        var doLogin = function(username, password){
            var data = {
                email: username,
                password: password
            };
            return Restangular.all('login').post(data);

        };

        var initSession = function(data){
            var dataUser = {
                _id: data._id,
                email: data.email,
                name: data.name,
                surname: data.surname
            };

            localStorage["sessionInfo"] = angular.toJson(dataUser);
            localStorage["tokenSession"] = data.session_token;

        };

        var closeSession = function(){
            localStorage.clear();
        };

        return {
            doLogin: doLogin,
            initSession: initSession,
            closeSession: closeSession
        }
    }]);
