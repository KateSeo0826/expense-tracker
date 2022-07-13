import { useTheme } from '../hooks/useTheme'

import styles from './ThemeSelector.module.css'

const themeColors = ['#E3E2B4', '#F9D9CA', '#D1DFE8']

const ThemeSelector = () => {
    const { changeColor } = useTheme()

    return (
        <div className={styles['theme-selector']}>
            <div className={styles['theme-buttons']}>
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ background: color }}
                    >
                    </div>
                ))}
            </div>
        </div >
    )
}

export default ThemeSelector