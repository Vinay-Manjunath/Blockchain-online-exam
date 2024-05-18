window.onload = function() {
    console.log("Window loaded"); // Add this line
    // Retrieve marks and transaction hash from URL query parameters
    var urlParams = new URLSearchParams(window.location.search);
    var marks = urlParams.get('marks');
    var txHash = urlParams.get('txHash');

    // Display marks and transaction hash on the results page
    document.getElementById("marks").innerText = "Your marks: " + marks;
    document.getElementById("txHash").innerText = "Transaction Hash: " + txHash;
}
