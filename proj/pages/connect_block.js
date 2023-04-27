/*var web3;
await window.web3.currentProvider.enable();
web3= new web3(window.web3.currentProvider);
/*async function connect(){
    await window.web3.currentProvider.enable();
    web3= new web3(window.web3.currentProvider);
}*/

document.addEventListener("DOMContentLoaded", function(event) {

    if (window.ethereum) {

        ethereum.request({ method: "eth_requestAccounts" })
        .then(() => document.getElementById("count").click())
        .catch((err) => console.error(err.message));

        ethereum.on("chainChanged", () => window.location.reload());

        ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
                console.log(`Using account ${accounts[0]}`);
                
            } else {
                console.error("0 accounts.");
            }
        });

        ethereum.on("message", (message) => console.log(message));

        ethereum.on("connect", (info) => {
            console.log(`Connected to network ${info}`);
        });

        ethereum.on("disconnect", (error) => {
            console.log(`Disconnected from network ${error}`);
        });

        const provider = new ethers.providers.Web3Provider(window.ethereum);

        
    } else {
        console.error("Install MetaMask.");
    }

})

