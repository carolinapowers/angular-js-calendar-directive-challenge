
angular.module('calendarDemoApp', [])
    
    .controller ('AppCtrl', function ($scope) { 
    
    })

    .directive ('datepicker', function () {
        return {
            restrict: 'E',
            templateUrl: 'datepicker.directive.html',
            controller: function ($scope, $element, $attrs) {
                
                $scope.selectedItem= {}; 
                
                $scope.months = [{name: 'January', property: 0 },{ name: 'February', property: 1 },{ name: 'March', property: 2 }, {name:'April', property: 3}, {name: 'May', property: 4}, {name: 'June', property: 5}, {name: 'July', property: 6}, {name:'August', property: 7}, {name: 'September', property: 8}, {name: 'October', property: 9}, {name: 'November', property: 10}, {name: 'December', property: 11}];
                
              
//                var d = new Date();
//                d.setMonth ($scope.selectedItem.property); 
//                $scope.range = CalendarRange.getMonthlyRange(d);             
               
                $scope.submit = function () {
                var d = new Date();
                d.setMonth ($scope.selectedItem.property); 
              this.range = CalendarRange.getMonthlyRange(d);
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
                //scope.range = CalendarRange.getMonthlyRange(datePickerCtrl.d);
               //console.log(datePickerCtrl.d);
                scope.range = datePickerCtrl.range;
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

