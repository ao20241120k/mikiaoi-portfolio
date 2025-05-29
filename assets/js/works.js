"use strict";

// 制作品紹介のスライドショーの設定
$(document).ready(function () {
    $(".works-slick").slick({
        slidesToShow: 1,    // 表示するスライド数
        slidesToScroll: 1,  // スクロールするスライド数
        centerMode: true,   // 中央揃え
        variableWidth: true, // 幅の自動調整
        autoplay: true, // 自動再生ON/OFF
        autoplaySpeed: 3000, // 自動再生スピード[msec]
        infinite: true, // ループ再生ON/OFF
        cssEase: 'linear', // イージングモード
        pauseOnFocus: true,    // フォーカスで停止ON/OFF
        pauseOnHover: true,    // ホバーで停止ON/OFF
        swipeToSlide: true, // スワイプ切り替えON/OFF
        adaptiveHeight: true, // 高さの自動調整ON/OFF
    });
});
