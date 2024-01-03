// const dark =document.querySelector("[data-dark]");
// const light =document.querySelector("[data-light]");
const searchcontainer =document.querySelector(".search-container");
const userInfoContainer =document.querySelector(".user-info-ontainer");
const searchinput =document.querySelector(".searchinput");
const search =document.querySelector(".search");
const image =document.querySelector(".image");
const naam =document.querySelector(".name");
const link =document.querySelector(".link");
const about =document.querySelector(".about");
const repo =document.querySelector(".repo");
const followers =document.querySelector(".followers");
const following =document.querySelector(".following");
const loc =document.querySelector(".location");
const lin =document.querySelector(".lin");
const twitter =document.querySelector(".twitter");
const college =document.querySelector(".college");

const url="https://api.github.com/users/";

search.addEventListener("click",()=>{
    if(searchinput.value!=" "){
        getdata(url + searchinput.value);        
    }
});
searchinput.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
        if(searchinput.value!=" "){
            getdata(url + searchinput.value);
        }
    }
});


async function getdata(url){
    try {
        const response = await fetch(url);
    const data = await response.json();
    updateProfile(data);

    } catch (error) {
        
    }
}

function updateProfile(data){
        console.log(data);
        image.src = `${data.avatar_url}`;
        naam.innerText = data?.name;
        link.innerText = `@${data?.login}`;
        link.href = data?.html_url;
        about.innerText = (data?.bio === null)?"Not Available":data?.bio;
        repo.innerText = data?.public_repos;
        repo.href = data?.repos_url;
        followers.innerText = data?.followers;
        followers.href = data?.followers_url;
        following.innerText = data?.following;
        following.href = data?.following_url;
        loc.innerText = (data?.location === null)?"Not Available":data?.location;
        twitter.innerText =(data?.twitter_username === null)?"Not Availabel":data.twitter_username;
        twitter.href = (data?.twitter_username !== null)?`https://twitter.com/${data?.twitter_username}` : "#";
        lin.innerText = (data?.blog === "")?"Not Available":data?.blog;
        lin.href = (data?.blog !== "")?`https://twitter.com/${data?.blog}` : "#";
        college.innerText = (data?.company === null)?"Not Available":data?.company;
}
