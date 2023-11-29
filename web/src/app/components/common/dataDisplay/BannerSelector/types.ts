/*
Wherever active is being used: 
    const [active, setActive] = useState(false);
    const toggleActive = () => {
        setActive(!active);
    };
and set active prop to active={active}
*/

export type BannerProps = {
    likes: number,
    title: string,
    active: boolean,
    onClick: () => void,
    authorPicUrl?: string,
}


