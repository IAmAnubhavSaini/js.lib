type Result<T> = { ok: true; result: T[] } | { ok: false; error: string };

export type { Result };
