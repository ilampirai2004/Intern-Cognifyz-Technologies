document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
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
    const form = document.getElementById('contact-form');
    const formErrors = document.getElementById('form-errors');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        formErrors.innerHTML = '';
        let valid = true;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '') {
            valid = false;
            formErrors.innerHTML += '<p>Please enter your name.</p>';
        }

        if (email === '') {
            valid = false;
            formErrors.innerHTML += '<p>Please enter your email.</p>';
        } else if (!validateEmail(email)) {
            valid = false;
            formErrors.innerHTML += '<p>Invalid email address.</p>';
        }

        if (message === '') {
            valid = false;
            formErrors.innerHTML += '<p>Please enter your message.</p>';
        }

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
});
