//importamos la funcion getConnection
import getConnection from "../db/database.js";

//Damos una respuesta
const getEmpleados = async (req, res) =>{
  try {
    const connection = await getConnection(); 
    const result = await connection.query("SELECT id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado  FROM empleados");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

//Un objeto para todos los metodos HTTP

export const methodsHTTP = {
    getEmpleados
}