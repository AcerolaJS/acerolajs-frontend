/**
 * Created by BorjaRFP on 18/4/15.
 */

angular.module('acerola').provider('config', function() {

    this.baseUrl = 'http://localhost:3000/';

    this.$get = function() {
        return {
            baseUrl: this.baseUrl
        }
    };
});
