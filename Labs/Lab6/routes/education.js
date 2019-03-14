const express = require("express");
const router = express.Router();

const educationInfo = [
  {
    schoolName: "Warren Hills Middle School",
    degree: "Middle School Certificate",
    favoriteClass: "Web Design",
    favoriteMemory:
      'My favorite memory from middle school was when I "broke the ice" at the first dance. As the stereotype, all of the boys and girls were awkwardly standing on opposite sites of the room. My friend pushed me out into the middle and got the guys to cheer me on, so I danced to whatever middle school hit was playng with the worst, whitest moves possible. Everyone had a laugh and eventually joined in, probably because their embarassment was gone, knowing they couldn\'t embarass themselves worse than I did after that.'
  },
  {
    schoolName: "Warren Hills High School",
    degree: "High School Diploma",
    favoriteClass: "AP Computer Science",
    favoriteMemory: "My favorite memory from high school was winning the SteelStacks music festival in Bethlehem, PA with my school's Jazz Band. I played the alto saxophone and was extremely nervous going in, as the venue was very professional and the other groups attending were very good. Yet, the band played our best, and ended up winning with our chosen three songs. The saxophone section also won \"Best Saxophone Section,\" which was awesome. We then got to return at a later date to perform alongside a professional jazz band and be recorded on television!"
  },
  {
    schoolName: "Stevens Institute of Technology",
    degree: "Bachelor of Engineering in Computer Engineering",
    favoriteClass: "Web Programming",
    favoriteMemory: "My favorite memory so far at Stevens had to be Syllabus week of Sophomore year. I was staying in a Stevens Leased apartment, where I met so many other cool people going here that lived nearby. During Syllabus week, naturally we had so little work, so we were able to just hang out with no worries in the world and party at night, and even headed into NYC a few times that week for the nightlife. I've never been so free of stress and responsibilities as I felt that week."
  }
];

router.get("/", async (req, res) => {
  try {
    res.json(educationInfo);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;