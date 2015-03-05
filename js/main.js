var $btnExpandPanel = $('.btn-expand-panel');
var $panel = $('.panel');
var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');
var $btnMove =$('.btn-move');
var $diamond =$('.diamond');


$btnExpandPanel.on('click', function () {
    $panel.toggleClass('js-expand-panel');
});

$btnShowHide.on('click', function () {
    $box.toggleClass('js-show-hide');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-movein-moveout');
});