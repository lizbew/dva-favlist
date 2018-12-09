export function createPostJsonOptions(data) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data),
    };
}

export function createPutJsonOptions(data) {
    return {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data),
    };
}
