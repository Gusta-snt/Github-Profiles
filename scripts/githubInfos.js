const logo = document.getElementById("logo-div");
const form = document.getElementById("container-form");
const page2 = document.getElementById("page2");
const lblUser = document.getElementById("profile-user");
const lblName = document.getElementById("profile-name");
const lblFolowers = document.getElementById("profile-folowers");
const lblRepos = document.getElementById("profile-repos");
const profileImg = document.getElementById("profile-img");
const topRepos1 = document.getElementById("top-repos-1");
const topRepos2 = document.getElementById("top-repos-2");
const topRepos3 = document.getElementById("top-repos-3");
const topRepos4 = document.getElementById("top-repos-4");
const topReposLink1 = document.getElementById("top-repos1-link");
const topReposLink2 = document.getElementById("top-repos2-link");
const topReposLink3 = document.getElementById("top-repos3-link");
const topReposLink4 = document.getElementById("top-repos4-link");

function changePage() {

    const user = document.getElementById("githubUser").value;

    const url =`https://api.github.com/users/${user}`;

    lblUser.innerHTML = user;

    fetch(url).then(response => response.json()).then(data => {
        profileImg.src = data.avatar_url;
        lblName.innerHTML = data.name;
        lblFolowers.innerHTML = `${data.followers} folowers.`;
        lblRepos.innerHTML = `${data.public_repos} public repositories.`;
    })

    fetch(`https://api.github.com/users/${user}/repos`).then(response => response.json()).then(dat => {
        var top1 = 0; 
        var positionTop1 = 0;
        var top2 = 0; 
        var positionTop2 = 0;
        var top3 = 0; 
        var positionTop3 = 0;
        var top4 = 0; 
        var positionTop4 = 0;
        
        for(var i = 0; i < dat.length; i++){
            
            if (dat[i].stargazers_count > top1){
                top1 = dat[i].stargazers_count;
                positionTop1 = i;
            }
            
        }

        for( i = 0; i < dat.length; i++){
            if (i != positionTop1){
                
                if (dat[i].stargazers_count > top2){
                    top2 = dat[i].stargazers_count;
                    positionTop2 = i;
                }
            }
            
        }

        for( i = 0; i < dat.length; i++){
            if (i != positionTop1 && i != positionTop2){
                
                if (dat[i].stargazers_count > top3){
                    top3 = dat[i].stargazers_count;
                    positionTop3 = i;
                }
            }
            
        }

        for( i = 0; i < dat.length; i++){
            if (i != positionTop1 && i != positionTop2 && i != positionTop3){
                
                if (dat[i].stargazers_count > top4){
                    top4 = dat[i].stargazers_count;
                    positionTop4 = i;
                }
            }
            
        }

        if (top1 == 0){
            topRepos1.innerHTML = dat[1].name;
            topRepos2.innerHTML = dat[2].name;
            topRepos3.innerHTML = dat[3].name;
            topRepos4.innerHTML = dat[4].name;
            topReposLink1.href = dat[1].html_url;
            topReposLink2.href = dat[2].html_url;
            topReposLink3.href = dat[3].html_url;
            topReposLink4.href = dat[4].html_url;
        }else {
            topRepos1.innerHTML = dat[positionTop1].name;
            topRepos2.innerHTML = dat[positionTop2].name;
            topRepos3.innerHTML = dat[positionTop3].name;
            topRepos4.innerHTML = dat[positionTop4].name;
            topReposLink1.href = dat[positionTop1].html_url;
            topReposLink2.href = dat[positionTop2].html_url;
            topReposLink3.href = dat[positionTop3].html_url;
            topReposLink4.href = dat[positionTop4].html_url;
        }
    })

    logo.style.display = "none";
    form.style.display = "none";
    page2.style.display = "block";
}
