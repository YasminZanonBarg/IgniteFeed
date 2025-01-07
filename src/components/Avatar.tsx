import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    // Com a extensão ImgHTMLAttributes só preciso mencionar as propriedades criadas
    hasBorder?: boolean;
}

/*spread operator pega todas as propriedades*/
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return(
        <img 
            /*Se tiver a propriedade hasBorder aplica o estilo avatarWithBorder, senão aplica o avatar*/
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    );
}