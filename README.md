## ¿Cómo crear una nueva clase de forma manual?

1. Añadir item a la lista de la materia, debe tener:
    - Día
    - Mes
    - Año

    `{dia: [x], mes: [y], año: [z]}`

2. Crea un archivo en la carpeta de la materia
(la lista de nombres está en el archivo
[nombresMaterias.js](/src/lib/nombresMaterias.js))

3. Nombra el archivo de la siguiente forma: `[materia]_day[dia]_[mes].astro`

4. Importa en el archivo el layout [&lt;layoutMaterias&gt;](/src/layouts/LayoutMaterias.astro)

5. Establece las propiedades del layout: día, mes, año (opcional)