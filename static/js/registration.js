/*
$('#signup').click(function (e){
    e.preventDefault();
   var fname = $('[name=fname]').val()
    var lname = $('[name=lname]').val()
    var email = $('[name=email]').val()
    var phoneno = $('[name=phoneno]').val()
    var password = $('[name=password]').val()
    var cpassword = $('[name=cpassword]').val()

    if(fname.length<3){
        $('.errors').html('Name min 3 char.')

    }
    // console.log(fname)
    // console.log(lname)
    // console.log(email)
    // console.log(phoneno)
    // console.log(password)
    // console.log(cpassword)
});

*/




// $('#signup').click(function () {
//     var fname = $('[name=fname]').val()
//     var lname = $('[name=lname]').val()
//     console.log(fname)
//     console.log(lname)
//
// });





$('#signup').click(function(e) {
    e.preventDefault();
   if (isSignUpFormValid() == true) {
        $.post('http://localhost:8000/signup/', $('#signup_form').serialize())
            .done(function(data, status) {
                alert(data.user, status);
            }).fail(function(error) {
                alert('error' +error);
        });
    }
})

function isSignUpFormValid() {
     var first_name = $('[name=fname]');
    var last_name = $('[name=lname]').val();
    var email = $('[name=email]').val();
    var password = $('[name=password]').val();
    var cpassword = $('[name=cpassword]');
    var phoneno = $('[name=phoneno]').val();
    var isValid = true;
    if(!first_name.val()) {
        first_name.parent().find('.errors').html('Please enter username');
        isValid = false;
    }
    if(1) {
        cpassword.parent().find('.errors').html('Please enter password');
        isValid = false;
    }
    return isValid;

}
