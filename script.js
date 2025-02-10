const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const submitBtn = document.getElementById("submit-btn");
const retryBtn = document.getElementById("retry-btn");
const scoreText = document.getElementById("score");
const resultDetails = document.getElementById("result-details");

let userAnswers = [];

// Hiển thị câu hỏi
function renderQuestions() {
	quizContainer.innerHTML = ""; // Đảm bảo không bị trùng câu hỏi khi render lại
	questions.forEach((q, index) => {
		const questionDiv = document.createElement("div");
		questionDiv.classList.add("question");
		questionDiv.innerHTML = `<p>${q.question}</p>`;
		q.options.forEach((option, i) => {
			const optionDiv = document.createElement("div");
			optionDiv.classList.add("option");

			// Tạo nhãn chứa cả input và nội dung để mở rộng vùng chọn
			optionDiv.innerHTML = `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label>
            `;

			// Gán sự kiện click để chọn radio button khi nhấp vào bất kỳ đâu trong đáp án
			optionDiv.addEventListener("click", () => {
				const radio = optionDiv.querySelector("input[type='radio']");
				if (radio) radio.checked = true;
			});

			questionDiv.appendChild(optionDiv);
		});
		quizContainer.appendChild(questionDiv);
	});
}

// Chấm điểm
function calculateScore() {
	let score = 0;
	userAnswers = [];
	questions.forEach((q, index) => {
		const selectedOption = document.querySelector(
			`input[name="question${index}"]:checked`
		);
		if (selectedOption) {
			const userAnswer = parseInt(selectedOption.value);
			userAnswers.push({
				question: q.question,
				userAnswer,
				correctAnswer: q.correctAnswer,
			});
			if (userAnswer === q.correctAnswer) {
				score++;
			}
		}
	});
	return score;
}

// Hiển thị kết quả
function showResult(score) {
	quizContainer.classList.add("hidden");
	resultContainer.classList.remove("hidden");
	scoreText.textContent = `Bạn đã làm đúng ${score}/${questions.length} câu!`;
	resultDetails.innerHTML = "";
	userAnswers.forEach((ans, index) => {
		const questionClass =
			ans.userAnswer === ans.correctAnswer ? "correct" : "incorrect"; // Thêm lớp cho câu sai
		resultDetails.innerHTML += `
            <div class="${questionClass}">
                <p>Câu ${index + 1}: ${ans.question}</p>
                <p>Bạn chọn: ${questions[index].options[ans.userAnswer]}</p>
                <p>Đáp án đúng: ${
									questions[index].options[ans.correctAnswer]
								}</p>
            </div>
        `;
	});
}

// Sự kiện nút "Hoàn thành bài thi"
submitBtn.addEventListener("click", () => {
	const score = calculateScore();
	showResult(score);
});

// Sự kiện nút "Làm lại bài thi"
retryBtn.addEventListener("click", () => {
	resultContainer.classList.add("hidden");
	quizContainer.classList.remove("hidden");
	renderQuestions();
});

// Khởi tạo trang web
renderQuestions();
