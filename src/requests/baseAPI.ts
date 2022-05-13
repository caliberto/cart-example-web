import { IProduct } from '../models/products';

namespace Requests {
    const basePath = 'http://127.0.0.1:5000';

    function buildUrl({ url }: { url: string; }): string {
        return basePath + url;
    }  

    async function api<T>({ url, method = 'GET', headers = { 'Content-Type': 'application/json' }, body }: { url: string; method?: string; headers?: any; body?: any; }): Promise<T> {
        const data = await fetch(buildUrl({ url }), {
            method,
            headers,
            body
        });
        if (!data.ok) {
            throw new Error(data.statusText);
        }
        return await (data.json() as Promise<T>);
    }

    export async function fetchAllProducts(): Promise<IProduct[]> {
        return await api<IProduct[]>({ url: '/' })
    }

    export async function sendCart(body : any): Promise<IProduct[]> {
        return await api<IProduct[]>({ url: '/cart', body })
    }
}

export { Requests };