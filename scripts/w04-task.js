/* LESSON 4 - Programming Tasks */

/* Profile Object  */
/* Populate Profile Object with placesLive objects */

let myProfile = {
    name : 'Joe Candelario',
    photo: {
        src: "images/me.png",
        alt: "My Profile Picture"
    },
    favoriteFoods : ["Chiken", "Rice", "Encebollado" ],
    hobbies: ["Play soccer", "Read", "Watch Tv"],
    placesLived: []
};



/* DOM Manipulation - Output */
/* Name */

document.querySelector('#name').innerHTML = `My name is <em>${myProfile.name}<em>`

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.src;
document.querySelector('#photo').alt = myProfile.photo.alt;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item =>{
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(item =>{
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.push(
    {
        place: 'Guayaquil, Ecuador',
        length: '24 year'
    }
    );

myProfile.placesLived.push(
    {
        place: 'Durazno, Uruguay',
        length: '1 year'
    }
);
myProfile.placesLived.push(
    {
        place: 'Montevideo, Uruguay',
        length: '1 year'
    }
);

myProfile.placesLived.forEach(place => {
    const dtElement = document.createElement('dt');
    const ddElement = document.createElement('dd');

    dtElement.textContent = place.place;
    ddElement.textContent = place.length;
    
    document.querySelector('#places-lived').appendChild(dtElement);
    document.querySelector('#places-lived').appendChild(ddElement);
});


