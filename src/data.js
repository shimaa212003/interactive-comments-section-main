import juliousomo from "./images/avatars/image-juliusomo.png"
import juliousomoWebp from "./images/avatars/image-juliusomo.webp"
import amyrobson from "./images/avatars/image-amyrobson.png"
import amyrobsonWebp from "./images/avatars/image-amyrobson.webp"
import maxblagun from "./images/avatars/image-maxblagun.png"
import maxblagunWebp from "./images/avatars/image-maxblagun.webp"
import ramsemibron from "./images/avatars/image-ramsesmiron.png"
import ramsemibronWebp from "./images/avatars/image-ramsesmiron.webp"
const data = {
  "currentUser": {
    "image": { 
      "png": juliousomo,
      "webp": juliousomoWebp,
    },
    "username": "juliusomo"
  },
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": { 
          "png": amyrobson,
          "webp": amyrobsonWebp
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": { 
          "png": maxblagun,
          "webp": maxblagunWebp
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": ramsemibron,
              "webp": ramsemibronWebp
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": juliousomo,
              "webp": juliousomoWebp
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}

export default data