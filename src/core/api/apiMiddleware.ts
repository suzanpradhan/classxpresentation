import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { isRejectedWithValue } from '@reduxjs/toolkit';

export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            if ((action.payload as any)?.status == 401) {
                // toast.error('Unauthorized');
                // signOut({ callbackUrl: '/login', redirect: true });
            }
        }

        return next(action);
    };
