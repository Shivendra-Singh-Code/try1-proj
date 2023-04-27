const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

async function main() {
    /*=======
      CONNECT TO METAMASK
      =======*/
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let userAddress = await signer.getAddress();
    document.getElementById("userAddress").innerText =
      userAddress.slice(0, 8) + "...";
  
    /*======
      INITIALIZING CONTRACT
      ======
    const usdcContract = new ethers.Contract(usdc.address, usdc.abi, signer);
  
    let contractName = await usdcContract.name();
    // document.getElementById("contractName").innerText = contractName;
    let usdcBalance = await usdcContract.balanceOf(userAddress);
    usdcBalance = ethers.utils.formatUnits(usdcBalance, 6);
    document.getElementById("usdcBalance").innerText = usdcBalance;*/
  }
  main();