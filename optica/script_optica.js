use.optica ()
db.createCollection ('proveedores')
db.createCollection ('clientes')
db.createCollection ('gafas')
db.createCollection ('ventas')
db.proveedores.insert ({
    "nombre": "string",
    "apellido1": "string",
    "apellido2": "string",
    "domicilio": {
        "calle": "string",
        "numero": "number",
        "piso": "number",
        "puerta": "string",
        "ciudad": "string",
        "codigo_postal": "string",
        "pais": "string"
    },
    "telefono": "number",
    "fax": "number",
    "nif": "string",
    "marcas": [
        "marca a",
        "marca b",
        "marca c"
    ]
}

)

db.gafas.insert ({
    "marca": "string",
    "graduacion_cristales": "string",
    "tipo_montura": [
        "flotantes",
        "pasta",
        "metalica"
    ],
    "color_montura": "string",
    "color_cristales": "string",
    "precio": "number",
    "proveedor": "proveedores_id"
})

db.clientes.insert ({
    "nombre": "string",
    "apellido1": "string",
    "apellido2": "string",
    "domicilio": {
        "calle": "string",
        "numero": "number",
        "piso": "number",
        "puerta": "string",
        "ciudad": "string",
        "codigo_postal": "string",
        "pais": "string"
    },
    "telefono": "number",
    "email": "string",
    "fecha_registro": "date",
    "recomendado_por": "clientes_id"
})

db.ventas.insert ({
    "gafas": "gafas_id",
    "cliente": "clientes_id",
    "empleado": {
        "nombre": "string",
        "apellido1": "string",
        "apellido2": "string",
    },
    "fecha_venta": "IsoDate"
})