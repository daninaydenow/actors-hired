const baseUrl = 'http://localhost:3030/data'

export const create = (actorData) => {
    return fetch(`${baseUrl}/actors`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "X-Authorization": "ea6ac2d1e286087c146ac97c8e900c6c3ca18ee15a9af1f1c9cdda6eda3f0d1f"
        },
        body: JSON.stringify(actorData)
    });
}

export const getAll = () => {
    return fetch(`${baseUrl}/actors`)
        .then(res => res.json())
};

export const getOne = (actorId) => {
    return fetch(`${baseUrl}/actors/${actorId}`)
        .then(res => res.json())
};