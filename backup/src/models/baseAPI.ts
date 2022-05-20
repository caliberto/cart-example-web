const basePath = 'http://127.0.0.1:5000';

function buildUrl({ url }: { url: string; }): string {
    return basePath + url;
}

export async function api<T>({ url, method = 'GET', headers = { 'Content-Type': 'application/json' }, body }: { url: string; method?: string; headers?: any; body?: any; }): Promise<T> {
    const data = await fetch(buildUrl({ url }), {
        method,
        headers,
        body: JSON.stringify(body)
    });
    if (!data.ok) {
        throw new Error(data.statusText);
    }
    return await (data.json() as Promise<T>);
}