
angular.module('calendarDemoApp', [])
    
    .controller ('AppCtrl', function ($scope) { 
    
    })

    .directive ('datepicker', function () {
        return {
            restrict: 'E',
            templateUrl: 'datepicker.directive.html',
            controller: function ($scope, $element, $attrs) {
                
                var calendarDate = CalendarRange.prepareDate(new Date());
                $scope.selectedItem= calendarDate.month; 
                $scope.selectedYear= calendarDate.year;
                $scope.years = [];
                $scope.date = date;
                
                var date = calendarDate.year;   
                for (var i = date; i < date + 40; i++) {
                    $scope.years.push(i);
                }
                for (var i = date -1; i > date - 40; i-- ) {
                    $scope.years.unshift(i);
                }
                
                $scope.getYearRange = function () {
                    var d = new Date();
                    d.setYear ($scope.selectedYear); 
                    this.range = CalendarRange.getMonthlyRange(d);
                }          
               
                $scope.getRange = function () {
                    var d = new Date();
                    d.setMonth ($scope.selectedItem); 
                    this.range = CalendarRange.getMonthlyRange(d);
                }      
                
                $scope.months = [{name: 'January', property: 0 },{ name: 'February', property: 1 },{ name: 'March', property: 2 }, {name:'April', property: 3}, {name: 'May', property: 4}, {name: 'June', property: 5}, {name: 'July', property: 6}, {name:'August', property: 7}, {name: 'September', property: 8}, {name: 'October', property: 9}, {name: 'November', property: 10}, {name: 'December', property: 11}];
            }
        }
    })
    .directive('calendar', function () {
        return {
            restrict: 'E',
            templateUrl: 'calendar.directive.html',
            require:'^?datepicker',
            link: function (scope, el, attr, datePickerCtrl) {               
                   scope.range = datePickerCtrl.range ? datePickerCtrl.range : CalendarRange.getMonthlyRange(new Date ());
                console.log(scope.range);
                
                console.log(scope.range.start.getMonth());
            }
        }
    });

