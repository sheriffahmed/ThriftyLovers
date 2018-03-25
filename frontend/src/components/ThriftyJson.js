const Dummy = {
    firstName: 'John',
    lastName: 'Doe',
    userId: 1,
    username: "ThriftyLover1",
    password: "ld+kjdujfef-937&%3mdfuQ*~",
    age: 23,
    gender: "male",
    pictures: ['123.jpg','456.png','789.gif'],
    pref: {
        
        genderPref: "female",
        minAge: 20,
        maxAge: 25,
        eventIds: [1,2,3],
    }
}

const Dummy2 = [
    {
        firstName: 'John',
        lastName: 'Doe',
        userId: 1,
        username: "ThriftyLover1",
        password: "ld+kjdujfef-937&%3mdfuQ*~",
        age: 23,
        gender: "male",
        pictures: ['123.jpg','456.png','789.gif'],
        pref: {
            
            genderPref: "female",
            minAge: 20,
            maxAge: 25,
            eventIds: [1,2,3],
        }
    },
    {
        firstName: 'Jane',
        lastName: 'Letty',
        userId: 2,
        username: "ThriftyLover2",
        password: "kdie2830*6446%73523f",
        age: 21,
        gender: "female",
        pictures: ['abc.jpg','def.png','ghi.gif'],
        pref: {
            
            genderPref: "male",
            minAge: 18,
            maxAge: 25,
            eventIds: [1,2,3],
        }
    },
    {
        firstName: 'Steve',
        lastName: 'Johnson',
        userId: 3,
        username: "ThriftyLover3",
        password: "95%3$#!2dfj%3djhf",
        age: 277,
        gender: "male",
        pictures: ['tube.jpg','blood.png','tekashi.gif'],
        pref: {
            
            genderPref: "any",
            minAge: 27,
            maxAge: 30,
            eventIds: [1,2,3],
        }
    },
    {
        firstName: 'Justine',
        lastName: 'Flower',
        userId: 4,
        username: "ThriftyLover4",
        password: "348kf&$jhef8=+3rer39r",
        age: 28,
        gender: "female",
        pictures: ['div.jpg','let.png','var.gif'],
        pref: {
            
            genderPref: "female",
            minAge: 24,
            maxAge: 29,
            eventIds: [1,2,3],
        }
    }
]

const getDummy = () => Dummy;
const getDummy2 = () => Dummy2;

export default getDummy2

