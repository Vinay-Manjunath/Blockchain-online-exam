// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract QuizContract {
    struct Quiz {
        string username;
        uint marks;
    }

    mapping(address => Quiz) public quizzes;

    function submitQuiz(string memory _username, uint _marks) public {
        Quiz memory newQuiz;
        newQuiz.username = _username;
        newQuiz.marks = _marks;
        quizzes[msg.sender] = newQuiz; // Associate the quiz with the sender's address
    }

    function getQuiz(address user) public view returns (string memory, uint) {
        Quiz memory quiz = quizzes[user];
        return (quiz.username, quiz.marks);
    }
}
