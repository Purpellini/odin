
export { RenderHome };

function RenderHome(){
    const content = document.querySelector('.content-wrapper');
    content.innerHTML = "";
    const navbox = document.createElement('div');
    navbox.classList.add('content-nav', 'box-nav');

    const homeBox1 = document.createElement('div');
    homeBox1.classList.add('home-box1', 'box');
    const homeBox2 = document.createElement('div');
    homeBox2.classList.add('home-box2', 'box');
    const homeBox3 = document.createElement('div');
    homeBox3.classList.add('home-box3', 'box');

    const paraDesc1 = document.createElement('p');
    paraDesc1.classList.add('h-box1');
    const idk = document.createElement('p');
    idk.classList.add('idk');

    const paraDesc2 = document.createElement('p');
    paraDesc2.classList.add('hours');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');  
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');

    const paraLocation= document.createElement('p');
    paraLocation.classList.add('location');

    const paraAddress= document.createElement('p');
    paraAddress.classList.add('address');

    navbox.textContent = "Beary's Breakfast Bar";

    paraDesc1.textContent="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    idk.textContent="Goldilocks";
    paraDesc2.textContent="Hours";

    paraLocation.textContent="Location";
    paraAddress.textContent="123 Forest Drive, Forestville, Maine";

    li1.textContent="Sunday: 8am - 8pm";
    li2.textContent="Monday: 8am - 8pm";
    li3.textContent="Tuesday: 8am - 8pm";
    li4.textContent="Wednesday: 8am - 8pm";
    li5.textContent="Thursday: 8am - 8pm";
    li6.textContent="Friday: 8am - 8pm";
    li7.textContent="Saturday: 8am - 8pm";
    content.append(navbox, homeBox1, homeBox2, homeBox3);
    homeBox1.append(paraDesc1, idk);
    homeBox2.append(paraDesc2, ul);
    homeBox3.append(paraLocation, paraAddress);
    ul.append(li1, li2, li3, li4, li5, li6, li7);
}