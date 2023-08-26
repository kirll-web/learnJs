// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();
const urlEmptyImage = 'https://panegmv.org/sites/default/files/styles/mt_large/public/default_images/image.jpg?itok=yhOA_ijG';

const newsService = (function() {
  const 
        apiKey = 'f39b4f460c3e452f89a33275a371c6fb',
        // apiKey = '',
        apiUrl = 'https://newsapi.org/v2';

  return {
    topHeadlines(country = 'ru', category = 'business', cb) {
      http.get(`${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`,cb);
    },
    everything(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    }
  };
})();

const form = document.forms['newsControls']
      countrySelect = form.elements['country'],
      categorySelect = form.elements['category'],
      searchInput = form.elements['search'];

form.addEventListener('submit', e => {
  e.preventDefault();

  loadNews();
})

//  init selects
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  loadNews();
});

//load news function

function loadNews() {
  const country = countrySelect.value,
        category = categorySelect.value,
        searchText = searchInput.value;
  
  showLoader();

  if(!searchText) {
    newsService.topHeadlines(country, category, onGetResponse);
  } else {
    newsService.everything(searchText, onGetResponse);
  }
}

function onGetResponse(err, res) {
  removeLoader();
  if(err) {
    showAlert(err, 'error-msg');
    return;
  }

  if(!res.articles.length) {
    showEmptyMessage('empty', 'error-msg');
    return
  }

  renderNews(res.articles);
}


function renderNews(news) {
  const newsContainer = document.querySelector('.news-container .row');
  if(newsContainer.children.length) {
    clearContainer(newsContainer);
  }

  let fr = '';
  news.forEach(newsItem => {
    fr += newsTemplate(newsItem);
  });
  
  newsContainer.insertAdjacentHTML('afterbegin', fr);
}

function newsTemplate({urlToImage, title, url, description}) {
  console.log(urlToImage);
  return `
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage !== null ? urlToImage : urlEmptyImage}"/>
          <span class="card-title">${title || ''}</span>
        </div>
        <div class="card-content">
          <p>${description || ''}</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `;
}

function clearContainer(container) {
  
  let child = container.lastElementChild;
  console.log(child);
  while(child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

function showAlert(msg, type = 'success') {
  M.toast({html: msg, classes: type});
}

function showEmptyMessage(msg, type = 'error-msg') {
  M.toast({html: msg, classes: type});
}

function showLoader() {
  document.body.insertAdjacentHTML('afterbegin', 
  `
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  `
  )
}

function removeLoader() {
  const loader = document.querySelector('.progress');

  if(loader) {
    loader.remove();
  }
}