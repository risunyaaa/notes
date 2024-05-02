import { ThemeButton } from '../../../shared/ui/themeButton';
import { LanguageButton } from '../../../shared/ui/languageButton';
import { SearchButton } from '../../../shared/ui/searchButton';

import './board.scss';
import { useTranslation } from 'react-i18next';

export const Board = () => {
    const {t} = useTranslation();
    return (
       <>
        <div className="header">
            <div className="list">
                <a className='logo' href='#'>Notes</a>
                <div className='left-container'>
                    <ThemeButton/>   
                    <LanguageButton/>
                    <SearchButton/>
                </div>
                <div className='right-container'>
                    <a className='allsides' href='#'>{t("login")}</a>
                    <a className='allsides' href='#'>{t("signup")}</a>
                </div>
            </div>
        </div>
       </>
    )
}