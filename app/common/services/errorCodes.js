/**
 * Created by BorjaRFP on 19/4/15.
 */

angular.module('acerola')
    .constant("errorCodes",{
        "0":{
            "description":"The server is down",
            "id":0
        },
        "400": {
            "description": "Bad request",
            "id": 400
        },
        "401": {
            "description": "Email or password incorrect",
            "id": 401
        },
        "404": {
            "description": "Url not found",
            "id": 404
        },
        "406": {
            "description": "Validation error",
            "id": 406
        },
        "502":{
            "description":"Internal server error",
            "id":500
        },
        "ValidationError":406,
        "Unauthorize": 401,
        "99999":{
            "description":"A strange error occurred",
            "id":99999

        }
    });