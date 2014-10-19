var app = angular.module("FullStax");

app.controller('mainCtrl', function($scope, mainService){
    $scope.getFriends = function() {
        mainService.getFriends().then(function(data) {
            $scope.friends = data.data;
            console.log($scope.friends);
        });
    };

    $scope.addFriends = function() {
        mainService.addFriends($scope.newFriend);

        mainService.getFriends().then(function(data) {
            $scope.friends = data.data;
            console.log($scope.friends);
        });

        $scope.newFriend.name = "";
        $scope.newFriend.age = "";
        $scope.newFriend.met = "";
    };

    $scope.getFamily = function() {
        mainService.getFamily().then(function(data) {
            $scope.family = data.data;
            console.log($scope.family);
        });
    };

    $scope.addFamilyMember =function() {
        mainService.addFamilyMember($scope.newFamilyMember);

        mainService.getFamily().then(function(data) {
            $scope.family = data.data;
            console.log($scope.family);
        });

        $scope.newFamilyMember.name = "";
        $scope.newFamilyMember.age = "";
        $scope.newFamilyMember.relationship = "";
    };

    $scope.getActivities = function() {
        mainService.getActivities().then(function(data) {
            $scope.activities = data.data;
            console.log($scope.activities);
        });
    };

    $scope.addActivity = function() {
        mainService.addActivity($scope.newActivity)

        mainService.getActivities().then(function(data) {
            $scope.activities = data.data;
            console.log($scope.activities);
        });

        $scope.newActivity.name = "";
    }

    $scope.getMe = function() {
        mainService.getMe().then(function(data) {
            $scope.me = data.data;
            console.log($scope.me);
        });
    };
});