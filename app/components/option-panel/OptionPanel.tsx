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
                        <div className="select">
                            <select value={themeStyle} onChange={(e) => setThemeStyle(e.target.value)}>
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">CSS Library/Framework:</label>
                    <div className="control">
                        <div className="select">
                            <select value={cssLibrary} onChange={(e) => setCssLibrary(e.target.value)}>
                                <option value="bootstrap">Bootstrap</option>
                                <option value="tailwind">Tailwind CSS</option>
                                <option value="material-ui">Material-UI</option>
                                <option value="none">None</option>
                            </select>
                        </div>
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
                        <div className="select">
                            <select value={responsiveDesign} onChange={(e) => setResponsiveDesign(e.target.value)}>
                                <option value="mobile-first">Mobile-First</option>
                                <option value="desktop-first">Desktop-First</option>
                                <option value="responsive">Responsive</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Navigation Style:</label>
                    <div className="control">
                        <div className="select">
                            <select value={navigationStyle} onChange={(e) => setNavigationStyle(e.target.value)}>
                                <option value="top-bar">Top Bar</option>
                                <option value="sidebar">Sidebar</option>
                                <option value="bottom-navigation">Bottom Navigation</option>
                                <option value="hamburger-menu">Hamburger Menu</option>
                            </select>
                        </div>
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
