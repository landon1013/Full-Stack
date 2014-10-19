var app = angular.module("FullStax");

app.service("mainService", function($http) {
    this.getFriends = function() {
        return $http({
            method: "GET",
            url: "http://localhost:3000/friends"
        });
    };

    this.addFriends = function(newFriend) {
        return $http({
            method: "POST",
            url: "http://localhost:3000/friends/new",
            data: {
                name: newFriend.name,
                age: newFriend.age,
                met: newFriend.met
            }
        })
    };

    this.getFamily = function() {
        return $http({
            method: "GET",
            url: "http://localhost:3000/family"
        });
    };

    this.addFamilyMember = function(newFamilyMember) {
        return $http({
            method: "POST",
            url: "http://localhost:3000/family/new",
            data: {
                name: newFamilyMember.name,
                age: newFamilyMember.age,
                relationship: newFamilyMember.relationship
            }
        })
    };

    this.getActivities = function() {
        return $http({
            method: "GET",
            url: "http://localhost:3000/activities"
        });
    };

    this.addActivity = function(newActivity) {
        return $http({
            method: "POST",
            url: "http://localhost:3000/activities/new",
            data: {
                name: newActivity.name
            }
        })
    };

    this.getMe = function() {
        return $http({
            method: "GET",
            url: "http://localhost:3000/me"
        });
    };
});