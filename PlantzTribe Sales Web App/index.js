document.addEventListener("DOMContentLoaded", function () {
    // Apply styles to the "Read More" button
    var readMoreButton = document.querySelector('.read-more');
    readMoreButton.style.backgroundColor = '#4CAF50'; /* Green color */
    readMoreButton.style.color = 'white';
    readMoreButton.style.border = 'none';
    readMoreButton.style.padding = '10px 20px';
    readMoreButton.style.textAlign = 'center';
    readMoreButton.style.textDecoration = 'none';
    readMoreButton.style.display = 'inline-block';
    readMoreButton.style.fontSize = '16px';
    readMoreButton.style.margin = '4px 2px';
    readMoreButton.style.cursor = 'pointer';
    readMoreButton.style.borderRadius = '5px';

    // Apply styles to the login button and push it to the right
    var loginButton = document.querySelector('.login-button');
    loginButton.style.backgroundColor = '#00b345'; /* Green color */
    loginButton.style.color = 'white';
    loginButton.style.border = 'none';
    loginButton.style.padding = '10px 20px';
    loginButton.style.textAlign = 'center';
    loginButton.style.textDecoration = 'none';
    loginButton.style.display = 'inline-block';
    loginButton.style.fontSize = '16px';
    loginButton.style.marginLeft = 'auto';  // Push the login button to the right
    loginButton.style.cursor = 'pointer';
    loginButton.style.borderRadius = '5px';
});



$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });