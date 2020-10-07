
let randomIndex;
let button;
let animating = false;
let face = [];
let imageCounter = 1;
let first =


[
  {
  first: "Ju",
  middle: "-Yeong",
  last: "Kang",
  meaning: "The glory of the Lord."
  },
  {
  first: "Ji ",
  middle: "-Hye",
  last: "Choi",
  meaning:"Grace."
  },
  {
  first: "Jae",
  middle: "-Min",
  last:  "Lee",
  meaning:"Brilliant and bright person."
  },
  {
  first: "Hyeon",
  middle: "-Seo",
  last: "Kim",
  meaning:"Noble person."
  },
  {
  first: "Yeon",
  middle: "-Jae",
  last: "Park",
  meaning:"Shining gem stone."
  },
  {
  first: "Hyo",
  middle: "-Jin",
  last:"Jo",
  meaning:"Sincere virtue."
  },
  {
  first: "Do",
  middle: "-Bin",
  last:"Yun",
  meaning:"benefit from one's ancestors."
  },
  {
  first: "Soo",
  middle: "-Jong",
  last:"Han",
  meaning:"Talented in many things."
  },
  {
  first: "Jong",
  middle: "-Rim",
  last:"Jung",
  meaning:"enjoying the world."
  },
  {
  first: "Dong",
  middle: "-Won",
  last:"Seo",
  meaning:"Rising sun from the east."
  }
];

function setup()
{

  for (let i = 1; i <= 10; i++)
  {
    face[i] = loadImage(`assets/face_${i}.PNG`)
  }
  textFont('Georgia');
  textStyle(BOLD);
  createCanvas(400, 400);
  background(255);
  textSize(18);
  imageMode(CENTER);
  frameRate(9);

  text("Find your Korean name!", 60, 150);


  button = createButton("Click to get My Name");
  button.mousePressed(buttonPressed);
  button.style("padding","15px");
  button.style("background-color", "#cdcce3");

}

function draw()
{
  if (animating == true)
  {
    clear();
    image(face[imageCounter], width / 2, height / 2);

    if (imageCounter < face.length - 1)
    {
      imageCounter++;
      console.log(imageCounter);
    } else
    {
      imageCounter = 1;
    }
  }
}

function randomizer()
{
  animating = false;

  if (first[0])
  {
  //  background(random(200, 255));
  clear();
    randomIndex = int(random(first.length));
    text(`Your Korean name is ${first[randomIndex].first} ${first[randomIndex].middle} ${first[randomIndex].last}`, 19, 350);
    text(`Meaning is ${first[randomIndex].meaning}`, 19, 380);
    image(random(face), width / 2, height / 2);
    first.splice(randomIndex, 1);
  } else
  {
      background(255);
      text("Explore again!", 120, 120);
  }
}

function buttonPressed()
{
  animating = true;
  setTimeout(randomizer, 2000);
}
