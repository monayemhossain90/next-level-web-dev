"use strict";
// rest operator
const greetFriends = (...friends) => {
    friends.map((friend) => {
        console.log(`Hi ${friend}`);
    });
};
greetFriends("rahim", "karim");
