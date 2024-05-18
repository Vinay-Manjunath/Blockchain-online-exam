document.getElementById("quizForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Get selected answers for all questions
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;
    var q4 = document.querySelector('input[name="q4"]:checked').value;
    var q5 = document.querySelector('input[name="q5"]:checked').value;
    var q6 = document.querySelector('input[name="q6"]:checked').value;
    var q7 = document.querySelector('input[name="q7"]:checked').value;
    var q8 = document.querySelector('input[name="q8"]:checked').value;
    var q9 = document.querySelector('input[name="q9"]:checked').value;
    var q10 = document.querySelector('input[name="q10"]:checked').value;

    // Calculate total marks
    var marks = 0;
    if (q1 === "a") marks++; // Correct answer for question 1
    if (q2 === "b") marks++; // Correct answer for question 2
    if (q3 === "a") marks++; // Correct answer for question 3
    if (q4 === "a") marks++; // Correct answer for question 4
    if (q5 === "b") marks++; // Correct answer for question 5
    if (q6 === "c") marks++; // Correct answer for question 6
    if (q7 === "c") marks++; // Correct answer for question 7
    if (q8 === "a") marks++; // Correct answer for question 8
    if (q9 === "a") marks++; // Correct answer for question 9
    if (q10 === "a") marks++; // Correct answer for question 10

    var username = sessionStorage.getItem("username");

    // Submit marks to the blockchain
    const txHash = await submitMarksToBlockchain(username, marks);

// Print marks and transaction hash
    console.log("Marks:", marks);
    console.log("Transaction Hash:", txHash);

// Redirect to results page
    window.location.href = "results.html?marks=" + marks + "&txHash=" + txHash;
});

async function submitMarksToBlockchain(username, marks) {
    try {
        // Initialize Web3 provider
        if (typeof window.ethereum !== 'undefined') {
            await window.ethereum.enable();
            const web3 = new Web3(window.ethereum);

            // Load the contract
            const contractAddress = '0x3D9e5eC783f58CE62a8028adE2ec388dc4584521'; // Replace with actual contract address
            const contractABI = [
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_username",
                            "type": "string"
                        },
                        {
                            "name": "_marks",
                            "type": "uint256"
                        }
                    ],
                    "name": "submitQuiz",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                }
            ];

            const contract = new web3.eth.Contract(contractABI, contractAddress);

            // Call the submitQuiz function of the smart contract
            const transaction = await contract.methods.submitQuiz(username, marks).send({ from: window.ethereum.selectedAddress });

            // Get transaction hash
            const txHash = transaction.transactionHash;

            console.log("Transaction submitted successfully. Transaction Hash:", txHash);

            // Return transaction hash
            return txHash;
        } else {
            throw new Error("Web3 provider not detected. Please install MetaMask.");
        }
    } catch (error) {
        console.error("Error submitting marks:", error);
        throw error; // Rethrow the error to handle it in the caller
    }
}
