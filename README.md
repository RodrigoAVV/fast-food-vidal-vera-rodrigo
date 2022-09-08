# fast-food-vidal-vera-rodrigo
Este proyecto está creado con React js

Tienda online, venta de comida rapida. Cuando se arma una junta de improviso, se pierde mucho tiempo pensando qué preparar para comer y nada mas latoso que estar cocinando mientras los demas comparten. Por este y otros motivos con el sistema fast-food dedicate solo a compartir y pasar buenos momentos. De la comida nos encargamos nosotros.

Home => Muestra todos los productos diponibles, cada producto tiene una opción de detalle y cambiar la cantidad de producto.

Detalle => Muestra toda la informacián disponible del producto

Cantidad => Aumenta o disminuye la cantidad de producto segun lo que el cliente necesite.

Categorias => Permite seleccionar la categoria deseada (Papas, Completos, Hamburguesas, Nuggets, Pizza, Sándwitch)

Cada categoria, home y detalle tiene su ruta específica

1. Las cantidades maximas de productos que se pueden comprar son las que estan registradas en la base de datos firebase (por defecto 10)

2. Si se compra más de un mismo producto, solo se aumenta su catidad.

3. Por cada producto agregado, se va sumado el total a pagar.

4. El detalle del pedido se visualiza en el carrito, donde tambien se puede eliminar el producto