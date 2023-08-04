# Technical test

The problem is to create a class called "Store" that has a collection of incidents and a method called "incident_status".

An "incident" is something that occurs in the store and must be reported and resolved. For example, "the floor in the freezer area is dirty" and someone needs to clean it (this would be the action needed to resolve it).

Each incident has a status that can be "open" if the incident has been reported but not resolved, or "resolved" if the case has been resolved.

## Characteristics

El método "incident_status" de la clase Store recibe dos fechas y debe devolver lo siguiente:

- El número de casos "abiertos" entre esas fechas.
- El número de casos "resueltos" entre esas fechas.
- El tiempo promedio de solución de los casos "resueltos" entre esas fechas (se incluyen solo los casos resueltos).
- El tiempo máximo de solución entre las fechas especificadas (se incluyen los casos abiertos usando la fecha actual).

## Installation and project dependencies

1. Clone repository: `git clone https://github.com/al-byrnison/ts-store-class.git`
2. Install node 16 <=
3. Install TypeScript: `npm install -g typescript`

## To run the project

Run: `tsc` or `tsc src/index.ts`

Run: `node dist/index.js`


## Mode of use

In the index.ts file there is a test of use, it is possible to add more cases with the call to the Store class.

```sh
const someStore = new Store();
```

- It is necessary to add incidents, in this case they will always be in 'open' status.

```sh
someStore.addIncident('Any open incident...');
```

- To close the incident and give the status 'solved', you need to call the closeIncident() function and give it the index of the incident as a parameter.

```sh
someStore.closeIncident(0); //index
```

- Para visualizar el status de los casos debe ser llamada la funcion incident_status().

```sh
const status = someStore.incident_status();
```

- To view the console, you can simply make a status log or, as in the following example, call each status in an orderly manner.

```sh
console.log('someStore.incident_status()');

console.log(status);

console.log(
`{ 
    'open_cases': ${status.open_cases}, 
    'closed_cases': ${status.closed_cases}, 
    'average_solution': ${status.average_solution}, 
    'maximum_solution': ${status.maximum_solution} 
}`);
```