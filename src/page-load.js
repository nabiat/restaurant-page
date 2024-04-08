import foodImage from './ethiopian-food.jpg';

function pageLoad() {
    let container = document.getElementById('content');
    let upper = document.createElement('div');
    let intro = document.createElement('div');
    let busHrs = document.createElement('div');

    upper.className = 'upper';
    intro.className = 'intro';
    busHrs.className = 'busHrs';

    addImage(upper);
    addIntro(intro);
    addHours(busHrs);

    container.append(upper, intro, busHrs);
}

function addImage(upper) {
    const myImage = new Image();
    myImage.src = foodImage;

    upper.append(myImage);
}

function addIntro(intro) {
    let title = document.createElement('div');
    title.className = 'introTitle';
    title.textContent = 'Welcome to Lalibela, Your Gateway to Ethiopian Delights!';

    let upperP = document.createElement('div');
    let lowerP = document.createElement('div');

    upperP.textContent = 'Step into a world of exquisite tastes and rich cultural' + 
    ' heritage at Lalibela. Indulge your senses in the vibrant colors,' + 
    ' aromatic spices, and bold flavors of authentic Ethiopian cuisine.';

    lowerP.textContent = 'Gather your loved ones, friends, or colleagues and join ' + 
    'us for a meal that promises to delight your taste buds and nourish your soul.';

    intro.append(title, upperP, lowerP);
}

function addHours(busHrs) {
    let title = document.createElement('div');
    title.className = 'busTitle';
    title.textContent = 'Business Hours';

    let monFri = document.createElement('div');
    let monFriTime = document.createElement('div');
    monFri.textContent = 'Monday - Friday';
    monFriTime.textContent = '2:00pm - 10:00pm';

    let sat = document.createElement('div');
    let satTime = document.createElement('div');
    sat.textContent = 'Saturday';
    satTime.textContent = '2:00pm - 1:00am';

    let sun = document.createElement('div');
    let sunTime = document.createElement('div');
    sun.textContent = 'Sunday';
    sunTime.textContent = 'Closed';

    busHrs.append(title, monFri, monFriTime, sat, satTime, sun, sunTime);
}

export { pageLoad };