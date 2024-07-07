document.addEventListener('DOMContentLoaded', () => {
  const dataContainer = document.getElementById('data-container');
  const fetchData = async () => {
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!response.ok) {
              throw new Error('No response from network ' + response.statusText);
          }
          const data = await response.json();
          displayData(data);
      } catch (error) {
          console.error('Problem in fetching operation:', error);
      }
  };
  const displayData = (data) => {
      data.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');

          const postTitle = document.createElement('h2');
          postTitle.textContent = post.title;

          const postBody = document.createElement('p');
          postBody.textContent = post.body;

          postElement.appendChild(postTitle);
          postElement.appendChild(postBody);

          dataContainer.appendChild(postElement);
      });
  };
  fetchData();
});
