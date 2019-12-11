export interface LikeState {
    likes: number;
    lastLike: Date | null;
}

// Actions
export const LIKE = 'LIKE';

export interface LikeAction {
    type: typeof LIKE,
    payload: {
        now: Date;
    }
}

export type LikeActions = LikeAction ;
