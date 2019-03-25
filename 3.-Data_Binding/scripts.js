//Seleccionar, añadir y transformar. Datos hardcoded
d3.select('#uno')
.append('p')
//.attr('class', 'nombreClase')
.text('DATA BINDING')
.classed('nombreClase', true)
.classed('nombreClase2', true)
.style("color" ,'orange');

d3.select("p")
    .style("color", "blue");

//data binding

var dataset =[5,10,15,20,25]
 d3.select('#uno')
           .selectAll('p')
           .data (dataset)
           .enter()
           .append('p')
           .text ('Data bindeando...');

//Funciones en métodos
d3.select('#uno')         
           .append('p')
           .text ('-------Funciones en métodos-------------');
var dataset2 =[1,2,3,4,5,6,7,8,9,10,11,12]
 d3.select('#uno')
            .selectAll('p')
           .data (dataset2)
           .enter()
           .append('p')
           .text (function (d) {
                   return 'Línea número: ' + d
                  })
            . style ('color', function (d){
               if(d<8){return 'red';
                      }else {
                        return 'blue';
                      }  
               });

//cargar datos desde fuentes externas

/*d3.csv('data.csv').then(function(){
  console.log(data);
});*/

var dataset3 =[5,10,15,20,25]
 d3.select('#dos')
           .selectAll('p')
           .data (dataset3)
           .enter()
           .append('p')
           .text ('Data bindeando...');