$(document).ready(function(){

  NavbarFixer.init(document.querySelector('.js--init-navbar-fixer'));
  SmoothScroll.init();
  WindshieldForm.init(document.querySelector('.js--init-windshield-form'));

  $('.js--init-sticky-container').each(function(){
    var sc = StickyContainer();
    sc.init(this);
  });

  $('.js--init-navbar-buy-button').each(function(){
    var nbb = NavbarBuyButton();
    nbb.init(this);
  });

  $('.js--init-content-buy-button').each(function(){
    var cbb = ContentBuyButton();
    cbb.init(this);
  });

  $('.js--init-swatches').each(function(){
    var s = Swatches();
    s.init(this);
  });

  $('.js--init-posts-filter').each(function(){
    var pf = PostsFilter();
    pf.init(this);
  });

  // Form validation
  $('form input, form select, form textarea').each(function(){
    var fv = FormValidation();
    fv.init(this);
  });

  // Form ajax submit
  $('.js--init-ajax-submit').each(function(){
    var fas = FormAjaxSubmit();
    fas.init(this);
  });

  // Close mailchimp dialog after form submit
  $('.js--init-mailchimp-dialog').each(function(){
    var md = MailchimpDialog();
    md.init(this);
  });

  

  autosize(document.querySelectorAll('.js--init-autosize'));

  // Bootstrap's popovers
  $('[data-toggle="popover"]').popover();

  // Snipcart button attributes
  SnipcartButtonAttributes.init(document.querySelector('.js--init-snipcart-button-attributes'));
});
