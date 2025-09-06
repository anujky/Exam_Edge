// Sample questions data
const mockQuestions = [
  {
    question: "Which isolation level in SQL prevents dirty reads but allows non-repeatable reads?",
    options: ["Read Uncommitted", "Read Committed", "Repeatable Read", "Serializable"],
    correctAnswer: 1
  },
  {
    question: "In operating systems, starvation can be prevented in Priority Scheduling by:",
    options: ["Round Robin execution", "Aging technique", "Preemptive scheduling only", "Using larger time quantum"],
    correctAnswer: 1
  },
  {
    question: "Which TCP congestion control mechanism uses exponential increase of congestion window?",
    options: ["Slow Start", "Congestion Avoidance", "Fast Recovery", "Fast Retransmit"],
    correctAnswer: 0
  },
  {
    question: "Which data structure is most suitable for implementing LRU cache efficiently?",
    options: ["Queue + HashMap", "Stack + Array", "Doubly Linked List + HashMap", "Binary Search Tree"],
    correctAnswer: 2
  },
  {
    question: "Which normal form eliminates transitive dependency in relational databases?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    correctAnswer: 2
  },
  {
    question: "Which compiler phase detects semantic errors such as type mismatch?",
    options: ["Lexical Analysis", "Syntax Analysis", "Semantic Analysis", "Intermediate Code Generation"],
    correctAnswer: 2
  },
  {
    question: "In OS, Belady’s anomaly may occur in which page replacement policy?",
    options: ["LRU", "Optimal", "FIFO", "Clock"],
    correctAnswer: 2
  },
  {
    question: "Which RAID level provides fault tolerance by striping with distributed parity?",
    options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
    correctAnswer: 2
  },
  {
    question: "Which addressing mode in computer architecture requires the effective address to be inside a register?",
    options: ["Immediate", "Register Indirect", "Indexed", "Direct"],
    correctAnswer: 1
  },
  {
    question: "In distributed systems, Lamport Timestamps are used to:",
    options: ["Synchronize physical clocks", "Maintain logical ordering of events", "Prevent deadlocks", "Perform leader election"],
    correctAnswer: 1
  },
  {
    question: "Which process scheduling algorithm can lead to convoy effect?",
    options: ["Round Robin", "First Come First Served", "SJF", "Priority Scheduling"],
    correctAnswer: 1
  },
  {
    question: "Which algorithm is used for finding shortest paths in a graph with negative edge weights but no negative cycles?",
    options: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Kruskal"],
    correctAnswer: 1
  },
  {
    question: "Which cryptographic algorithm is asymmetric?",
    options: ["AES", "DES", "RSA", "Blowfish"],
    correctAnswer: 2
  },
  {
    question: "Which DBMS recovery technique uses both undo and redo operations?",
    options: ["Shadow Paging", "Checkpointing", "Logging", "Rollback only"],
    correctAnswer: 2
  },
  {
    question: "Which OSI layer is responsible for ensuring reliable transmission through segmentation and reassembly?",
    options: ["Network", "Transport", "Session", "Data Link"],
    correctAnswer: 1
  },
  {
    question: "In databases, phantom reads are prevented at which isolation level?",
    options: ["Read Committed", "Repeatable Read", "Serializable", "Read Uncommitted"],
    correctAnswer: 2
  },
  {
    question: "Which of the following prevents SQL Injection attacks effectively?",
    options: ["Stored Procedures", "Prepared Statements", "Triggers", "Indexes"],
    correctAnswer: 1
  },
  {
    question: "Which tree data structure is used for database indexing?",
    options: ["AVL Tree", "Red-Black Tree", "B+ Tree", "Heap"],
    correctAnswer: 2
  },
  {
    question: "Which page replacement algorithm guarantees minimum page faults if future knowledge is available?",
    options: ["LRU", "FIFO", "Optimal", "Clock"],
    correctAnswer: 2
  },
  {
    question: "Which SQL clause is used to filter groups after aggregation?",
    options: ["WHERE", "HAVING", "ORDER BY", "DISTINCT"],
    correctAnswer: 1
  },
  {
    question: "In computer networks, which protocol translates IP addresses to MAC addresses?",
    options: ["DNS", "DHCP", "ARP", "RARP"],
    correctAnswer: 2
  },
  {
    question: "Which normalization form eliminates multivalued dependency?",
    options: ["2NF", "3NF", "BCNF", "4NF"],
    correctAnswer: 3
  },
  {
    question: "Which compiler optimization removes repeated calculations?",
    options: ["Constant Folding", "Common Subexpression Elimination", "Loop Unrolling", "Dead Code Elimination"],
    correctAnswer: 1
  },
  {
    question: "In OS, thrashing occurs when:",
    options: ["Too many processes are in ready queue", "CPU utilization is high", "Pages are swapped excessively", "Disk space is low"],
    correctAnswer: 2
  },
  {
    question: "Which algorithm is used in TCP to handle lost packets?",
    options: ["Fast Retransmit", "Slow Start", "Congestion Avoidance", "Selective Repeat"],
    correctAnswer: 0
  },
  {
    question: "Which of the following is NOT a NoSQL database?",
    options: ["MongoDB", "Cassandra", "MySQL", "Redis"],
    correctAnswer: 2
  },
  {
    question: "Which OSI layer is responsible for encryption and compression?",
    options: ["Session", "Presentation", "Application", "Transport"],
    correctAnswer: 1
  },
  {
    question: "Which data structure is used in DFS traversal?",
    options: ["Queue", "Stack", "Heap", "Priority Queue"],
    correctAnswer: 1
  },
  {
    question: "Which type of join returns all tuples from both tables with NULLs for non-matches?",
    options: ["Inner Join", "Left Join", "Right Join", "Full Outer Join"],
    correctAnswer: 3
  },
  {
    question: "Which concurrency control protocol uses timestamps to order transactions?",
    options: ["Lock-based Protocol", "Timestamp Ordering", "Two-Phase Commit", "Validation-Based"],
    correctAnswer: 1
  },
  {
    question: "In computer architecture, which hazard occurs due to simultaneous access to the same resource?",
    options: ["Data Hazard", "Control Hazard", "Structural Hazard", "Pipeline Hazard"],
    correctAnswer: 2
  },
  {
    question: "Which type of cache mapping allows a block to be placed in any line of cache?",
    options: ["Direct Mapping", "Associative Mapping", "Set Associative", "Modulo Mapping"],
    correctAnswer: 1
  },
  {
    question: "Which RAID level provides both striping and mirroring?",
    options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
    correctAnswer: 3
  },
  {
    question: "Which scheduling algorithm is most suitable for time-sharing systems?",
    options: ["SJF", "Priority", "Round Robin", "FCFS"],
    correctAnswer: 2
  },
  {
    question: "Which algorithm is used to detect cycles in a directed graph?",
    options: ["Kruskal", "DFS", "Prim’s", "Dijkstra"],
    correctAnswer: 1
  },
  {
    question: "Which of the following is a quantum-resistant cryptographic approach?",
    options: ["RSA", "Elliptic Curve Cryptography", "Lattice-based Cryptography", "Diffie-Hellman"],
    correctAnswer: 2
  },
  {
    question: "Which layer in TCP/IP model corresponds to OSI’s Session, Presentation, and Application layers?",
    options: ["Application", "Transport", "Internet", "Network Access"],
    correctAnswer: 0
  },
  {
    question: "Which disk scheduling algorithm may cause starvation?",
    options: ["FCFS", "SSTF", "SCAN", "C-SCAN"],
    correctAnswer: 1
  },
  {
    question: "Which SQL keyword ensures that all values in a column are different?",
    options: ["UNIQUE", "DISTINCT", "NOT NULL", "CHECK"],
    correctAnswer: 0
  },
  {
    question: "Which database anomaly occurs when deletion of data causes unintended loss of other data?",
    options: ["Update Anomaly", "Insertion Anomaly", "Deletion Anomaly", "Functional Anomaly"],
    correctAnswer: 2
  },
  {
    question: "Which TCP flag is used to initiate a connection?",
    options: ["ACK", "SYN", "FIN", "RST"],
    correctAnswer: 1
  },
  {
    question: "Which algorithm is used in public key cryptography for encryption and decryption?",
    options: ["AES", "RSA", "DES", "Blowfish"],
    correctAnswer: 1
  },
  {
    question: "Which SQL command is part of Transaction Control Language?",
    options: ["SAVEPOINT", "DELETE", "UPDATE", "CREATE"],
    correctAnswer: 0
  },
  {
    question: "Which OS concept allows a single CPU to execute multiple threads concurrently?",
    options: ["Multiprocessing", "Multithreading", "Virtualization", "Distributed Processing"],
    correctAnswer: 1
  },
  {
    question: "Which page replacement algorithm is also known as Second Chance?",
    options: ["LRU", "FIFO", "Clock", "Optimal"],
    correctAnswer: 2
  },
  {
    question: "Which C language keyword is used to define a variable whose value cannot be changed?",
    options: ["volatile", "const", "static", "extern"],
    correctAnswer: 1
  },
  {
    question: "Which file system is default in most modern Linux distributions?",
    options: ["NTFS", "FAT32", "ext4", "APFS"],
    correctAnswer: 2
  },
  {
    question: "Which DSA traversal technique uses a queue for level order processing?",
    options: ["Inorder", "Preorder", "Postorder", "Breadth First Search"],
    correctAnswer: 3
  },
  {
    question: "Which type of memory is fastest in the hierarchy?",
    options: ["Cache", "Main Memory", "Virtual Memory", "Hard Disk"],
    correctAnswer: 0
  },
  {
    question: "Which lock mode allows multiple transactions to read a database item simultaneously?",
    options: ["Shared Lock", "Exclusive Lock", "Binary Lock", "Two-Phase Lock"],
    correctAnswer: 0
  },
  {
    question: "Which SQL aggregate function returns the number of rows?",
    options: ["SUM", "AVG", "COUNT", "MAX"],
    correctAnswer: 2
  },
  {
    question: "Which database concept ensures that a transaction executes completely or not at all?",
    options: ["Consistency", "Isolation", "Atomicity", "Durability"],
    correctAnswer: 2
  },
  {
    question: "Which protocol is used for secure file transfer over SSH?",
    options: ["FTP", "SFTP", "TFTP", "FTPS"],
    correctAnswer: 1
  },
  {
    question: "Which OSI layer is responsible for frame synchronization and error detection?",
    options: ["Data Link", "Transport", "Network", "Session"],
    correctAnswer: 0
  },
  {
    question: "Which algorithm is used in compiler optimization to remove unreachable code?",
    options: ["Constant Folding", "Dead Code Elimination", "Loop Unrolling", "Strength Reduction"],
    correctAnswer: 1
  },
  {
    question: "Which OS concept provides the illusion of large memory by combining RAM and disk?",
    options: ["Virtual Memory", "Swapping", "Paging", "Segmentation"],
    correctAnswer: 0
  },
  {
    question: "Which protocol provides email retrieval with offline support?",
    options: ["SMTP", "POP3", "IMAP", "HTTP"],
    correctAnswer: 1
  },
  {
    question: "Which form of RAID provides no redundancy but maximum performance?",
    options: ["RAID 0", "RAID 1", "RAID 5", "RAID 6"],
    correctAnswer: 0
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
