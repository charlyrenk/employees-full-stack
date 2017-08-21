var app = angular.module('EmployeeApp', []);

app.controller('EmployeeController', ['$http', function ($http) {
    console.log('Employee Controller has been loaded');
    var self = this;
    self.employees = [];
    self.total = 0;
    self.getEmployees = function () {
        $http({
            method: 'GET',
            url: '/employees'
        }).then(function (response) {
            console.log(response.data);
            for(i = 0; i < response.data.length; i++){
                var salary = response.data[i].annual_salary;
                self.total = parseInt(self.total) + parseInt(salary);
            };
            self.employees = response.data;
            
        });
    };
    self.postNewEmployees = function () {
        $http({
            method: 'POST',
            url: '/employees',
            data: self.newEmployee
        }).then(function (response) {
            self.getEmployees();
        })
    }
    self.getEmployees();

    self.total = '0'
}]);