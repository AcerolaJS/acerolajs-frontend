/**
 * Created by BorjaRFP on 19/4/15.
 */

angular.module('acerola').service('errorManage', function(errorCodes) {
    this.manage = function(data, status, $scope, form) {
        console.log("status -> " + status + "");
        try {
            if (status == errorCodes["ValidationError"]) {

                angular.forEach(data.response.errors, function(value, key) {
                    $scope.forms[form].alerts[key] = {};
                    $scope.forms[form].alerts[key].type = "danger";
                    $scope.forms[form].alerts[key].msg = value;
                    $scope.forms[form].alerts[key].show = true;
                });
            } else if (status == errorCodes["Unauthorize"]) {

                    $scope.forms[form].alerts[0] = {};
                    $scope.forms[form].alerts[0].type = 'danger';
                    $scope.forms[form].alerts[0].msg = errorCodes[status].description;
                    $scope.forms[form].alerts[0].show = true;

            } else {
                $scope.forms[form].alerts[0] = {};
                $scope.forms[form].alerts[0].type = 'danger';
                $scope.forms[form].alerts[0].msg = errorCodes[status].description;
                $scope.forms[form].alerts[0].show = true;
            }
        } catch (err) {
            $scope.forms[form].alerts[0] = {};
            $scope.forms[form].alerts[0].type = 'danger';
            $scope.forms[form].alerts[0].msg = errorCodes["99999"].description;
            $scope.forms[form].alerts[0].show = true;
        }
    }
});