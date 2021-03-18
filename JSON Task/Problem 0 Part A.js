var cat = {
    name: "Fluffy",
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps'],
    weight: 3
    }
    ]
   }

   cat.height=8;
   cat.weight=9;

   cat.name="Fluffyy";

   console.log(cat.catFriends[0].activities);
   console.log(cat.catFriends[1].activities);

   console.log((cat.catFriends[0].weight)+(cat.catFriends[1].weight));

   console.log((cat.catFriends[0].activities.length)+(cat.catFriends[1].activities.length));
   
   cat.catFriends[0].activities.push('take a nap','drink milk');
   cat.catFriends[1].activities.push('eat biscuit','drink water');

   cat.catFriends[0].furcolor='grey';
   console.log(cat);

