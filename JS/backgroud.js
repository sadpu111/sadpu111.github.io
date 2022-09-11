const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg" ,"5.jpg","6.jpg","7.jpg"];
const randomNum = Math.floor(Math.random() * images.length);
const chosenImage = images[randomNum];
const bgImage =  document.createElement("img"); // JS에서 HTML 엘리먼트를 생성

bgImage.src = `IMG/${chosenImage}`; // img태그에 src 추가, 현재 떠다니는 중, body에 추가해야 함

document.body.style.backgroundImage = `url(../IMG/${chosenImage})`;

const quotes = [
  {
    quote: `"It's not your fault."`,
    movie: "Good Will Hunting",
  },
  {
    quote: `"Hope is a good thing, maybe the best of things, and no good thing ever dies."`,
    movie: "The Shawshank Redemption",
  },
  {
    quote: `"Why so serious?"`,
    movie: "The Dark Knight",
  },
  {
    quote: `"Today is the first day of the rest of your life."`,
    movie: "American Beauty",
  },
  {
    quote: `"Good morning, and in case I don’t see ya, good afternoon, good evening, and good night!"`,
    movie: "The Trueman Show",
  },
  {
    quote: `"To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other and to feel.\nThat is the purpose of life."`,
    movie: "The Secret Life of Walter Mitty",
  },
  {
    quote: `"We're all traveling through time together, every day of our lives. \nAll we can do is do our best to relish this remarkable ride."`,
    movie: "About Time",
  },
  {
    quote: `"Life is not what you see in films. \nLife is much harder."`,
    movie: "Cinema Paradiso",
  },
];

const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:nth-child(2)");
const todaysQuote = quotes[randomNum];
console.log(quotes);
quote.innerText = todaysQuote.quote;
movie.innerText = todaysQuote.movie;