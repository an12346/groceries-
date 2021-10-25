$(document).ready(function(){
  let arrayG = []

  function populateList(inArray){
    let counter = 1;
    inArray.forEach(function(element) {
      $("#listItem"+counter).text(element);
      counter ++;
    });
  }

  $("#formOne").submit(function(event) {
    event.preventDefault();
    arrayG[0] = $("#item1").val();
    arrayG[1] = $("#item2").val();
    arrayG[2] = $("#item3").val();
    arrayG[3] = $("#item4").val();
    arrayG[4] = $("#item5").val();
    
    arrayG.sort();
    let counter = 0;
  
    arrayG.forEach(function(element) {
      arrayG[counter] = element.toUpperCase();
      arrayG[counter] = arrayG[counter].toUpperCase();
      counter ++;
    });
    //1 counter:0 arrayG[0]:item1 (element = arrayG[0].toUpperCase();)
    //2 counter:1 arrayG[1]:item2 (element = arrayG[1].toUpperCase();)
    //3
    //4
    //5


    //on every value in arrayg capitalize the value
    //for each value in arrayg use the .toUpperCase() command
    
    populateList(arrayG);

    $("#list").removeClass("hidden");
    

  
  });

  
  

});