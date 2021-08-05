let loader = $('#loader');

$('#submit').click(function () {
    $('.error-input').hide();

    let hasError = false;
    let form = $('#order-form');
    let hidden = $('.hidden')

    let name = $('#name');
    let adress = $('#adress');
    let phone = $('#phone');

    if (!name.val()) {
        name.siblings('.error-input').show();
        name.css('border-color', 'red');
        hasError = true;
    } else {
        name.css('border-color', 'rgb(185, 145, 80)');
    }
    if (!adress.val()) {
        adress.siblings('.error-input').show();
        adress.css('border-color', 'red');
        hasError = true;
    } else {
        adress.css('border-color', 'rgb(185, 145, 80)');
    }
    if (!phone.val()) {
        phone.siblings('.error-input').show();
        phone.css('border-color', 'red');
        hasError = true;
    } else {
        phone.css('border-color', 'rgb(185, 145, 80)');
    }

    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: 'https://itlogia.ru/test/checkout',
            data: { name: name.val(), adress: adress.val(), phone: phone.val() }
        })
            .done(function (message) {
                loader.hide();
                console.log(message);
                if (message.success) {
                    form.css('display', 'none');
                    hidden.css('display', 'block');
                } else {
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                }
            });

    }
});