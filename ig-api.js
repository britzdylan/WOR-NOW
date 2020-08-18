import fetch from 'node-fetch'

export async function IgFetch() {

    const res = await fetch(`https://graph.instagram.com/me/media?fields=id,media_url,thumbnail_url,permalink&access_token=IGQVJWc2ZA0cllDbGc2NHpob3FwemRVMWV5WHhtV2l3ZAy1fY1REQ1ZAUNl9wNTlCTHJ4T1RhdFlBTG5LcUk1cmpDUlFibW54V0wtMWprQWl5ckVJQUVaemZAwZAk9RbFJWTTFNaUVSOXRB`, {
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
