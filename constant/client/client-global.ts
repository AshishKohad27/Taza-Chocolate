export type pageProps = {
    search: string | null;
    page: number | 1 | null;
    limit: number | 10 | null;
    orderBy: string | null;
    order: string | null;
};
