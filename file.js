const websiteForm = document.getElementById('websiteForm');
const siteNameInput = document.getElementById('siteName');
const siteURLInput = document.getElementById('siteURL');
const websiteList = document.getElementById('websiteList');

websiteForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const siteName = siteNameInput.value;
  const siteURL = siteURLInput.value;

  if (siteName && siteURL) {
    addWebsite(siteName, siteURL);
    websiteForm.reset();
  } else {
    alert("Please enter both Website Name and URL.");
  }
});

function addWebsite(name, url) {
  const listItem = document.createElement('li');

  const index = websiteList.children.length + 1;
  const indexSpan = document.createElement('span');
  indexSpan.textContent = index;
  listItem.appendChild(indexSpan);

  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;
  listItem.appendChild(nameSpan);

  const visitButton = document.createElement('button');
  visitButton.textContent = 'Visit';
  visitButton.classList.add('visit');
  visitButton.addEventListener('click', function() {
    window.open(url, '_blank');
  });
  listItem.appendChild(visitButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });
  listItem.appendChild(deleteButton);

  websiteList.appendChild(listItem);
}