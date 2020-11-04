const github = new GitHub();
const ui = new UI();
const searchUser = document.querySelector('#searchUser');
let delayTime

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    clearTimeout(delayTime)

    if(userText){
        delayTime = setTimeout(() => getUser(userText), 500)
    }
    else {
        ui.clearProfile();
    }
});

function getUser(userText){
    github.getUser(userText)
    .then(data =>{
        if(data.profile.message === 'Not Found') {
            ui.showAlert('User not found', 'alert alert-danger');
        }
        else {
            ui.showProfile(data.profile)
            ui.showRepos(data.repos)
        }
    })
}