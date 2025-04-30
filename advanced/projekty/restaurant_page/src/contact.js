function RenderContact() {
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
  
    const paraTitle1 = document.createElement('p');
    paraTitle1.classList.add('para-title');
    const paraTitle2 = document.createElement('p');
    paraTitle2.classList.add('para-title');
    const paraTitle3 = document.createElement('p');
    paraTitle3.classList.add('para-title');
  
    const paraChef1 = document.createElement('p');
    paraChef1.classList.add('chef', 'para');
    const paraChef2 = document.createElement('p');
    paraChef2.classList.add('chef', 'para');
    const paraChef3 = document.createElement('p');
    paraChef3.classList.add('chef', 'para');
  
    const paraPhone1 = document.createElement('p');
    paraPhone1.classList.add('phone', 'para');
    const paraPhone2 = document.createElement('p');
    paraPhone2.classList.add('phone', 'para');
    const paraPhone3 = document.createElement('p');
    paraPhone3.classList.add('phone', 'para');
  
    const paraMail1 = document.createElement('p');
    paraMail1.classList.add('mail', 'para');
    const paraMail2 = document.createElement('p');
    paraMail2.classList.add('mail', 'para');
    const paraMail3 = document.createElement('p');
    paraMail3.classList.add('mail', 'para');
  
    content.append(navbox, homeBox1, homeBox2, homeBox3);
    homeBox1.append(paraTitle1, paraChef1, paraPhone1, paraMail1);
    homeBox2.append(paraTitle2, paraChef2, paraPhone2, paraMail2);
    homeBox3.append(paraTitle3, paraChef3, paraPhone3, paraMail3);
  
    navbox.textContent = 'Contact us';
  
    paraTitle1.textContent = 'Mama Bear';
    paraTitle2.textContent = 'Papa Bear';
    paraTitle3.textContent = 'Baby Bear';
  
    paraChef1.textContent = 'Chef';
    paraChef2.textContent = 'Manager';
    paraChef3.textContent = 'Waiter';
  
    paraPhone1.textContent = '555-555-5554';
    paraPhone2.textContent = '555-555-5555';
    paraPhone3.textContent = '555-555-5556';
  
    paraMail1.textContent = 'totallyRealEmail@notFake.com';
    paraMail2.textContent = 'perfectlyRealEmail@notFake.com';
    paraMail3.textContent = 'perfectlyRealEmail@notFake.com';
  }
  
  export { RenderContact };
  