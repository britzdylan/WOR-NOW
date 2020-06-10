import fetch from 'node-fetch'
async function fetchAPI(query, { variables } = {}) {
    const res = await fetch(`http://localhost:1337/graphql`, {
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
        console.error(json.errors)
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
    `)
    console.log(data);

    return data
}