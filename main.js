$(document).ready(function () {
    $.validator.setDefaults({
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    /*$.validator.messages = $.extend($.validator.messages, {
     isValid_thoroughfare: "testmsg",
     isValid_premise: "testmsg2"
     });*/

    $('#address_form').validate({
        rules: {
            address1: {
                minlength: 3,
                maxlength: 7
            }
        },
        messages: {
            address1: {
                minlength: "ttt",
                maxlength: "aaa"
            }
        }
    });


    // Instantiate jquery.addressfield with your configs:
    $('#address_form fieldset').addressfield({
        json: addressSchema,
        fields: {
            country: '#country',
            thoroughfare: '#address1',
            premise: '#address2',
            localityname: '#city',
            administrativearea: '#state',
            postalcode: '#zip'
        }
    });
});