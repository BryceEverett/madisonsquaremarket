$('document').ready( () => {
    $('#cartMenu').hide();
    $('#accountMenu').hide();
    $('#helpMenu').hide();

    $('#cart').on('click', () => {
      $('#cartMenu').show();
    });
    
    $('#account').on('click', () => {
      $('#accountMenu').show();
    });
    
    $('#help').on('click', () => {
      $('#helpMenu').show();
    });
    
    $('.dropdown-menu').on('mouseleave', () => {
     $('#cartMenu').hide();
     $('#accountMenu').hide();
     $('#helpMenu').hide();
    })
    });
    