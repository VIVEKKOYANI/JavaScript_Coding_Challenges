{/* <ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul> */}

const list = document.getElementById('list');

list.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI'){
        console.log("Clicked on:", event.target.textContent);
    }
})