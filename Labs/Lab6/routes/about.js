const express = require("express");
const router = express.Router();

const aboutInfo = {
    name: "Justin Westley",
    cwid: "10416230",
    biography: "Hi, I'm Justin Westley. I'm currently a junior studying Computer Engineering here at Stevens Institute of Technology. I'm from Hackettstown, New Jersey. I'm 21 years old and looking to pursue a career in Software Engineering. I lived there up until college with my parents, sister, and grandma. Now, I live in an off-campus apartment with some friends I met sophomore year.\nI first got into Computer Science in high school. I'm from a small town and my parents aren't in STEM, so I had no idea what computer science was for a long time. My sophomore year, my high school offered an Intro to Computer Science course, which I didn't take because I had no idea what it was. Later that year, there was a STEM showcase, were alumni who worked professionally came back and discussed their experiences. So many former students came back and described what computer science was and what they did for a living, and it immediately caught my interest. Next year, I took the Intro to CS course, and I've been hooked ever since.",
    favoriteShows: ["Black Mirror", "Game of Thrones", "Rick and Morty", "Breaking Bad"],
    hobbies: ["Programming", "Snowboarding", "Photography", "Rock Climbing", "Video Games", "Weightlifting", "Music"]
};

router.get("/", async (req, res) => {
    try {
      res.json(aboutInfo);
    } catch (e) {
      // Something went wrong with the server!
      res.status(500).send();
    }
  });

module.exports = router;