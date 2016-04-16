'use strict';
$(document).ready(function() {

    function makePerson() {
      // var long = localStorage.Persons
      var long = JSON.parse(localStorage.Persons)
      console.log(long)
        for (var i = 0; i < long.length; i++) {
          var People = long[i]
            var $tr = $('<tr>').attr("class", "person")
            var $th = $('<th>').attr("scope", "row").text(People.Id).appendTo($tr);
            var $td1 = $('<td>').text(People.Name).appendTo($tr);
            var $td2 = $('<td>').text(People.Address).appendTo($tr);
            var $td3 = $('<td>').text(People.Phone).appendTo($tr);
            var $td4 = $('<td>').appendTo($tr)
            var $btn1 = $('<button>').attr({
                type: "button",
                class: "btn btn-primary",
                "data-toggle": "modal",
                "data-target": "#personModal",
                "data-seriel": People.Id
            }).text("View/Edit").appendTo($tr)
            var $td5 = $('<td>').text(People.Email).appendTo($tr)
            var $btn2 = $('<button>').attr({
              type: "button",
              "data-toggle": "button",
              "aria-pressed": "false",
              class: "btn btn-success like"
            }).text("Fav?").appendTo($tr)
            $('#innerContact').append($tr)
        }
    }
    makePerson();






    $("div.table-responsive").on("animationend", ".person", function(e) {
        $(this).removeClass('pulse bounceInLeft')
    })


    $("div.table-responsive").on("dblclick", ".person", function() {
        // console.log( $( this ).text() );
        console.log(this)
        $(this).remove()
    });
    $("div.table-responsive").on("mouseover", ".person", function() {
        // console.log( $( this ).text() );
        $(this).removeClass('animated pulse bounceInLeft')
        $(this).addClass('animated pulse')
    });
    // var Names = ["Karl Marx"];
    // var Addresses = ["123 Happy St, Moscow USSR"]
    // var Phones = ["867-5309"];
    // var Emails = ["1@comrade.com"];
    // var Pics = ["url"];
    // var Likes = [true];
    // var Persons = []

    var Id = 1
    $("#setLocalAll").on('click', function(event) {
        // var model = $('.json').text() || '{}'
        var Name = $('#name').val();
        Names.push(Name)
        var Address = $('#address').val();
        Addresses.push(Address)
        var Phone = $('#phone').val();
        Phones.push(Phone)
        var Pic = $('#photo').val();
        Pics.push(Pic)
        var Email = $('#email').val();
        Emails.push(Email)
        var Like = $('#liker').val();
        Likes.push(Like)
        var per = JSON.parse(localStorage.Persons)
        // Persons.push(per)
        // console.log(model)
        var model = new Object();
        model.Id = Id
        model.Name = Name;
        model.Address = Address;
        model.Phone = Phone;
        model.Picture = Pic;
        model.Email = Email;
        model.Like = liker;
        per.push(model)
        console.log(per)
        var ob = JSON.stringify(per)
            // console.log("model: " + model + "ob: " + ob)
            // console.log(Names, Phones)
        localStorage.Person = ob
        localStorage.Id = Id
        localStorage.Names = Names
        localStorage.Addresses = Addresses
        localStorage.Phones = Phones
        localStorage.Pics = Pics
        localStorage.Emails = Emails
        localStorage.Likes = Likes
        localStorage.Persons = Persons


        // var key = $('#key').val();
        // var value = $('#value').val();
        // ob[key] = value
        // localStorage.setItem(key, value)
        // });
        // var template = [
        //   "<tr>",
        //   "<th>${Id}</th>",
        //   "<th>${Name}</th>",
        //   "<th>${Address}</th>",
        //   "<th>${Phone}</th>",
        //   "<th>${Picture}</th>",
        //   "<th>${Email}</th>",
        //   "<th>${Like}</th>",
        //   "</tr>"
        // ];
makePerson();
        // $(".person:last-child").addClass('animated bounceInLeft')
        Id++
      });
      });

//
// $('#contactList tbody tr button').on('click', function() {
//     console.log("hello")
// });
//
//
//



//
// $('#personModel').on('show.bs.modal', function(event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever') // Extract info from data-* attributes
//         // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//         // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ' + recipient)
//     modal.find('.modal-body input').val(recipient)
// });
//


/*
 * Complete the function below.
 */
// function titleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
// }
// {"Id":1,"Name":"Karl Mark","Address":"123 Happy St, Moscow USSR","Phone":"","Picture":"","Email":"1@comrade.com","Like":{}}
