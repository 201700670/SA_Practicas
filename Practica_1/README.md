# LOGIN 8080

### Endpoints

##### /login (POST)

```json 
{

    "username": "deliveryman",

    "password": 1234

}```

Si corresponde al rol:

```json
{

   "response": {

    "access_token": "eyJ0eXAiO…..",

    "token_type": "Bearer"

   }

}
```


Si no corresponde al rol:

``` json
{
   "errors": {

    "message": "These credentials do not match our records."

   }
}
```


##### CLIENTE 8081

[POST]  /pedido

[GET]  /pedido ? preparado ? entregado

Body:

``` json 
    {

        "pedido": {

            "menu" : [

                "hamburguesa",
                "papas",
                "soda"

                ]

        }

    }
```


RESPUESTA

```json 
{

   "statuscode": 200,

   "ok": true,

   "message": "Pedido realizado correctamente",

   "data": {

    "pedido": {

    "no": 284,

    "menu": [

    "hamburguesa",

    "papas",

    "soda"

    ],

    "preparado": "pending",

    "entregado": "pending"

    }

   }

}
```

—------------------------------- Se enviara el token en authorization

```json
{

   "pedido": {

        "no": 123,

        "menu" : {
            "hamburguesa",
            "papas",
            "soda"
        },

        "preparado": false,

        "entregado": false

   }

}
```

##### RESTAURANTE 8083

/restaurante () ya autorizado  8083


##### DELIVERYMAN 8082

/deliveryman   8082

**
