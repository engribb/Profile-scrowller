const data = [
  {
    name: 'john Doe',
    age: '32',
    gender: 'male',
    lookingfor: 'female',
    location: 'Lugbe FHA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
{
  name: 'jen smith',
  age: '24',
  gender: 'female',
  lookingfor: 'men',
  location: 'miami FL',
  image: 'https://randomuser.me/api/portraits/women/85.jpg'
},
{
  name: 'William Johnson',
  age: '32',
  gender: 'male',
  lookingfor: 'female',
  location: 'lynn MA',
  image: 'https://randomuser.me/api/portraits/men/81.jpg'
},
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// Next Event 
document.getElementById('next').addEventListener('click',nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
 if(currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML = `
  <ul class="list-group">
  <li class="list-group-item">Name: ${currentProfile.name}</li>
  </ul>
  <li class="list-group-item">Age: ${currentProfile.age}</li>
  </ul>
  <li class="list-group-item">Location: ${currentProfile.location}</li>
  </ul>
  <li class="list-group-item">preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
  </ul>
 `;

 document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
} else {
//  No more profiles
 window.location.reload();
}
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

return {
  next: function() {
    return nextIndex < profiles.length ? { value: profiles
   [nextIndex++], done: false } : {done: true}
  }
};
}