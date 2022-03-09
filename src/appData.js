import { v4 as uuidv4 } from "uuid";
function appData() {
  return [
    {
      id: uuidv4(),
      name: "Solstice",
      artist: "Middle School, Henry Gritton",
      cover:
        "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/60b4b8806262736151296ccc_Chillhop-E2021-02-Summer-Album-Digital-Cover-v01%201-p-500.jpeg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16175",
      color: ["#E87052", "#892D42"],
      active: true,
    },
    {
      id: uuidv4(),
      name: "Evening Stroll",
      artist: "xander, Blue Wednesday",
      cover:
        "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/60b4b8806262736151296ccc_Chillhop-E2021-02-Summer-Album-Digital-Cover-v01%201-p-500.jpeg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=16178",
      color: ["#FABE88", "#196344"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "By Chance",
      artist: "SwuM",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15224",
      color: ["#253333", "#D1A985"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Roses n Flames",
      artist: "C Y G N",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14985",
      color: ["#433158", "#5C2B2A"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Runaway",
      artist: "Blue Wednesday, Magnus Klausen",
      cover:
        "https://uploads-ssl.webflow.com/5fc4bca9bd65e8f2bf87f576/605072dd8914772a1df825a9_ow9bl5athaeho9m-p-500.jpeg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12136",
      color: ["#3AA49A", "#EB8D75"],
      active: false,
    },
    {
      id: uuidv4(),
      name: "Kinsfolk",
      artist: "Aarigod",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12997",
      color: ["#759648", "#13160E"],
      active: false,
    },
   
  ];
}
export default appData;
