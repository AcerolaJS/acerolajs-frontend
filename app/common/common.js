/**
 * Created by BorjaRFP on 11/4/15.
 */

angular.module('acerola', [
        'ui.router',
        'acerola.user',
        'ui.bootstrap',
        'restangular'
    ]).config(function($urlRouterProvider, RestangularProvider, configProvider){

    $urlRouterProvider.otherwise("/login");

    RestangularProvider.setBaseUrl(configProvider.baseUrl);


});


var Acerola = {

    init: function() {
        this.animationClick();
        this.animationHover();
        $('.backdrop').addClass("hide");

    },
    animationHover: function() {
        $('.animationHover').each(function() {
            console.log($(this));
            var animation = $(this).data('hover');
            var element = $(this);
            element.hover(
                function() {
                    element.removeClass($(this).data('click'));
                    element.addClass('animated ' + animation);
                },
                function() {
                    //wait for animation to finish before removing classes
                    window.setTimeout(function() {
                        element.removeClass('animated ' + animation);
                    }, 2000);
                }
            );
        });

    },
    animationClick: function() {
        $('.animationClick').each(function() {
            var animation = $(this).data('click');
            var element = $(this);
            element.click(
                function() {
                    element.removeClass($(this).data('hover'));
                    element.addClass('animated ' + animation);
                    //wait for animation to finish before removing classes
                    window.setTimeout(function() {
                        element.removeClass('animated ' + animation);
                    }, 2000);
                }
            );


        });
    }
}

function showDropDownForm(id, action) {
    if (action == "up") {
        $("#" + id).slideUp();
    } else if (action == "down") {
        $("#" + id).slideDown();
    }
}