document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const studentIdInput = document.getElementById("studentId");
  const studentNameInput = document.getElementById("studentName");
  const resultBox = document.getElementById("result");
  const googleIdSpan = document.getElementById("googleId");
  const googlePwSpan = document.getElementById("googlePw");

  // 예시용 데이터
  const accountData = [
    { id: "10101", name: "홍수정", googleId: "hong101@school.com", googlePw: "pw1234" },
    { id: "10102", name: "김명희", googleId: "kimmj@school.com", googlePw: "pw5678" },
    { id: "10102", name: "이철민", googleId: "kimmj@school.com", googlePw: "pw5678" },
    { id: "10103", name: "이승연", googleId: "seungyeon@school.com", googlePw: "pw9999" }
    // 여기에 계속 추가 가능
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 폼 제출 막기

    const enteredId = studentIdInput.value.trim();
    const enteredName = studentNameInput.value.trim();

    const matchedAccount = accountData.find(
      (item) => item.id === enteredId && item.name === enteredName
    );

    if (matchedAccount) {
      googleIdSpan.textContent = matchedAccount.googleId;
      googlePwSpan.textContent = matchedAccount.googlePw;
      resultBox.style.display = "block";
    } else {
      googleIdSpan.textContent = "-";
      googlePwSpan.textContent = "-";
      resultBox.style.display = "block";
      alert("일치하는 계정 정보가 없습니다. 학번과 이름을 다시 확인하세요.");
    }
  });
});
