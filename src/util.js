import { v4 as uuidv4 } from 'uuid';

function MusicData() {
   
   return [ 
        {
            name: "Yesterday",
            artist: "chief.",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/6e722fd3ec0283a30b55e16b5c7228f311555133-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ['#EC935B', '#937245'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8512"

        },

        {
            name: "Jeux D'eau",
            artist: "sadtoi",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/6e722fd3ec0283a30b55e16b5c7228f311555133-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#EC935B', '#937245'],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8505",
        },

        {
            name: "Going Thru My Phone",
            artist: "Akon",
            cover: "https://olagist.net/wp-content/uploads/2016/01/Akon.jpg",
            id: uuidv4(),
            active: false,
            color: ['#201C24', '#FEFDFF'],
            audio: "https://olagist.net/wp-content/uploads/2016/03/Akon_-_Going_Thru_My_Phone_Olagist.com_.mp3?_=1",

        }
    ]
}

export default MusicData;