type User = {
    title: string;
    likes: number;
    accounts: string[];
    status: 'open' | 'close';
    details?: {
        createAt: Date;
        updateAt: Date;
    };
};
