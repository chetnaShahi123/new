/*show password*/
$('.show-password').on('click', function () {
 var getAttr = $(this).parent('.group').find('.password-textbox').attr('type');
 var getAttr1 = $(this).parent('.group').find('.reset-textbox').attr('type');
 if (getAttr == 'password') {
  $(this).parent('.group').find('.password-textbox').attr('type', 'text');
  $(this).find('.eye').attr('src', 'assets/images/eye.svg');
 } else {

  $(this).parent('.group').find('.password-textbox').attr('type', 'password');
  $(this).find('.eye').attr('src', 'assets/images/showPassword.svg');
 }

 if (getAttr1 == 'password') {
  $(this).parent('.group').find('.reset-textbox').attr('type', 'text');
  $(this).find('.eye-confirm').attr('src', 'assets/images/eye.svg');
 } else {

  $(this).parent('.group').find('.reset-textbox').attr('type', 'password');
  $(this).find('.eye-confirm').attr('src', 'assets/images/showPassword.svg');
 }
});
/*show password*/
/*material textbox*/
$('.text-box').blur(function () {
 if ($(this).val().length != 0) {
  $(this).addClass('field-foucused');
 } else {
  $(this).removeClass('field-foucused');
 }

});

$('.text-box').each(function () {
 if ($(this).val().length != "") {
  $(this).addClass('field-foucused');
 }
});
/*material textbox end*/

$(document).ready(function () {
 var getWidth = $(window).width();
 /*mobile navigation starts*/
 $('.mobile-nav').click(function (event) {
  if ($(this).hasClass("open")) {
   $('body').css('overflow', 'auto');
   $(".left-nav").removeClass('active');
   $(".left-nav-inner").animate({
    left: '-100%'
   });
   $(".left-nav").css('display', 'none');
   $('.mobile-nav').removeClass('open');
  } else {
   $('body').css('overflow', 'hidden');
   $(".left-nav").addClass('active');
   $(".left-nav-inner").animate({
    left: '0'
   });
   $(".left-nav").css('display', 'block');
   $('.mobile-nav').addClass('open');
  }
 });
 /*mobile navigation ends*/
 /*profile tab starts*/
 $('.profile-tabs li').click(function () {
  var elem = $(this);
  var getId = elem.attr('data-name');
  if (elem.hasClass('active')) {
   if (getWidth <= 767) {
    $('.profile-tab-data').hide();
    $(this).parents('.profile-header').removeClass('mobile-view');
    $(this).removeClass('active');
    $('.profile-tabs li, .profile-detail').show();
   }
  } else {
   $('.profile-tabs li').removeClass('active');
   $('.profile-tab-data').removeClass('active').hide();
   elem.addClass('active');
   $('#' + getId).fadeIn(400);
   if (getWidth <= 767) {
    $('.profile-header').addClass('mobile-view');
    $('.profile-tabs li, .profile-detail').hide();
   }
  }
 });
 if (getWidth <= 767) {
  $('.profile-tab-data, .profile-tabs li').removeClass('active');
 }
 /*profile tab ends*/
 /*Edit Mode Starts*/
 $('.profile-tab-data .edit-link').click(function () {
  $(this).parent('.personal-detail-tab').hide();
  $(this).parent('.personal-detail-tab').next('.personal-detail-tab.edit').fadeIn(400);
 });
 $('.referees-tab .edit-link').click(function () {
  $(this).parent('.referees-tab').hide();
  $(this).parent('.referees-tab').next('.referees-tab.edit').fadeIn(400);
 });
 $('.tenants-list .editer-link').click(function () {
  $('.co-tenants-tab').hide();
  $('.co-tenants-tab.edit').fadeIn(400);
 });
 $('.tenants-list .referees-link').click(function () {
  $('.co-tenants-tab').hide();
  $('.co-tenants-tab.referees').fadeIn(400);
 });
 $('.co-tenants-tab.referees .edit-link').click(function () {
  $(this).parent('.co-tenants-tab').hide();
  $(this).parent('.co-tenants-tab').siblings('.co-tenants-tab.referees-edit').fadeIn(400);
 });
 $('.profile-tab-data .add-link').click(function () {
  $(this).parent('.co-tenants-tab').hide();
  $(this).parent('.co-tenants-tab').siblings('.co-tenants-tab.add').fadeIn(400);
 });
 $('.profile-tab-data .next-link').click(function () {
  $('.co-tenants-tab').hide();
  $('.co-tenants-tab.view').fadeIn(400);
 });
 /*Edit Mode Ends*/
 $(".dob").datepicker({
  showOn: "button",
  buttonImage: "assets/images/calendar-icon.svg",
  buttonImageOnly: true,
  buttonText: "Select Date"
 });
 $(".since-date").datepicker({
  showOn: "button",
  buttonImage: "assets/images/calendar-icon.svg",
  buttonImageOnly: true,
  buttonText: "Select Date",
  dateFormat: 'MM yy',
  changeMonth: true,
  changeYear: true
 });
 $(".year").datepicker({
  showOn: "button",
  buttonImage: "assets/images/calendar-icon.svg",
  buttonImageOnly: true,
  buttonText: "Select Date",
  dateFormat: 'yy',
  changeMonth: true,
  changeYear: true
 });
 if (getWidth >= 1025) {
  /*Custom Select*/
  $('.select').niceSelect();
 }
});