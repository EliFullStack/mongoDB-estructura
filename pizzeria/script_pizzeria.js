use.pizzeria
db.createCollection ("clientes")
db.createCollection ("comandas")
db.createCollection ("productos")
db.createCollection ("empleados")
db.createCollection ("categorias")
db.clientes.insert (
    {"nombre": "string", 
     "apellido1": "string",
     "apellido2": "string",
     "direccion" : {
         "calle": "string",
         "numero": "number",
         "piso": "number",
         "puerta": "string"
     },
     "codigo_postal": "string",
     "localidad": "string",
     "provincia": "string",
     "telefono": "string"  
}   
    )


db.comandas.insert (
    {"fecha_hora": "IsoDate",
     "tipo_de_comanda": 
        [{"a_domicilio": 
            {"repartidor":
                 "empleados_id"
            }},
          "recoger_en_tienda"],
     "cantidad_de_producto": "number",
     "producto": "productos_id",
     "precio_total": "number",
     "local": {
        "calle": "String",
        "numero": "number",
        "piso": "number",
        "codigo_postal": "string",
        "localidad": "string",
        "provincia": "string"
     },
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
    "repartidor": "boolean"
})


db.productos.insert ({
    "tipo": [{
        "pizzas": "categorias_id"},
        "hamburguesas",
        "bebidas"
    ],
    "descripcion": "string",
    "imagen": "string",
    "precio": "number"
})

db.categorias.insert ({
    "nombre": "string"
})
