var $btnExpandPanel = $('.btn-expand-panel');
var $panel = $('.panel');
var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $btnMove =$('.btn-move');
var $diamond =$('.diamond');
var $btnBounce =$('.btn-bounce');
var $circle =$('.circle');


$btnExpandPanel.on('click', function () {
    $panel.toggleClass('js-expand-panel');
});

$btnShowHide.on('click', function () {
    $box.toggleClass('js-show-hide');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-movein-moveout');
});

$btnBounce.on('click', function () {
              $circle.addClass('js-ball-bounce');
});

$circle.on('webkitAnimationEnd animationend', function () {
    $circle.removeClass('js-ball-bounce');
});
