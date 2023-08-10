const questionsAvecReponses = [
    {
        question: "Quel film Disney met en scène une jeune fille nommée Ariel qui rêve de devenir humaine ?",
        reponseCorrecte: "La Petite Sirène",
        mauvaisesReponses: ["Blanche-Neige et les Sept Nains", "La Reine des Neiges", "Mulan"]
    },
    {
        question: "Comment s'appelle le lionceau protagoniste du 'Roi Lion' ?",
        reponseCorrecte: "Simba",
        mauvaisesReponses: ["Simbu", "Leo", "Tigrou"]
    },
    {
        question: "Quelle fée maladroite aide Cendrillon à se rendre au bal dans le film du même nom ?",
        reponseCorrecte: "La Marraine la Fée (Fée Clochette)",
        mauvaisesReponses: ["Fée Carabosse", "Fée Marraine la Sorcière", "Fée Tapette"]
    },
    {
        question: "Quel film Disney raconte les aventures d'Aladdin et de son génie ?",
        reponseCorrecte: "Aladdin",
        mauvaisesReponses: ["Le Magicien d'Oz", "Le Prince des Voleurs", "Le Voleur et la Lampe"]
    },
    {
        question: "Comment s'appelle la méchante sorcière dans 'La Belle au bois dormant' ?",
        reponseCorrecte: "Maléfique",
        mauvaisesReponses: ["Cruella de Vil", "Malévola", "Ursula"]
    },
    {
        question: "Quel film présente une jeune femme du nom de Belle qui se lie d'amitié avec une bête ensorcelée ?",
        reponseCorrecte: "La Belle et la Bête",
        mauvaisesReponses: ["La Belle et la Chauve-souris", "La Belle et la Grenouille", "La Belle et la Licorne"]
    },
    {
        question: "Comment se nomme le jouet cowboy dans la série de films 'Toy Story' ?",
        reponseCorrecte: "Woody",
        mauvaisesReponses: ["Woody le Viking", "Billy le Cow-boy", "Andy le Cow-boy"]
    },
    {
        question: "Quelle princesse Disney a une sœur nommée Anna ?",
        reponseCorrecte: "Elsa",
        mauvaisesReponses: ["Blanche-Neige", "Jasmine", "Mulan"]
    },
    {
        question: "Quel film d'animation suit les aventures de Simba après qu'il a quitté la Terre des Lions ?",
        reponseCorrecte: "Le Roi Lion 2: L'Honneur de la Tribu (ou Le Roi Lion 3: Hakuna Matata)",
        mauvaisesReponses: ["Simba et la Grande Aventure", "Simba à New York", "Simba, le Roi des Singes"]
    },
    {
        question: "Comment s'appelle le poisson-clown protagoniste dans 'Le Monde de Nemo' ?",
        reponseCorrecte: "Nemo",
        mauvaisesReponses: ["Doris", "Bubulle", "Marcel"]
    },
    {
        question: "Quelle est la sorcière de mer qui conclut un accord avec Ursula dans 'La Petite Sirène' ?",
        reponseCorrecte: "Morgana",
        mauvaisesReponses: ["La Sorcière des Sables", "La Sorcière des Eaux", "La Sorcière des Vents"]
    },
    {
        question: "Quel film Disney présente une histoire de romance entre Tiana et le prince Naveen, transformé en grenouille ?",
        reponseCorrecte: "La Princesse et la Grenouille",
        mauvaisesReponses: ["La Princesse et le Têtard", "Tiana et le Sorcier", "La Princesse et le Lézard"]
    },
    {
        question: "Comment s'appelle la fée marraine de Cendrillon ?",
        reponseCorrecte: "La Bonne Fée (ou la Marraine la Fée)",
        mauvaisesReponses: ["La Marraine la Sorcière", "La Fée Clochette", "La Fée Baguette"]
    },
    {
        question: "Quelle est la malédiction qui est brisée par un baiser d'amour véritable dans 'La Belle et la Bête' ?",
        reponseCorrecte: "La malédiction de la Bête",
        mauvaisesReponses: ["La Malédiction de l'Ennui Éternel", "La Malédiction du Mauvais Café", "La Malédiction du Pyjama Qui Gratte"]
    },
    {
        question: "Quel film met en scène des jouets qui prennent vie lorsque les humains ne sont pas présents ?",
        reponseCorrecte: "Toy Story",
        mauvaisesReponses: ["Le Monde des Chaussettes Perdues", "Les Jouets Enragés", "La Révolte des Poupées"]
    },
    {
        question: "Comment s'appelle la petite sirène dans le film éponyme ?",
        reponseCorrecte: "Ariel",
        mauvaisesReponses: ["Vanessa", "Aquabella", "Perla"]
    },
    {
        question: "Quel film Disney se déroule dans la ville d'Agrabah ?",
        reponseCorrecte: "Aladdin",
        mauvaisesReponses: ["Les Aventures d'Alibabou", "L'Énigme d'Agrabah", "Le Secret de la Lampe"]
    },
    {
        question: "Comment s'appelle le méchant capitaine pirate dans 'Peter Pan' ?",
        reponseCorrecte: "Capitaine Crochet",
        mauvaisesReponses: ["Capitaine Parapluie", "Capitaine Banane", "Capitaine Pantoufle"]
    },
    {
        question: "Quel film d'animation présente une jeune Polynésienne du nom de Vaiana ?",
        reponseCorrecte: "Vaiana (ou Moana en anglais)",
        mauvaisesReponses: ["Vaiana et l'Île Magique", "Vaiana et le Trésor Caché", "Vaiana et les Dauphins Chanteurs"]
    },
    {
        question: "Comment s'appellent les deux sœurs princesses du royaume d'Arendelle dans 'La Reine des neiges' ?",
        reponseCorrecte: "Elsa et Anna",
        mauvaisesReponses: ["Elsa et Glace", "Anna et Blizzard", "Sven et Kristoff"]
    }
];


// ... Continuer de la même manière pour les autres questions

        const questionElement = document.getElementById('question');
        const answersContainer = document.getElementById('answers');
        const resultCard = document.getElementById('result-card');
        const scoreElement = document.getElementById('score');
        const questionCardElement = document.getElementById('question-card');
        
        let currentQuestionIndex = 0;
        let score = 0;
        
        function showQuestion() {
            const questionData = questionsAvecReponses[currentQuestionIndex];
            questionElement.textContent = questionData.question;
            answersContainer.innerHTML = ''; // Clear previous answers
            
            // Create answer buttons
            const allAnswers = [questionData.reponseCorrecte, ...questionData.mauvaisesReponses];
            allAnswers.sort(() => Math.random() - 0.5); // Shuffle the answers
            
            allAnswers.forEach(answer => {
                const answerButton = document.createElement('button');
                answerButton.textContent = answer;
                answerButton.addEventListener('click', () => checkAnswer(answer, questionData.reponseCorrecte));
                answersContainer.appendChild(answerButton);
            });
        }
        
        function checkAnswer(selectedAnswer, correctAnswer) {
            if (selectedAnswer === correctAnswer) {
                score++;
            }
            
            currentQuestionIndex++;
            if (currentQuestionIndex < questionsAvecReponses.length) {
                showQuestion();
            } else {
                showResult();
            }
        }
        
        function showResult() {
            questionElement.textContent = '';
            answersContainer.innerHTML = '';
            questionCardElement.style.display = 'none';
            resultCard.style.display = 'block';
            scoreElement.textContent = score;
        }
        
        // Start the quiz
        showQuestion();