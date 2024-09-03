function calculateScore() {
    const entry1 = parseInt(document.getElementById("entry1").value);
    const entry2 = parseInt(document.getElementById("entry2").value);
    const entry3 = parseInt(document.getElementById("entry3").value);
    const entry4 = parseInt(document.getElementById("entry4").value);

    const totalScore = entry1 + entry2 + entry3 + entry4;
    const maxScore = 30; // 기준 점수
    const remainingScore = maxScore - totalScore;

    const resultElement = document.getElementById("result");
    const remainingElement = document.getElementById("remaining");

    if (totalScore > maxScore) {
        resultElement.textContent = `총 점수: ${totalScore}점. 최대 한도를 초과했습니다. 출전 불가.`;
        resultElement.style.color = '#ff4e4e';
        remainingElement.textContent = `${Math.abs(remainingScore)}점 초과되었습니다.`;
        remainingElement.style.color = '#ff4e4e';
    } else {
        resultElement.textContent = `총 점수: ${totalScore}점. 출전 가능합니다.`;
        resultElement.style.color = '#4eff4e';
        remainingElement.textContent = `남은 점수: ${remainingScore}점.`;
        remainingElement.style.color = '#4eff4e';
    }
}
