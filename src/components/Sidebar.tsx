import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1663050633633-2856e875dcc7?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />
            
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/85080211?v=4" />
                
                <strong>Yasmin Zanon Barg</strong>
                <span>Data Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}