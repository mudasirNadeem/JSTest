 document.getElementById('username').addEventListener('keypress', function() {
     const username = document.getElementById('username').value;
     searchGitHubProfile(username);
 })
 function searchGitHubProfile(username) {
     const resultDiv = document.getElementById('result');
     resultDiv.innerHTML = 'Searching...'
     fetch(`https://api.github.com/users/${username}`)
         .then(response => {
              if (!response.ok) {
                  throw new Error('User not found');
              }
             return response.json();
         })
         .then(data => {
           resultDiv.innerHTML = `
           <div class="profile-card">
    <div class="row">
        <div class="col-md-3">
            <img src="${data.avatar_url}" alt="Profile Picture" class="profile-image">
        </div>
        <div class="col-md-9">
            <h2 class="text-white mb-3">${data.login}</h2>
            <p class="text-white mb-4">${data.bio}</p>
            <div class="stats d-flex gap-4 mb-4">
                <div>
                    <span class="fw-bold">${data.followers}</span> Followers
                </div>
                <div>
                    <span class="fw-bold">${data.following}</span> Following
                </div>
                <div>
                    <span class="fw-bold">${data.public_repos}</span> Repos
                </div>
            </div>
        </div>
    </div>
</div>
              `;
         })
         .catch(error => {
             resultDiv.innerHTML = `Error: ${error.message}`;
         });

 }

