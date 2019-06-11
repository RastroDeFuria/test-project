$(document).on("click","#burger",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  x-burger </td>  <td class='valor'>"+$("#burger").val()+"</td></tr>";
     $("#tabela").html(codigo);
});
$(document).on("click","#misto",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  Misto </td>  <td class='valor'>"+$("#misto").val()+"</td></tr>";
     $("#tabela").html(codigo);
});
$(document).on("click","#salada",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td> x-salada </td>  <td class='valor'>"+$("#salada").val()+"</td></tr>";
     $("#tabela").html(codigo);
});
$(document).on("click","#laranja",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  Suco de laranja </td>  <td class='valor'>"+$("#laranja").val()+"</td></tr>";
     $("#tabela").html(codigo);
});

$(document).on("click","#egg",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  x-egg: </td>  <td class='valor'>"+$("#egg").val()+"</td></tr>";
     $("#tabela").html(codigo);
});
$(document).on("click","#refrigerante",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  refrigerante: </td>  <td class='valor'>"+$("#refrigerante").val()+"</td></tr>";
     $("#tabela").html(codigo);
});

$(document).on("click","#tudo",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  x-tudo: </td>  <th class='valor'>"+$("#tudo").val()+"</th></tr>";
     $("#tabela").html(codigo);
});
$(document).on("click","#cafe",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  Café: </td>  <td class='valor'>"+$("#cafe").val()+"</td></tr>";
     $("#tabela").html(codigo);
});
$(document).on("click","#bauru",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  Bauru: </td>  <td class='valor'>"+$("#bauru").val()+"</td></tr>";
     $("#tabela").html(codigo);
});
$(document).on("click","#agua",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  Água </td>  <td class='valor'>"+$("#agua").val()+"</td></tr>";
     $("#tabela").html(codigo);
});
$(document).on("click","#vitamina",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  vitamina </td>  <td class='valor'>"+$("#vitamina").val()+"</td></tr>";
     $("#tabela").html(codigo);
});
$(document).on("click","#milkshake",function(){
     var codigo = $("#tabela").html();
     codigo += "<tr> <td>  milkshake: </td>  <td class='valor'>"+$("#milkshake").val()+"</td></tr>";
     $("#tabela").html(codigo);
});
$(document).on("click","#calcular",function(){
      var total = 0;
      $(".valor").each(function(index,element){
          total += parseFloat($(element).text());
      });
      $("#resultado").text("R$"+total+",00");
});
