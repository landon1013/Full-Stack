var familyMembers = [
    {
        name: "Lori",
        age: 60,
        relationship: "Mom"
    },
    {
        name: "Skyler",
        age: 30,
        relationship: "Brother"
    },
    {
        name: "Lacey",
        age: 23,
        relationship: "Sister"
    },
    {
        name: "Blaze",
        age: 18,
        relationship: "Brother"
    }
];

module.exports.getFamilyMembers = function() {
    return familyMembers;
};

module.exports.addFamilyMembers = function(newFamilyMember) {
    familyMembers.push(newFamilyMember);
};

var friends = [
    {
        name: "Mathew Ellenberger",
        age: 23,
        met: 1999
    },
    {
        name: "Donovan Terranova",
        age: 21,
        met: 2013
    },
    {
        name: "Brittany Quinn",
        age: 27,
        met: 2013
    }


];

module.exports.getFriends = function() {
    return friends;
};

module.exports.addFriends = function(newFriend) {
    friends.push(newFriend);
};

var activities = [
    {
        name: "Coding"
    },
    {
        name: "Photography"
    },
    {
        name: "Games"
    }
];

module.exports.getActivities = function() {
    return activities;
};

module.exports.addActivity = function(newActivity) {
    activities.push(newActivity);
};

var me = {
    name: "Landon",
    height: "6' 2\"",
    age: 25,
    favMovie: "The Guardian",
    favArtist: "Van Gough",
    favFood: "Curry"
};

module.exports.getMe = function() {
    return me;
};
