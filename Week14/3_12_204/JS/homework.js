const artists = [
    {name:"Michael Jackson", songs:["Smooth Criminal", "Billie Jean", "Beat It","Earth song"]},
    {name:"Billie Eilish",songs:["Bad Guy" , "Lovely" , "Lunch" , "Chihiro"]},
    {name:"Kairat Nurtas",songs:["Auyrmaydy Zhurek", "Ol sen emes"]}
];

console.log(artists);

artists.filter(artis => artis.name === "Kairat Nurtas")[0].songs[1]="Baika";

console.log(artists);

let Michaels=artists.filter(artis => artis.name === "Michael Jackson")[0];

console.log(Michaels.songs[Michaels.songs.length-1])

console.log(artists.flatMap(artis => artis.songs).filter(song => song.length<7))
