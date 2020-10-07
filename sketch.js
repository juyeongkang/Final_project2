// The things what i love
let randomIndex;
let button;
let animating = false;
let puppy = [];
let imageCounter = 1;
let things =

[
  {
  who: "Father",
  color: "Orange"
  },
  {
  who: "Mother ",
  color: "chartrese"
  },
  {
  who: "Brother",
  color: "poop"
  },
  {
  who: "Girlfriend",
  color: "blue"
  },
  {
  who: "Bestfriends",
  color: "black"
  },
  {
  who: "Games",
  color: "red"
  },
  {
  who: "Art",
  color: "white"
  }
];

function setup()
{

  for (let i = 1; i <= 7; i++)
  {
    puppy[i] = loadImage(`assets/puppy_${i}.PNG`)
  }
  textFont('Georgia');
  textStyle(BOLD);
  createCanvas(400, 400);
  background(255);
  textSize(18);
  imageMode(CENTER);
  frameRate(8);

  text("Click to Randomize.", 60, 150);


  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);
  button.style("padding","15px");
  button.style("background-color", "#cdcce3");

}

function draw()
{
  if (animating == true)
  {
    clear();
    image(puppy[imageCounter], width / 2, height / 2);

    if (imageCounter < puppy.length - 1)
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

  if (things[0])
  {
  //  background(random(200, 255));
  clear();
    randomIndex = int(random(things.length));
    text(`${things[randomIndex].who}'s favorite color is ${things[randomIndex].color}`, 19, 400);
    image(random(puppy), width / 2, height / 2);
    things.splice(randomIndex, 1);
  } else
  {
      background(random(200, 255));
      text("Nothing left!", 120, 120);
  }
}

function buttonPressed()
{
  animating = true;
  setTimeout(randomizer, 2000);
}
