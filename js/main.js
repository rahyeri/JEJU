$(function () { // 달력
  $('#datetimepicker1').datetimepicker({
    format: 'L'
  });
  $('#datetimepicker2').datetimepicker({
    format: 'L',
    useCurrent: false
  });
  $("#datetimepicker1").on("change.datetimepicker", function (e) {
    $('#datetimepicker2').datetimepicker('minDate', e.date);
  });
  $("#datetimepicker2").on("change.datetimepicker", function (e) {
    $('#datetimepicker1').datetimepicker('maxDate', e.date);
  });
});
// 푸터 예약안내
$(document).ready(function () {

  $('.f_rbox').hide();
  $('.f_reservation').click(function () {
    $('.f_rbox').slideToggle();
    $(this).css('background', '#ccc').css('font-weight', 'bold');
  });
  //스크롤 내려올시 inner2 나타나게하기

  $(window).scroll(function(){
    let Pos = $(this).scrollTop();

    if(Pos>=30){
      $('.inner2').animate({
        'top':'-100px',
        'opacity':'1'},300);
    } else{
      $('.inner2').animate({
        'top':'0px',
        'opacity':'0'
      },300);
    }
  });
  


  // 방타입클릭
  let Room = $('#roombox');
  $('#type1').click(function () {
    $("#roombox").attr("src", "./01.img/1ff.jpg");
    $("#t_b").fadeOut();
    $(this).addClass('act3');
    $('#type2').removeClass('act3');
    $('.rbotton1').show();
    $('.rbotton2').hide();
  });
  $('#type2').click(function () {
    $('#roombox').attr('src', './01.img/2f.jpg');
    $('#t_b').fadeIn();
    $(this).addClass('act3');
    $('#type1').removeClass('act3');
    $('.rbotton2').show();
    $('.rbotton1').hide();
  });
  // 룸이미지내비버튼들
  $('#rbtn01').click(function () {
    Room.attr("src", "./01.img/a1.jpg");
    $('.inner1 input[type="button"]').removeClass();
    $(this).toggleClass('btn_on');
  });
  $('#rbtn02').click(function () {
    Room.attr("src", "./01.img/a2.jpg");

    $('.inner1 input[type="button"]').removeClass();
    $(this).toggleClass('btn_on');
  });
  $('#rbtn03').click(function () {
    Room.attr("src", "./01.img/a3.jpg");

    $('.inner1 input[type="button"]').removeClass();
    $(this).toggleClass('btn_on');
  });
  $('#rbtn04').click(function () {
    Room.attr("src", "./01.img/b1.jpg");

    $('.inner1 input[type="button"]').removeClass();
    $(this).toggleClass('btn_on');
  });
  $('#rbtn05').click(function () {
    Room.attr("src", "./01.img/b2.jpg");

    $('.inner1 input[type="button"]').removeClass();
    $(this).toggleClass('btn_on');
  });
  $('#rbtn06').click(function () {
    Room.attr("src", "./01.img/b3.jpg");

    $('.inner1 input[type="button"]').removeClass();
    $(this).toggleClass('btn_on');
  });
  // 내비
  let g = $('.gnb');
  $('i.fa-close').click(function () {
    g.animate({
      'right': '-100%'
    }, 700);
  });
  $('i.fa-bars').click(function () {
    g.animate({
      'right': '0'
    }, 600);

    return false;
  });
  let s = $('.gnb > ul > li > a');
  let sub = $('.gnb01');
  s.click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('act');
    $(this).find('i').toggleClass('act1');
  });
  // 예약 slidedown
  let r = $('#reservation > ul > li > a');
  r.click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('act2');
    return false;
  });
  let rDate = $('#reservation > ul > li:first-child > a');
  rDate.click(function () {
    $('.col-xs-4').show();
  });

  $('.r_sub').hide();
  let rType = $('#reservation > ul > li:nth-child(2) > a');
  rType.click(function () {
    $('.r_sub > li').show();
  });
  $('.r_sub > li:first-child').click(function () {
    $('.r_sub > li:nth-child(2)').hide();
  });
  $('.r_sub > li:nth-child(2)').click(function () {
    $('.r_sub > li:first-child').hide();
  });
  $('#reservation > ul > li:nth-child(3) div').hide();
  $('#reservation > ul > li:nth-child(4) div').hide();
  $('#reservation > ul > li:last-child').hover(function () {
    $(this).animate({
      'width': '400px'
    }, 700);
    $(this).css('text-decoration', 'underline');
  }, function () {
    $(this).animate({
      'width': '200px'
    }, 500);
    $(this).css('text-decoration', 'none');
  });

  // 모달창닫기
  $('.modal a').click(function () {
    $('.modal').hide();
  });
});