
angular.module('calendarDemoApp', [])
    
    .controller ('AppCtrl', function ($scope) { 
        $scope.hello ='hello world';
    
  
    })
    
    .directive('calendar', function () {
        return {
            restrict: 'E',
            templateUrl: 'calendar.directive.html',
            link: function (scope) {
                scope.range = CalendarRange.getMonthlyRange(new Date());
                console.log(scope.range);
            }
        }
    })

