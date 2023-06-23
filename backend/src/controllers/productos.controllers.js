import getConnection from "../db/database.js";

const getProductos = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_producto, 	nombre_producto, precio_x_dia, stock_producto, categoria_producto  FROM productos");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}

export const methodsHTTP = {
    getProductos
}
