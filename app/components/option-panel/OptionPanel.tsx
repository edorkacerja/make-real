import React from 'react';
import {useAppDispatch, useAppSelector} from "../../lib/store/hooks";
import 'bulma/css/bulma.min.css';
import './OptionPanel.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {
    setCssLibrary,
    setJsFramework,
    setLayoutStyle,
    setNavbarLocation,
    setResponsiveDesign,
    setThemeStyle,
    setTypography,
    togglePanel
} from "../../lib/store/features/optionPanelSlice";

function OptionPanel() {
    const dispatch = useAppDispatch();
    const {
        themeStyle,
        cssLibrary,
        layoutStyle,
        responsiveDesign,
        navbarLocation,
        typography,
        jsFramework,
        isPanelOpen
    } = useAppSelector(state => state.optionPanel);

    // Handlers for dispatching actions
    const handleChange = (setter, value) => () => dispatch(setter(value));

    return (
        <>
            <div className={`hamburger ${isPanelOpen ? 'is-active' : ''}`} onClick={() => dispatch(togglePanel())}>
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
                                <input type="radio" name="themeStyle" checked={themeStyle === 'dark'} onChange={handleChange(setThemeStyle, 'dark')} /> Dark
                            </label>
                            <label className="radio">
                                <input type="radio" name="themeStyle" checked={themeStyle === 'light'} onChange={handleChange(setThemeStyle, 'light')} /> Light
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">CSS Library/Framework:</label>
                        <div className="control">
                            <label className="radio">
                                <input type="radio" name="cssLibrary" checked={cssLibrary === 'bootstrap'} onChange={handleChange(setCssLibrary, 'bootstrap')} /> Bootstrap
                            </label>
                            <label className="radio">
                                <input type="radio" name="cssLibrary" checked={cssLibrary === 'tailwind'} onChange={handleChange(setCssLibrary, 'tailwind')} /> Tailwind CSS
                            </label>
                            <label className="radio">
                                <input type="radio" name="cssLibrary" checked={cssLibrary === 'material-ui'} onChange={handleChange(setCssLibrary, 'material-ui')} /> Material-UI
                            </label>
                            <label className="radio">
                                <input type="radio" name="cssLibrary" checked={cssLibrary === 'bulma-css'} onChange={handleChange(setCssLibrary, 'bulma-css')} /> Bulma CSS
                            </label>
                            <label className="radio">
                                <input type="radio" name="cssLibrary" checked={cssLibrary === 'none'} onChange={handleChange(setCssLibrary, 'none')} /> None
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
                                onChange={handleChange(setLayoutStyle, 'flexbox')}
                            /> Flexbox
                        </label>
                        <label className="radio">
                            <input
                                type="radio"
                                name="layoutStyle"
                                value="grid"
                                checked={layoutStyle === 'grid'}
                                onChange={handleChange(setLayoutStyle, 'grid')}
                            /> Grid
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
                                    onChange={handleChange(setResponsiveDesign, 'mobile-first')}
                                /> Mobile-First
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="responsiveDesign"
                                    value="desktop-first"
                                    checked={responsiveDesign === 'desktop-first'}
                                    onChange={handleChange(setResponsiveDesign, 'desktop-first')}
                                /> Desktop-First
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="responsiveDesign"
                                    value="responsive"
                                    checked={responsiveDesign === 'responsive'}
                                    onChange={handleChange(setResponsiveDesign, 'responsive')}
                                /> Responsive
                            </label>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Navbar Location:</label>
                        <div className="control">
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="navbarLocation"
                                    value="top"
                                    checked={navbarLocation === 'top'}
                                    onChange={handleChange(setNavbarLocation, 'top')}
                                /> Top
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="navbarLocation"
                                    value="left"
                                    checked={navbarLocation === 'left'}
                                    onChange={handleChange(setNavbarLocation, 'left')}
                                /> Left
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="navbarLocation"
                                    value="right"
                                    checked={navbarLocation === 'right'}
                                    onChange={handleChange(setNavbarLocation, 'right')}
                                /> Right
                            </label>
                            <label className="radio">
                                <input
                                    type="radio"
                                    name="navbarLocation"
                                    value="bottom"
                                    checked={navbarLocation === 'bottom'}
                                    onChange={handleChange(setNavbarLocation, 'bottom')}
                                /> Bottom
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
                            onChange={handleChange(setTypography, typography)}
                            placeholder="Enter font style..."
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">JS Library/Framework:</label>
                    <div className="control">
                        <div className="select">
                            <select value={jsFramework} onChange={handleChange(setJsFramework, jsFramework)}>
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
