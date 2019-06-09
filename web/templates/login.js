function getData(){
        $('#action').append('<img src="/static/images/tenor.gif"/>');
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                $('#action').html('<img src="/static/images/check.png"/>');
            //    $('#action').append('imagen');
                //$('#action').html(response['statusText']);

            },
            error: function(response){
                //alert(JSON.stringify(response));
                $('#action').html('<img src="/static/images/fail.png"/>');
            //    $('#action').append('imagen');
                //$('#action').html(response['statusText']);
            var url = 'http://' + document.domain + ':' + location.port + '/static/chat.html?username=' + username;
            $(location).attr('href',url);
            }
        });
    }