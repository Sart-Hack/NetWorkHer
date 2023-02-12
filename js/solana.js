const PhantomButton = document.querySelector('.PhantomAuthButton');
PhantomButton.addEventListener('click', signInWithPhantom);

function signInWithPhantom(){
 
    window.solana.connect;
  
    window.solana.request({ method: 'connect' });
    window.location.href = "home.html";
//     window.solana.on('connect', () => {
//         window.location.href = "home.html";
//         console.log('Connected');
//     });
    
};

function disconnect(){
    window.solana.disconnect();
    window.solana.on('disconnect', () => {
        console.log('Disconnected');
    });
}
