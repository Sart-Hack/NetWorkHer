const joinButton = document.querySelector('.JoinButton');
function openSignInPage(){
    window.location.href = "signin.html";

}
joinButton.addEventListener('click', openSignInPage);