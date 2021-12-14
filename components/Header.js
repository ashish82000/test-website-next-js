import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Posts </span>Website
            </h1>
            <p className={headerStyles.description}>Sample Article website</p>
        </div>
    )
}

export default Header
