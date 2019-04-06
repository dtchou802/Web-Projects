const
    results = require('starwarsmodule'),
    inquirer = require('inquirer')

async function searchPrompt(result) {
    const displaySearch = result.map(planet => {
        return { name: `${planet.name}`, value: planet }
    })
    return inquirer.prompt([{
        type: 'list',
        message: 'Select the planet you want more information on',
        name: 'planet',
        choices: displaySearch
    }])
}

async function asyncloop(looped,key){
    for (url of looped){
        const value = await results.fetch(url)
        console.log("   "+value[key])
    }
}

async function print(fetched){
    console.log(`\n --- PLANET DETAILS---`)
    console.log('Name: '+fetched.name)
    console.log('Rotation Period: '+fetched.rotation_period)
    console.log('Orbital Period: '+fetched.orbital_period)
    console.log('Diameter: '+fetched.diameter)
    console.log('Climate: '+fetched.climate)
    console.log('Gravity: '+fetched.gravity)
    console.log('Terrain: '+fetched.terrain)
    console.log('Surface Water: '+fetched.surface_water)
    console.log('Population: '+fetched.population)

    console.log('Resident: ')
    await asyncloop(fetched.residents,'name')

    console.log('Films: ')
    await asyncloop(fetched.films,'title')

    console.log('Created: '+fetched.created)
    console.log('Edited: '+fetched.edited)
    console.log('Url: '+fetched.url)

}

async function search(name) {
    console.log("Searching for planets with name:" + name)
    const sresults = await results.search(name);
    const picked = await searchPrompt(sresults.results)
    const fetched = await results.fetch(picked.planet.url)
    print(fetched)
}


module.exports = {
    search
}