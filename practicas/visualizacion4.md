# Ejemplo 4 Visualización
Se van a leer las coordenadas de una lista de poblaciones y se van a graficar en un gráfico de dispersión o XY (Scatter Chart).

Los datos provienen de la hoja [lista de municipios](../ESTADISTICA/new1.html)

Se van a obtener con WebScraping mediante la función leerPoblaciones() del [fichero JavaScript](../ESTADISTICA/leerUniversidades.js)
Para ello abrir la consola (F12) de la lista de municipios y pegar la definición de la función. Ejecutar a continuación la función y copiar el resultado (la consola de Google Chrome, inserta un botón Copy al final del listado de datos).

Los datos obtenidos se guardan como JSON en un fichero de nombre [pobData.js](../ESTADISTICA/objeto.js). Para poder usar directamente el array en una variable, añadir por delante de dicho array el texto: "obj="

Para visualizar los datos, se utiliza la librería de [Google Chart](https://developers.google.com/chart/) y el tipo de gráfico [Scatter Chart](https://developers.google.com/chart/interactive/docs/gallery/scatterchart).
El resultado es el que se muestra en la página [pobDataGoogle.html](../ESTADISTICA/visualizacion.html)

Se puede realizar la representación de los mismos datos con otras librerías, por ejemplo:
- [Poblaciones con GoolgleChart](../geocoordenadas/pobDataGoogle.html) - [Google Chart](https://developers.google.com/chart/interactive/docs/gallery/scatterchart)
- [Poblaciones con Plotly.html](../geocoordenadas/pobDataPlotly.html) - [Plotly](https://plot.ly/javascript/line-and-scatter/#data-labels-hover)
- [Poblaciones con CanvasJS](../geocoordenadas/pobDataCanvasJS.html) - [CanvasJS](https://canvasjs.com/html5-javascript-scatter-point-chart/)
