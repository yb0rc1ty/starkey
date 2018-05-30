angular.module('OrderCloud-Carousel', ['ngAnimate']);

angular.module('OrderCloud-Carousel')
    .directive('customcarousel', customcarousel)
    .controller('customCarouselCtrl', customCarouselCtrl)
;

function customcarousel() {
    var directive =  {
        restrict: 'E',
        template: template,
        controller: customCarouselCtrl
    };
    return directive;

    function template() {
        return [
            '<style>',
            '.carousel-inner a[ng-href=""]:hover{cursor: default}',
            '.carousel-control.left {background-image: none;}',
            '.carousel-control.right {background-image: none;}',
            '</style>',
            '<carousel interval="myInterval">',
            '<slide ng-repeat="slide in slides" active="slide.active">',
            '<a style="max-width: 100%; height: auto;" ng-href="{{slide.link}}" target="{{slide.link.indexOf(\'http\') > -1 ? \'_blank\' : \'_self\'}}">',
            '<img ng-src="{{slide.image}}">',
            '</a>',
            '<div class="carousel-caption">',
            '<h4 ng-show="slide.text.toUpperCase() != \'NONE\'">{{slide.text}}</h4>',
            '</div>',
            '</slide>',
            '</carousel>'
        ].join('');
    }
}

customCarouselCtrl.$inject = ['$scope', '$animate', '$filter'];
function customCarouselCtrl($scope, $animate, $filter) {
    $animate.enabled(false);
    $scope.slides = []; //reset the slide counter
    $scope.myInterval = 5000; //5 second interval
    $scope.$watch('user',function(val){
        if(!val) return;
        $scope.slides = $scope.customSlides;
    });
}
