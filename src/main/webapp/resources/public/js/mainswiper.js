$(document).ready(function () {
    new Swiper(".swiper-container", {
        slidesPerView: 7, // 동시에 보여줄 슬라이드 갯수
        spaceBetween: 15, // 슬라이드간 간격
        slidesPerGroup: 7, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음
        cssMode: true,
        longSwipes: true,
        speed: 5000,

        // 그룹수가 맞지 않을 경우 빈칸으로 메우기
        // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
        loopFillGroupWithBlank: false,

        loop: true, // 무한 반복

        pagination: {
            // 페이징
            el: ".swiper-pagination",
            clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
            type: "bullets",
        },
        autoplay: {
            // 자동 슬라이드 설정 , 비 활성화 시 false

            delay: 2000, // 시간 설정

            disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        navigation: {
            // 네비게이션
            nextEl: ".swiper-button-next", // 다음 버튼 클래스명
            prevEl: ".swiper-button-prev", // 이번 버튼 클래스명
        },
    });
});
