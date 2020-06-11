import fetch from 'node-fetch'
async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(`https://wor-strapi.herokuapp.com/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json()
    if (json.errors) {
        console.error("error", json.errors)
        throw new Error('Failed to fetch API')
    }

    return json.data
}


export async function getBanner() {
    const data = fetchAPI(
        `{
            banners {
              id
              url
              image {
                name
                url
              }
            }
          }
    `);

    return data
}

export async function getShipping() {
    const data = fetchAPI(
        `{
            simplePage (id:1) {
                id
                name
                Value
              }
          }
    `)

    return data
}

export async function getPayments() {
    const data = fetchAPI(
        `{
            simplePage (id:2) {
                id
                name
                Value
              }
          }
    `)

    return data
}

export async function getTerms() {
    const data = fetchAPI(
        `{
            simplePage (id:3) {
                id
                name
                Value
              }
          }
    `)

    return data
}

export async function getPrivacy() {
    const data = fetchAPI(
        `{
            simplePage (id:4) {
                id
                name
                Value
              }
          }
    `)

    return data
}