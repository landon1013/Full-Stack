var app = angular.module("FullStax");

app.controller('mainCtrl', function($scope, mainService){
    $scope.getFriends = function() {
        mainService.getFriends().then(function(data) {
            $scope.friends = data.data;
            console.log($scope.friends);
        });
    };

    $scope.getFamily = function() {
        mainService.getFamily().then(function(data) {
            $scope.family = data.data;
            console.log($scope.family);
        });
    };

    $scope.getActivities = function() {
        mainService.getActivities().then(function(data) {
            $scope.activities = data.data;
            console.log($scope.activities);
        });
    };

    $scope.getMe = function() {
        mainService.getMe().then(function(data) {
            $scope.me = data.data;
            console.log($scope.me);
        });
    };

    $scope.addFriends = function() {
        mainService.addFriends($scope.newFriend);

        mainService.getFriends().then(function(data) {
            $scope.friends = data.data;
            console.log($scope.friends);
        });

        $scope.addFriendName = "";
        $scope.addFriendAge = "";
        $scope.addFriendMet = "";
    }
});