//swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1.5,
    loop: true,
    speed: 5000,
    allowTouchMove: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
      // スライドの表示枚数：500px以上の場合
      500: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 6,
      }
    }
});

//タブデザイン
var tabSwitchTab = 'js-tab_switch--tab'; // 切り替えタブ要素
var tabSwitchBody = 'js-tab_switch--body'; // 切り替えられるコンテンツ要素
var tabSwitchBtn = 'js-tab_switch--button'; // 切り替えタブ要素内ボタン
var classCurrent = 'is-current'; // アクティブを示すclass

if($('.' + tabSwitchTab).length) {
  // 初期表示時
  $(window).on('load', function() {
    // タブ設定の子要素で一番最初の要素にアクティブを示すclass追加
    $('.' + tabSwitchTab).children(':first-child').addClass(classCurrent);

    // 切り替えタブ要素内のaタグにボタンを示すclass追加
    $('.' + tabSwitchTab).find('a').addClass(tabSwitchBtn);

    // 切り替えられるコンテンツ要素で一番最初の要素以外を非表示
    $('.' + tabSwitchBody).children(':not(:first-child)').hide();
  });

  // タブクリック時
  $(document).on('click', '.' + tabSwitchBtn, function(evt) {
    // アニメーション速度設定
    var animateSpeed = 300;

    // aタグの機能をリセット
    evt.preventDefault();

    // 親要素にアクティブを示すclassがついていなかったら処理をする
    if(!$(this).parent().hasClass(classCurrent)) {

      // クリックした要素のhref内のidを取得
      var tabTargetContent = $(this).attr('href');

      // hrefの中身がアンカーリンクだったら処理をする（hrefの1文字目が#で判定）
      if(tabTargetContent.charAt(0) === '#') {
        // クリックした要素の親要素の同列のコンテンツからアクティブを示すclassを削除
        $(this).parent().siblings().removeClass(classCurrent);

        // クリックした要素の親にアクティブを示すclass追加
        $(this).parent().addClass(classCurrent);

        // 切り替えられるコンテンツ要素を全て非表示
        $(tabTargetContent).siblings().hide();

        // クリック先の要素のみフェードイン
        $(tabTargetContent).css('display', 'grid').hide().fadeIn(animateSpeed);
      }
    }
  });
}

// alert('hello');


//ハンバーガーメニュー　class名：is-openMenu
$(function () {
  $('.c_hamburger').on('click', () => {
    $('body').toggleClass('is-openMenu');
  })

  $('.l_header__navList').click(function () {
    $('body').removeClass('is-openMenu');
  });
})
