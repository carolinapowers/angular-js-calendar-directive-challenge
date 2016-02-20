
angular.module('calendarDemoApp', [])
    
    .controller ('AppCtrl', function ($scope) { 
    
    })

    .directive ('datepicker', function () {
        return {
            restrict: 'E',
            templateUrl: 'datepicker.directive.html',
            controller: function ($scope, $element, $attrs) {
                $scope.month = 5;    
                
                this.d = new Date();
                this.d.setMonth ($scope.month);
               
                $scope.save = function(model) {
                    this.d = new Date();
                    this.d.setMonth (model);
                    $scope.see = this.d.setMonth ($scope.month); 
                }
                  
            }
        }
    })
    .directive('calendar', function () {
        return {
            restrict: 'E',
            templateUrl: 'calendar.directive.html',
            require:'^?datepicker',
            link: function (scope, el, attr, datePickerCtrl) {             
                scope.range = CalendarRange.getMonthlyRange(datePickerCtrl.d);
               console.log(datePickerCtrl.d);
                var calendarDate = CalendarRange.prepareDate(new Date());
                console.log(calendarDate);
                
                function changeMonth () {
                    calendarDate.month = 2;
                    return calendarDate.month;
                }
                
              
                //console.log(d)
                console.log(new Date());
                console.log(scope.range);
                
            }
        }
    });

