import React, {useState} from 'react';
import 'bulma/css/bulma.min.css';
import './OptionPanel.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function OptionPanel() {
    const [themeStyle, setThemeStyle] = useState('');
    const [cssLibrary, setCssLibrary] = useState('');
    const [layoutStyle, setLayoutStyle] = useState('');
    const [responsiveDesign, setResponsiveDesign] = useState('');
    const [navigationStyle, setNavigationStyle] = useState('');
    const [typography, setTypography] = useState('');
    const [jsFramework, setJsFramework] = useState('');
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    return (
        <>
            <div className={`hamburger ${isPanelOpen ? 'is-active' : ''}`} onClick={togglePanel}>
                <span className="icon">
                  <FontAwesomeIcon icon={faBars} />
                </span>
            </div>

            <div className={`options-panel container ${isPanelOpen ? 'open' : ''}`}>
                <div className="section">
                <h2 className="title is-4">Design Options</h2>

                <div className="field">
                    <label className="label">Theme Style:</label>
                    <div className="control">
                        <label className="radio">
                            <input type="radio" name="themeStyle" checked={themeStyle === 'dark'} onChange={() => setThemeStyle('dark')} /> Dark
                        </label>
                        <label className="radio">
                            <input type="radio" name="themeStyle" checked={themeStyle === 'light'} onChange={() => setThemeStyle('light')} /> Light
                        </label>
                    </div>
                </div>

                    <div className="field">
                        <label className="label">CSS Library/Framework:</label>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="cssLibrary" checked={cssLibrary === 'bootstrap'} onChange={() => setCssLibrary('bootstrap')} /> Bootstrap
                            </label>
                            <label className="radio">
                                <input type="radio" name="cssLibrary" checked={cssLibrary === 'tailwind'} onChange={() => setCssLibrary('tailwind')} /> Tailwind CSS
                            </label>
                            <label className="radio">
                                <input type="radio" name="cssLibrary" checked={cssLibrary === 'material-ui'} onChange={() => setCssLibrary('material-ui')} /> Material-UI
                            </label>
                            <label className="radio">
                                <input type="radio" name="cssLibrary" checked={cssLibrary === 'none'} onChange={() => setCssLibrary('none')} /> None
                            </label>
                        </div>
                    </div>

                <div className="field">
                    <label className="label">Layout Style:</label>
                    <div className="control">
                        <label className="radio">
                            <input
                                type="radio"
                                name="layoutStyle"
                                value="flexbox"
                                checked={layoutStyle === 'flexbox'}
                                onChange={() => setLayoutStyle('flexbox')}
                            />
                            Flexbox
                        </label>
                        <label className="radio">
                            <input
                                type="radio"
                                name="layoutStyle"
                                value="grid"
                                checked={layoutStyle === 'grid'}
                                onChange={() => setLayoutStyle('grid')}
                            />
                            Grid
                        </label>
                    </div>
                </div>

                    <div className="field">
                        <label className="label">Responsive Design:</label>
                        <div className="control">
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="responsiveDesign"
                                    value="mobile-first"
                                    checked={responsiveDesign === 'mobile-first'}
                                    onChange={() => setResponsiveDesign('mobile-first')}
                                /> Mobile-First
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="responsiveDesign"
                                    value="desktop-first"
                                    checked={responsiveDesign === 'desktop-first'}
                                    onChange={() => setResponsiveDesign('desktop-first')}
                                /> Desktop-First
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="responsiveDesign"
                                    value="responsive"
                                    checked={responsiveDesign === 'responsive'}
                                    onChange={() => setResponsiveDesign('responsive')}
                                /> Responsive
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Navigation Style:</label>
                        <div className="control">
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="navigationStyle"
                                    value="top-bar"
                                    checked={navigationStyle === 'top-bar'}
                                    onChange={() => setNavigationStyle('top-bar')}
                                /> Top Bar
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="navigationStyle"
                                    value="sidebar"
                                    checked={navigationStyle === 'sidebar'}
                                    onChange={() => setNavigationStyle('sidebar')}
                                /> Sidebar
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="navigationStyle"
                                    value="bottom-navigation"
                                    checked={navigationStyle === 'bottom-navigation'}
                                    onChange={() => setNavigationStyle('bottom-navigation')}
                                /> Bottom Navigation
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="navigationStyle"
                                    value="hamburger-menu"
                                    checked={navigationStyle === 'hamburger-menu'}
                                    onChange={() => setNavigationStyle('hamburger-menu')}
                                /> Hamburger Menu
                            </label>
                        </div>
                    </div>


                <div className="field">
                    <label className="label">Typography:</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={typography}
                            onChange={(e) => setTypography(e.target.value)}
                            placeholder="Enter font style..."
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">JS Library/Framework:</label>
                    <div className="control">
                        <div className="select">
                            <select value={jsFramework} onChange={(e) => setJsFramework(e.target.value)}>
                                <option value="react">React</option>
                                <option value="vue">Vue.js</option>
                                <option value="angular">Angular</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default OptionPanel;
