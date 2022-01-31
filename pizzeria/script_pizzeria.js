use.pizzeria
db.createCollection ("clientes")
db.createCollection ("comandas")
db.createCollection ("productos")
db.createCollection ("empleados")
db.createCollection ("categorias")
db.createCollection ("locales")
db.clientes.insert (
    {"nombre": "string", 
     "apellido1": "string",
     "apellido2": "string",
     "direccion" : {
         "calle": "string",
         "numero": "number",
         "piso": "number",
         "puerta": "string",
         "codigo_postal": "string",
         "localidad": "string",
         "provincia": "string",
     },
     "telefono": "string"  
}   
    )


db.comandas.insert (
    {"fecha_hora": "IsoDate", 
     "a_domicilio": {
         "repartidor":
                 "empleados_id"},
     "recoger_en_tienda": "string",
     "cantidad_de_producto": "number",
     "producto": [
         "productos_id",
         "cantidad"],
     "precio_total": "number",
     "local": "locales_id",
     "fecha_hora_reparto": "IsoDate" 
    }
)


db.empleados.insert ({
    "nombre": "string", 
    "apellido1": "string",
    "apellido2": "string",
    "nif": "string",
    "telefono": "string",
    "cocinero": "boolean",
    "repartidor": "boolean",
    "local": "locales_id" 
})


db.productos.insert ({
    "pizzas": {
        "categoria": "categorias_id",
        "descripcion": "string",
        "imagen": "string",
        "precio": "number"},
    "hamburguesas": {
        "descripcion": "string",
        "imagen": "string",
        "precio": "number"},
    "bebidas": {
        "descripcion": "string",
        "imagen": "string",
        "precio": "number"}
    
})

db.categorias.insert ({
    "nombre": "string"
})


db.locales.insert ({
    "calle": "String",
    "numero": "number",
    "piso": "number",
    "codigo_postal": "string",
    "localidad": "string",
    "provincia": "string"
})

