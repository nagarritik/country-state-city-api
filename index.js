import express from "express";
import cors from 'cors'
import { Country, State, City } from "country-state-city";

const app = express();
const port = process.env.PORT||3000
const data = [
    '/api/v1/countries',
    '/api/v1/country/byisocode/:id',
    '/api/v1/states',
    '/api/v1/state/bycountry/:id',
    '/api/v1/state/bycodeandcountry/:id/:id2',
    '/api/v1/cities',
    '/api/v1/city/bycountry/:id',
    '/api/v1/city/bycountryandstate/:id/:id2'
]
app.use(cors())

app.listen(port, () => {
  console.log("I am up and running");
});

app.get("/",(req,resp)=>{
    resp.json(data)
})

// all countries
app.get("/api/v1/countries", (req,resp) => {
    return resp.json(Country.getAllCountries());
});

// country by isocode
app.get("/api/v1/country/byisocode/:id", (req,resp) => {
    return resp.json(Country.getCountryByCode(req.params.id));
});

// all states
app.get("/api/v1/states", (req,resp) => {
    return resp.json(State.getAllStates());
});

// all state by country
app.get("/api/v1/state/bycountry/:id", (req,resp) => {
    return resp.json(State.getStatesOfCountry(req.params.id));
});

// state by code and country
app.get("/api/v1/state/bycodeandcountry/:id/:id2", (req,resp) => {
    return resp.json(State.getStateByCodeAndCountry(req.params.id,req.params.id2));
});

// all cities
app.get("/api/v1/cities", (req,resp) => {
    return resp.json(City.getAllCities());
});

// city by country
app.get("/api/v1/city/bycountry/:id", (req,resp) => {
    return resp.json(City.getCitiesOfCountry(req.params.id));
});

// city by country and state
app.get("/api/v1/city/bycountryandstate/:id/:id2", (req,resp) => {
    return resp.json(City.getCitiesOfState(req.params.id,req.params.id2));
});