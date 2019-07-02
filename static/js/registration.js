$('#signup').click(function(e) {
    e.preventDefault();
   if (isSignUpFormValid() == true) {
        $.post('http://localhost:8000/signup/', $('#signup_form').serialize())
            .done(function(data) {
                if (data.success) {
                    $('#formSuccess').html('Record created successfully').fadeIn().delay(5000).fadeOut();
                    $('#formError').html('');
                    $('#signup_form')[0].reset();
                } else {
                    $('#formError').html(data.errorMsg).fadeIn().delay(5000).fadeOut();
                    $('#formSuccess').html('');
                }
            }).fail(function(error) {
                alert('error' +error);
        });
    }
})

function isSignUpFormValid() {
    var first_name = $('[name=fname]');
    var last_name = $('[name=lname]');
    var email = $('[name=email]');
    var phoneno = $('[name=phoneno]');
    var isValid = true;
    if(first_name.val().length < 3) {
        first_name.parent().find('.errors').html('Name must contain min 3 characters..');
        isValid = false;
    } else {
        var fn = /^[a-z]+$/i.test(first_name.val());
        first_name.parent().find('.errors').html();
        if(fn == false){
            first_name.parent().find('.errors').html('Name contains only alphabets..!')
            isValid = false
        }
    }
    // validate last name data
    if(last_name.val().length < 3) {
        last_name.parent().find('.errors').html('Last Name must contain min 3 characters..');
        isValid = false;
    } else {
        last_name.parent().find('.errors').html('');
        var ln = /^[a-z]+$/i.test(last_name.val());
        if(ln == false){
            last_name.parent().find('.errors').html('Last Name contains only alphabets..!')
            isValid = false
        }
    }
    // validate email address
    var emailval = $('[name=email]').val();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    eres = re.test(String(emailval).toLowerCase());
    if(eres){
        email.parent().find('.errors').addClass('hide');
    } else {
        email.parent().find('.errors').removeClass('hide');
        isValid = false;
    }

    var phone = /^\d{10}$/;
    if(!phoneno.val().match(phone)) {
         phoneno.parent().find('.errors').html('Mobile no contain 10 digits..!');
         isValid = false;
    } else {
        phoneno.parent().find('.errors').html('');
    }
    var password = $('[name=password]');
    var cpassword = $('[name=cpassword]');
    var pvalue = password.val();
    var cpvalue = cpassword.val();
    if(pvalue == cpvalue){
        cpassword.parent().find('.errors1').html('');
    } else {
        cpassword.parent().find('.errors1').html('Password mismatch..');
        isValid = false;
    }
    return isValid;

}

$('[name=phoneno]').on('change', function() {
    var phoneno = $('[name=phoneno]');
    var phone = /^\d{10}$/;
    if(!phoneno.val().match(phone)) {
         phoneno.parent().find('.errors').html('Mobile no contain 10 digits..!');
         isValid = false;
    } else {
        phoneno.parent().find('.errors').html('');
    }
});


$('[name=fname]').on('input', function() {
    var first_name = $('[name=fname]');
    var fn = /^[a-z]+$/i.test(first_name.val());
    first_name.parent().find('.errors').html('');
    if(fn == false){
        first_name.parent().find('.errors').html('Name contains only alphabets..!')
    }
});
