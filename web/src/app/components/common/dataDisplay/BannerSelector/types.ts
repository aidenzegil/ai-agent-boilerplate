// TODO: remove 'optional' identifier from active, onClick, storyId, and chapterId

export type BannerProps = {
    likes: number,
    title: string,
    active?: boolean,
    onClick?: () => void,
    authorPic?: string,
    storyId?: number,
    chapterId?: number,
}


