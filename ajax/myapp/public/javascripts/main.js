$(document).ready(function(){
  var server = 'http://localhost:3000';
  
  //array of cars
  var cars = [{id:2349, make:"Renault", owner:"Vasiliy Ivancev", phone:"+380504258324", arriveDate: '2016-11-01', departureDate: '2016-11-03'},
  {id:3467, make:"Volvo", owner:"Petro Schevcev", phone:"+38050934533", arriveDate: '2016-10-13', departureDate: '2016-10-14'},
  {id:6781, make:"VW", owner:"Sergiy Fedotov", phone:"+380504259388", arriveDate: '2016-10-16', departureDate: '2016-10-21'},
  {id:3359, make:"Mazda", owner:"Fedor Yuriiv", phone:"+380664259324", arriveDate: '2016-11-02', departureDate: '2016-11-04'},
  {id:8412, make:"Renault", owner:"Vasiliy Ivanov", phone:"+380974258373", arriveDate: '2016-11-05', departureDate: '2016-11-07'},
  {id:2349, make:"Lada", owner:"Andrii Slovian", phone:"+380994338374", arriveDate: '2016-11-06', departureDate: '2016-11-07'}];
  
  $('#button').on('click', function() {
    $.post(server + '/users', {data: JSON.stringify(cars)}, function(data) { //post request on server
      for(var i = 0; i < cars.length; i++){
        var $park ="";
        var $tr = $("<tr></tr>");
        var $input =  $("<input>").attr('type','checkbox');
        $park += "<td>"+cars[i]["id"]+"</td>";
        $park += "<td>"+cars[i]["make"]+"</td>";
        $park += "<td>"+cars[i]["owner"]+"</td>";
        $park += "<td>"+cars[i]["phone"]+"</td>";
        $park += "<td>"+cars[i]["arriveDate"]+"</td>";
        $park += "<td>"+cars[i]["departureDate"]+"</td>";
        $tr.html($park);
        $tr.append($input);
        $('table > tbody').append($tr);
      }
    }).fail(function() {
      console.log("request is not send");
    });
  });
  $('#removeBtn').on('click', function(event) {
    $('input').each(function() {
      var checkbox = $(this);
      if(checkbox.is(':checked')){
        checkbox.parents('table > tbody > tr').remove();
      }
    })
  });

});