function navigateTo(page) {
    switch(page) {
        case 'entry-calculator':
            window.location.href = 'entry/index.html';
            break;
        case 'member-calculator':
            alert("팀리그 시작시 페이지 열릴 예정입니다");
            // 실제로는 페이지 이동 로직을 추가
            break;
        case 'score-calculator':
            alert("팀리그 시작시 페이지 열릴 예정입니다");
            // 실제로는 페이지 이동 로직을 추가
            break;
        case 'ranking':
            alert("팀리그 시작시 페이지 열릴 예정입니다");
            // 실제로는 페이지 이동 로직을 추가
            break;
        default:
            alert("잘못된 페이지입니다.");
    }
}
