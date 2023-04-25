import {json} from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (async (event) => {
    const body = await event.request.formData();
    console.log([...body]);
    return json({
        name: body.get('name') ?? 'world'
    });

}) satisfies RequestHandler;