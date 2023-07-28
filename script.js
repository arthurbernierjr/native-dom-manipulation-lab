let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const changeMainTitle = function() {
    const mainTitle = document.getElementById('main-title');
    mainTitle.textContent = "Welcome to DOM's Homepage";
  };
  
  changeMainTitle();
  

  // Part 2
  const changeBackgroundColor = function() {
    document.body.style.backgroundColor = "lightblue";
  };
  
  changeBackgroundColor();
  

  // Part 3
  const removeLastFavoriteThing = function() {
    const favoriteThingsList = document.getElementById('favorite-things');
    const lastItem = favoriteThingsList.lastElementChild;
    favoriteThingsList.removeChild(lastItem);
  };
  
  removeLastFavoriteThing();
  

  // Part 4
  const changeSpecialTitleFontSize = function() {
    const specialTitles = document.querySelectorAll('.special-title');
    specialTitles.forEach(title => {
      title.style.fontSize = '2rem';
    });
  };
  
  changeSpecialTitleFontSize();
  

  // Part 5
  const removeChicagoFromPastRaces = function() {
    const pastRacesList = document.getElementById('past-races');
    const chicagoRace = pastRacesList.querySelector('li:nth-child(4)');
    pastRacesList.removeChild(chicagoRace);
  };
  
  removeChicagoFromPastRaces();
  

  // Part 6
  const addCityToPastRaces = function(cityName) {
    const pastRacesList = document.getElementById('past-races');
    const newRace = document.createElement('li');
    newRace.textContent = cityName;
    pastRacesList.appendChild(newRace);
  };
  
  addCityToPastRaces('Paris'); // Replace 'Paris' with the desired city name
  

  // Part 7
  const createBlogPost = function(cityName, blogHeading, blogContent) {
    const mainDiv = document.querySelector('.main');
    const newBlogPost = document.createElement('div');
    const newHeading = document.createElement('h1');
    const newParagraph = document.createElement('p');
  
    newBlogPost.classList.add('blog-post');
    newBlogPost.classList.add('purple');
    newHeading.textContent = blogHeading;
    newParagraph.textContent = blogContent;
  
    newBlogPost.appendChild(newHeading);
    newBlogPost.appendChild(newParagraph);
    mainDiv.appendChild(newBlogPost);
  };
  
  createBlogPost('Paris', 'Eiffel Tower Adventure', 'I climbed the Eiffel Tower and had a breathtaking view!');
  

  // Part 8
  const addClickEventToQuoteTitle = function() {
    const quoteTitle = document.querySelector('#quote-title');
    quoteTitle.addEventListener('click', randomQuote);
  };
  
  addClickEventToQuoteTitle();
  

  // Part 9
  const addMouseHandlersToBlogPosts = function() {
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
      post.addEventListener('mouseout', function() {
        this.classList.toggle('purple');
      });
      post.addEventListener('mouseenter', function() {
        this.classList.toggle('red');
      });
    });
  };
  
  addMouseHandlersToBlogPosts();
  



});
