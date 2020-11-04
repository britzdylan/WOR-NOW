import fetch from 'node-fetch'

export async function IgFetch() {

    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,permalink&access_token=IGQVJVUlBrZA2t6dVh0ZAGdZAMzNLWWlKZAzlDbmpSVkhnNmZAQVC1uMUhFUTVMSXBTV2g2c0Y4YTlDbl8xT1JoM3hvUWtSWHBaSmpkaDItdDhiR2I4WEpDOUJISTI2V0ZA0TlV1bUJ2bE9IRUJRQlk3UE9yQgZDZD`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const json = await res.json()
    if (json.errors) {
        console.error("error", json.errors)
        throw new Error('Failed to fetch API')
    }
    return json
}
