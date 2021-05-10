
document.write("<div class='container'>");
document.write("<h1 id='color-letra'>Notas Finales</h1>") ;
document.write("</div>");

document.write("<div class='container'>");
document.write("Nombre:Carlos Garcia");
document.write("</div>");

document.write("<div class='container'>");
document.write("Carrera:Desarrollador Web");
document.write("</div>");

//definicion variables
var ramo_1= prompt("ingresa ramo que estas cursando: ");
var nota1_r1= prompt("ingresa la primera nota del ramo "+ramo_1+":");
nota1_r1= parseFloat(nota1_r1);
var nota2_r1= prompt("ingresa la segunda nota del ramo "+ramo_1+":");
nota2_r1= parseFloat(nota2_r1);
var nota3_r1= prompt("ingresa la tercera nota del ramo "+ramo_1+":");
nota3_r1= parseFloat(nota3_r1);
var promedio_r1=((nota1_r1+nota2_r1+nota3_r1)/3).toFixed(2);

var ramo_2= prompt("ingresa ramo que estas cursando: ");
var nota1_r2= prompt("ingresa la primera nota del ramo "+ramo_2+":");
nota1_r1= parseFloat(nota1_r2);
var nota2_r2= prompt("ingresa la segunda nota del ramo "+ramo_2+":");
nota2_r2= parseFloat(nota2_r2);
var nota3_r2= prompt("ingresa la tercera nota del ramo "+ramo_2+":");
nota3_r2= parseFloat(nota3_r2);
var promedio_r2=((nota1_r2+nota2_r2+nota3_r2)/3).toFixed(2);

var ramo_3= prompt("ingresa ramo que estas cursando: ");
var nota1_r3= prompt("ingresa la primera nota del ramo "+ramo_3+":");
nota1_r3= parseFloat(nota1_r3);
var nota2_r3= prompt("ingresa la segunda nota del ramo "+ramo_3+":");
nota2_r3= parseFloat(nota2_r3);
var nota3_r3= "-";
nota3_r3= "-";
//variable de la nota necesaria para aprobar el ramo
var nota_falta=(12-nota1_r3-nota1_r3).toFixed(2)

//Aquí creamos nuestro div contenedor
document.write("<div class='container'>");
//Aquí creamos nuestra tabla con Bootstrap, 
document.write("<table class='table'>");
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");

//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("<th scope='col'>ID</th>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>nota1</th>");
document.write("<th scope='col'>nota2</th>");
document.write("<th scope='col'>nota3</th>");
document.write("<th scope='col'>promedio</th>");

//Aquí definimos el tipo de dato que tendrá cada columna y su encabezado
document.write("</tr>");
//Aquí cerramos el tr donde definimos las columnas de la tabla
document.write("</thead>");
//Aquí cerramos el encabezado de nuestra tabla
//Aquí definimos el cuerpo con el contenido de la tabla según la columna
document.write("<tbody>");
document.write("<tr>");
document.write("<td scope='row'></th>");
document.write("<td>"+ramo_1+"</td>");
document.write("<td>"+nota1_r1+"</td>");
document.write("<td>"+nota2_r1+"</td>");
document.write("<td>"+nota3_r1+"</td>");
document.write("<td>"+promedio_r1+"</td>");
document.write("<tr>");

document.write("<tr>");
document.write("<td scope='row'></th>");
document.write("<td>"+ramo_2+"</td>");
document.write("<td>"+nota1_r2+"</td>");
document.write("<td>"+nota2_r2+"</td>");
document.write("<td>"+nota3_r2+"</td>");
document.write("<td>"+promedio_r2+"</td>");
document.write("<tr>");

document.write("<tr>");
document.write("<td scope='row'></th>");
document.write("<td>"+ramo_3+"</td>");
document.write("<td>"+nota1_r3+"</td>");
document.write("<td>"+nota2_r3+"</td>");
document.write("<td>"+nota3_r3+"</td>");
document.write("<td>"+promedio_r3+"</td>");
document.write("<tr>");

document.write("</tbody>");

//Aquí cerramos el cuerpo con el contenido de la tabla según la columna
document.write("</table");
document.write("</div>");
//Aquí cerramos nuestro div contenedo

//dejamos mensaje con nota necesaria para aprobar
document.write("<div class='container'>");
document.write("para aprobar el ramo "+ramo_3+" con nota 4, se necesita obtener un "+nota_falta+" en la nota3");
document.write("</div>");