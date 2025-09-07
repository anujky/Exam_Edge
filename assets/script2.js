// Sample questions data
const mockQuestions = [
    {
        "question": "Which anomaly occurs when concurrent transactions overwrite each other\u2019s updates in DBMS?",
        "options": [
            "Dirty Read",
            "Lost Update",
            "Phantom Read",
            "Non-repeatable Read"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which protocol ensures causal ordering of messages in distributed systems?",
        "options": [
            "Lamport Clock",
            "Vector Clock",
            "Berkeley Algorithm",
            "Cristian\u2019s Algorithm"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which OS page replacement algorithm uses reference bits to approximate LRU?",
        "options": [
            "FIFO",
            "Clock",
            "Optimal",
            "SJF"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Which cryptographic concept ensures that a ciphertext does not reveal patterns of the plaintext?",
        "options": [
            "Avalanche Effect",
            "Diffusion",
            "Confusion",
            "Perfect Forward Secrecy"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Which DBMS recovery method stores both before and after images of transactions?",
        "options": [
            "Undo Logging",
            "Redo Logging",
            "Undo/Redo Logging",
            "Checkpointing"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q6: Which of the following relates to SQL isolation?",
        "options": [
            "Read Uncommitted",
            "Read Committed",
            "Repeatable Read",
            "Serializable"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q7: Which of the following relates to Deadlock condition broken by preemption?",
        "options": [
            "Mutual Exclusion",
            "Hold and Wait",
            "No Preemption",
            "Circular Wait"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q8: Which of the following relates to Disk scheduling with starvation risk?",
        "options": [
            "FCFS",
            "SSTF",
            "SCAN",
            "LOOK"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q9: Which of the following relates to Indexing structure in DBMS?",
        "options": [
            "AVL Tree",
            "B+ Tree",
            "Hash Table",
            "Heap"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q10: Which of the following relates to Compiler phase for type checking?",
        "options": [
            "Lexical",
            "Syntax",
            "Semantic",
            "Intermediate Code Gen"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q11: Which of the following relates to RAID surviving two failures?",
        "options": [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 6"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q12: Which of the following relates to TCP loss recovery?",
        "options": [
            "Slow Start",
            "Fast Retransmit",
            "Congestion Avoidance",
            "Flow Control"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q13: Which of the following relates to OSI layer for encryption?",
        "options": [
            "Application",
            "Presentation",
            "Session",
            "Transport"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q14: Which of the following relates to Concurrency control method?",
        "options": [
            "Two-Phase Locking",
            "Timestamp Ordering",
            "Validation",
            "Deadlock Detection"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q15: Which of the following relates to Graph algorithm for SCC?",
        "options": [
            "Dijkstra",
            "Kosaraju",
            "Kruskal",
            "Prim"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q16: Which of the following relates to SQL isolation?",
        "options": [
            "Read Uncommitted",
            "Read Committed",
            "Repeatable Read",
            "Serializable"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q17: Which of the following relates to Deadlock condition broken by preemption?",
        "options": [
            "Mutual Exclusion",
            "Hold and Wait",
            "No Preemption",
            "Circular Wait"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q18: Which of the following relates to Disk scheduling with starvation risk?",
        "options": [
            "FCFS",
            "SSTF",
            "SCAN",
            "LOOK"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q19: Which of the following relates to Indexing structure in DBMS?",
        "options": [
            "AVL Tree",
            "B+ Tree",
            "Hash Table",
            "Heap"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q20: Which of the following relates to Compiler phase for type checking?",
        "options": [
            "Lexical",
            "Syntax",
            "Semantic",
            "Intermediate Code Gen"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q21: Which of the following relates to RAID surviving two failures?",
        "options": [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 6"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q22: Which of the following relates to TCP loss recovery?",
        "options": [
            "Slow Start",
            "Fast Retransmit",
            "Congestion Avoidance",
            "Flow Control"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q23: Which of the following relates to OSI layer for encryption?",
        "options": [
            "Application",
            "Presentation",
            "Session",
            "Transport"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q24: Which of the following relates to Concurrency control method?",
        "options": [
            "Two-Phase Locking",
            "Timestamp Ordering",
            "Validation",
            "Deadlock Detection"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q25: Which of the following relates to Graph algorithm for SCC?",
        "options": [
            "Dijkstra",
            "Kosaraju",
            "Kruskal",
            "Prim"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q26: Which of the following relates to SQL isolation?",
        "options": [
            "Read Uncommitted",
            "Read Committed",
            "Repeatable Read",
            "Serializable"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q27: Which of the following relates to Deadlock condition broken by preemption?",
        "options": [
            "Mutual Exclusion",
            "Hold and Wait",
            "No Preemption",
            "Circular Wait"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q28: Which of the following relates to Disk scheduling with starvation risk?",
        "options": [
            "FCFS",
            "SSTF",
            "SCAN",
            "LOOK"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q29: Which of the following relates to Indexing structure in DBMS?",
        "options": [
            "AVL Tree",
            "B+ Tree",
            "Hash Table",
            "Heap"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q30: Which of the following relates to Compiler phase for type checking?",
        "options": [
            "Lexical",
            "Syntax",
            "Semantic",
            "Intermediate Code Gen"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q31: Which of the following relates to RAID surviving two failures?",
        "options": [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 6"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q32: Which of the following relates to TCP loss recovery?",
        "options": [
            "Slow Start",
            "Fast Retransmit",
            "Congestion Avoidance",
            "Flow Control"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q33: Which of the following relates to OSI layer for encryption?",
        "options": [
            "Application",
            "Presentation",
            "Session",
            "Transport"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q34: Which of the following relates to Concurrency control method?",
        "options": [
            "Two-Phase Locking",
            "Timestamp Ordering",
            "Validation",
            "Deadlock Detection"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q35: Which of the following relates to Graph algorithm for SCC?",
        "options": [
            "Dijkstra",
            "Kosaraju",
            "Kruskal",
            "Prim"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q36: Which of the following relates to SQL isolation?",
        "options": [
            "Read Uncommitted",
            "Read Committed",
            "Repeatable Read",
            "Serializable"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q37: Which of the following relates to Deadlock condition broken by preemption?",
        "options": [
            "Mutual Exclusion",
            "Hold and Wait",
            "No Preemption",
            "Circular Wait"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q38: Which of the following relates to Disk scheduling with starvation risk?",
        "options": [
            "FCFS",
            "SSTF",
            "SCAN",
            "LOOK"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q39: Which of the following relates to Indexing structure in DBMS?",
        "options": [
            "AVL Tree",
            "B+ Tree",
            "Hash Table",
            "Heap"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q40: Which of the following relates to Compiler phase for type checking?",
        "options": [
            "Lexical",
            "Syntax",
            "Semantic",
            "Intermediate Code Gen"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q41: Which of the following relates to RAID surviving two failures?",
        "options": [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 6"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q42: Which of the following relates to TCP loss recovery?",
        "options": [
            "Slow Start",
            "Fast Retransmit",
            "Congestion Avoidance",
            "Flow Control"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q43: Which of the following relates to OSI layer for encryption?",
        "options": [
            "Application",
            "Presentation",
            "Session",
            "Transport"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q44: Which of the following relates to Concurrency control method?",
        "options": [
            "Two-Phase Locking",
            "Timestamp Ordering",
            "Validation",
            "Deadlock Detection"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q45: Which of the following relates to Graph algorithm for SCC?",
        "options": [
            "Dijkstra",
            "Kosaraju",
            "Kruskal",
            "Prim"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q46: Which of the following relates to SQL isolation?",
        "options": [
            "Read Uncommitted",
            "Read Committed",
            "Repeatable Read",
            "Serializable"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q47: Which of the following relates to Deadlock condition broken by preemption?",
        "options": [
            "Mutual Exclusion",
            "Hold and Wait",
            "No Preemption",
            "Circular Wait"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q48: Which of the following relates to Disk scheduling with starvation risk?",
        "options": [
            "FCFS",
            "SSTF",
            "SCAN",
            "LOOK"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q49: Which of the following relates to Indexing structure in DBMS?",
        "options": [
            "AVL Tree",
            "B+ Tree",
            "Hash Table",
            "Heap"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q50: Which of the following relates to Compiler phase for type checking?",
        "options": [
            "Lexical",
            "Syntax",
            "Semantic",
            "Intermediate Code Gen"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q51: Which of the following relates to RAID surviving two failures?",
        "options": [
            "RAID 0",
            "RAID 1",
            "RAID 5",
            "RAID 6"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q52: Which of the following relates to TCP loss recovery?",
        "options": [
            "Slow Start",
            "Fast Retransmit",
            "Congestion Avoidance",
            "Flow Control"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q53: Which of the following relates to OSI layer for encryption?",
        "options": [
            "Application",
            "Presentation",
            "Session",
            "Transport"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q54: Which of the following relates to Concurrency control method?",
        "options": [
            "Two-Phase Locking",
            "Timestamp Ordering",
            "Validation",
            "Deadlock Detection"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q55: Which of the following relates to Graph algorithm for SCC?",
        "options": [
            "Dijkstra",
            "Kosaraju",
            "Kruskal",
            "Prim"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q56: Which of the following relates to SQL isolation?",
        "options": [
            "Read Uncommitted",
            "Read Committed",
            "Repeatable Read",
            "Serializable"
        ],
        "correctAnswer": 3
    },
    {
        "question": "Conceptual Q57: Which of the following relates to Deadlock condition broken by preemption?",
        "options": [
            "Mutual Exclusion",
            "Hold and Wait",
            "No Preemption",
            "Circular Wait"
        ],
        "correctAnswer": 2
    },
    {
        "question": "Conceptual Q58: Which of the following relates to Disk scheduling with starvation risk?",
        "options": [
            "FCFS",
            "SSTF",
            "SCAN",
            "LOOK"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q59: Which of the following relates to Indexing structure in DBMS?",
        "options": [
            "AVL Tree",
            "B+ Tree",
            "Hash Table",
            "Heap"
        ],
        "correctAnswer": 1
    },
    {
        "question": "Conceptual Q60: Which of the following relates to Compiler phase for type checking?",
        "options": [
            "Lexical",
            "Syntax",
            "Semantic",
            "Intermediate Code Gen"
        ],
        "correctAnswer": 2
    }
];

class MockTest {
    constructor(questions, timeInMinutes = 45) {
        this.questions = questions;
        this.currentQuestion = 0;
        this.timeInMinutes = timeInMinutes;
        this.timeLeft = timeInMinutes * 60;
        this.questionStatus = new Array(questions.length).fill('not-visited');
        this.userAnswers = new Array(questions.length).fill(null);
        this.markedForReview = new Array(questions.length).fill(false);
        
        this.initializeUI();
        this.startTimer();
        this.loadQuestion();
        this.updateQuestionGrid();
    }

    initializeUI() {
        // Initialize question count
        document.getElementById('totalQuestions').textContent = this.questions.length;
        
        // Create question grid
        const grid = document.getElementById('questionGrid');
        for (let i = 0; i < this.questions.length; i++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item not-visited';
            gridItem.textContent = i + 1;
            gridItem.onclick = () => this.jumpToQuestion(i);
            grid.appendChild(gridItem);
        }

        // Add event listeners
        document.getElementById('prevBtn').onclick = () => this.previousQuestion();
        document.getElementById('nextBtn').onclick = () => this.nextQuestion();
        document.getElementById('markReview').onclick = () => this.toggleReview();
        document.getElementById('clearResponse').onclick = () => this.clearResponse();
        document.getElementById('submitTest').onclick = () => this.submitTest();
    }

    startTimer() {
        const timerElement = document.getElementById('time');
        const timer = setInterval(() => {
            this.timeLeft--;
            const minutes = Math.floor(this.timeLeft / 60);
            const seconds = this.timeLeft % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (this.timeLeft <= 0) {
                clearInterval(timer);
                this.submitTest();
            }
        }, 1000);
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestion];
        document.getElementById('currentQuestionNum').textContent = this.currentQuestion + 1;
        document.getElementById('question').textContent = question.question;

        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (this.userAnswers[this.currentQuestion] === index) {
                optionElement.className += ' selected';
            }
            optionElement.textContent = option;
            optionElement.onclick = () => this.selectOption(index);
            optionsContainer.appendChild(optionElement);
        });

        this.updateQuestionStatus();
    }

    selectOption(optionIndex) {
        this.userAnswers[this.currentQuestion] = optionIndex;
        this.questionStatus[this.currentQuestion] = 'answered';
        this.updateQuestionStatus();
        this.loadQuestion();
    }

    updateQuestionStatus() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems[this.currentQuestion].className = 'grid-item';
        
        if (this.markedForReview[this.currentQuestion]) {
            gridItems[this.currentQuestion].className += ' marked-review';
        } else if (this.userAnswers[this.currentQuestion] !== null) {
            gridItems[this.currentQuestion].className += ' answered';
        } else if (this.questionStatus[this.currentQuestion] === 'not-visited') {
            gridItems[this.currentQuestion].className += ' not-visited';
        } else {
            gridItems[this.currentQuestion].className += ' not-answered';
        }
    }

    updateQuestionGrid() {
        const gridItems = document.querySelectorAll('.grid-item');
        this.questionStatus.forEach((status, index) => {
            gridItems[index].className = 'grid-item ' + status;
            if (this.markedForReview[index]) {
                gridItems[index].className += ' marked-review';
            }
        });
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            if (this.questionStatus[this.currentQuestion] === 'not-visited') {
                this.questionStatus[this.currentQuestion] = 'not-answered';
            }
            this.loadQuestion();
        }
    }

    jumpToQuestion(index) {
        this.currentQuestion = index;
        if (this.questionStatus[this.currentQuestion] === 'not-visited') {
            this.questionStatus[this.currentQuestion] = 'not-answered';
        }
        this.loadQuestion();
    }

    toggleReview() {
        this.markedForReview[this.currentQuestion] = !this.markedForReview[this.currentQuestion];
        this.updateQuestionStatus();
    }

    clearResponse() {
        this.userAnswers[this.currentQuestion] = null;
        this.questionStatus[this.currentQuestion] = 'not-answered';
        this.loadQuestion();
        this.updateQuestionGrid();
    }

    submitTest() {
        let score = 0;
        let correctAnswers = 0;
        let incorrectAnswers = 0;
        let notAttempted = 0;

        this.userAnswers.forEach((answer, index) => {
            if (answer === null) {
                notAttempted++;
            } else if (answer === this.questions[index].correctAnswer) {
                score += 1;  // +1 for correct answer
                correctAnswers++;
            } else {
                score -= 0.25;  // -0.25 for wrong answer
                incorrectAnswers++;
            }
        });

        const modal = document.getElementById('resultsModal');
        modal.classList.add('show');
        const content = document.getElementById('resultsContent');
        const percentage = ((score / this.questions.length) * 100).toFixed(2);
        content.innerHTML = `
            <div class="results-header">
                <h2>Test Results</h2>
                <p>Your performance summary</p>
            </div>
            
            <div class="score-section">
                <div class="score-value">${percentage}%</div>
                <div>Final Score: ${score.toFixed(2)} / ${this.questions.length}</div>
            </div>

            <div class="results-stats">
                <div class="stat-card">
                    <div class="stat-value">${this.questions.length}</div>
                    <div class="stat-label">Total Questions</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${this.userAnswers.filter(answer => answer !== null).length}</div>
                    <div class="stat-label">Attempted</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" style="color: #4caf50">+${correctAnswers}</div>
                    <div class="stat-label">Correct Answers</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" style="color: #f44336">-${incorrectAnswers}</div>
                    <div class="stat-label">Incorrect Answers</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value">${notAttempted}</div>
                    <div class="stat-label">Not Attempted</div>
                </div>
                <div class="stat-card">
                    <div class="stat-value" style="color: #ff9800">${(incorrectAnswers * 0.25).toFixed(2)}</div>
                    <div class="stat-label">Negative Marks</div>
                </div>
            </div>

            <button class="close-btn" id="closeModal">Close Results</button>
        `;
        modal.style.display = 'block';

        document.getElementById('closeModal').onclick = () => {
            modal.classList.remove('show');
        };
    }
}

// Initialize the mock test when the page loads
window.onload = () => {
    const test = new MockTest(mockQuestions);
};
