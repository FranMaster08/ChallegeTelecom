# Challenge
Se requiere implementar una API que provea en formato JSON el estado del tiempo basado en
diferentes endpoints.

## Instructions

- Instalar dependencias ``npm install``
- Iniciar test          ``npm run test``
- Iniciar Server        ``npm start``

## Rutes 
- Ruta base ``/v1``
## Endpoints

- ``/location`` [Devuelve los datos de ubicación city según ip-api.]
- ``/current[/city]`` [City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo actual.]

- ``/forecast[/city]`` [City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
ip-api y el estado del tiempo a 5 días ]

## Build with  🛠️

* [Express]    - El framework de NodeJs
* [Config]     - Para manejar env
* [Axios] - Para realizar peticiones


## Auxiliar Apis
- api.openweathermap.org  [Api meteoroligica]
- ip-api.com              [Api geolacion]


## Public Api
 - Url de api publicada : https://challenge-fran.herokuapp.com/

  - ### Ejemplo endpoints:
```
        https://challenge-fran.herokuapp.com/v1/location.  
        https://challenge-fran.herokuapp.com/v1/current
        https://challenge-fran.herokuapp.com/v1/forecast

```
### Buil with 💕love Francisco Javier Jimenez Cohen
