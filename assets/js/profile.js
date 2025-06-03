"use strict";

// scrollしたらフェードインする設定
$(document).ready(function () {
    // アニメーションさせたい要素に 'slide' クラスを付けます
    var $elementsToAnimate = $('.slide');

    // 要素がビューポート内にあるかどうかを判定する関数
    function isElementInView(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        // 要素の少なくとも一部がビューポート内にあるかチェック
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    // スクロール時にアニメーションクラスを付与/削除する関数
    function checkAnimation() {
        $elementsToAnimate.each(function () {
            var $this = $(this);
            // まだ 'scroll-in' クラスがなく、ビューポート内に入ったらクラスを追加
            if (!$this.hasClass('scroll-in') && isElementInView(this)) {
                $this.addClass('scroll-in');
            }
            // オプション: ビューポートから外れたら再度非表示にする（アニメーションを繰り返す）場合
            // else if ($this.hasClass('scroll-in') && !isElementInView(this)) {
            //     $this.removeClass('scroll-in'); // これを有効にすると、スクロールアウトで再度透明になります
            // }
        });
    }

    // スクロール時とウィンドウサイズ変更時にチェックを実行
    $(window).on('scroll resize', function () {
        checkAnimation();
    });

    // ページ読み込み時にも一度チェック（初期表示で既にビューポート内にある要素のため）
    checkAnimation();
});
