'use strict';
$(document).ready(function(){
$('.adder').addClass('animated pluse');


  var Id = 2
$( "#target" ).on('click', function( event ) {
var Name = $('#name').val();
var Address = $('#address').val();
var Phone = $('#phone').val();
var Pic = $('#photo').val();
var Email = $('#email').val();
var Like = $('#liker').val();
// var model = new Object();
// model.Id = 1
// model.Name = name;
// model.Address = addy;
// model.Phone = tele;
// model.Picture = piccy;
// model.Email = email;
// model.Like = liker;
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
$(".table").append('<tr class="person"><th scope="row">'+Id+ '</th><td>'+Name+'</td><td>'+Address+'</td><td>'+Phone+ '</td><td>'+'<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#personModal" data-seriel="'+ Id + '">View/Edit</button></td><td>'+Email+'</td><td><button type="button" class="btn btn-success like">Fav?</button></td></tr>')
$(".person").addClass('animated bounceInLeft')
Id++
});


  $( "#contactList tbody tr" ).on( "mouseover", function() {
    // console.log( $( this ).text() );
    $(this).toggleClass('animated infinite headShake')
  });
});
$('.like').on('click', function() {
  console.log(this)
})







$('#personModel').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
