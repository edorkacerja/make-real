import React, {useEffect, useState} from 'react';
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
import {useDebounce} from "use-debounce";

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
    const [isCustomCssLibrary, setIsCustomCssLibrary] = useState(false);
    const [customCssLibraryUrl, setCustomCssLibraryUrl] = useState('');


    const [fontSearchTerm, setFontSearchTerm] = useState('');
    const [debouncedFontSearchTerm] = useDebounce(fontSearchTerm, 1000);
    const [fontSearchResults, setFontSearchResults] = useState([]);
    const [debouncedCustomCssLibraryUrl] = useDebounce(customCssLibraryUrl, 500); // 500ms debounce time


    useEffect(() => {
        if (isCustomCssLibrary && debouncedCustomCssLibraryUrl !== 'custom') {
            dispatch(setCssLibrary(debouncedCustomCssLibraryUrl));
        }
    }, [debouncedCustomCssLibraryUrl, isCustomCssLibrary, dispatch]);

    useEffect(() => {
        if (debouncedFontSearchTerm) {
            fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDb7y2eeakiVdc0YrYwazPMrgTwt5uvHMg`)
                .then(response => response.json())
                .then(data => {
                    const filteredFonts = data.items.filter(font =>
                        font.family.toLowerCase().includes(debouncedFontSearchTerm.toLowerCase()));
                    setFontSearchResults(filteredFonts);
                })
                .catch(error => console.error('Error:', error));
        } else {
            setFontSearchResults([]);
        }
    }, [debouncedFontSearchTerm]);

    // Fetch the font CSS when a new font is selected
    useEffect(() => {
        if (typography) {
            const fontUrl = `https://fonts.googleapis.com/css?family=${typography.replace(/ /g, '+')}`;
            const link = document.createElement('link');
            link.href = fontUrl;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }

    }, [typography]);


    // Handlers for dispatching actions
    const handleChange = (setter, value) => () => {
        dispatch(setter(value));
        setIsCustomCssLibrary(false);
        setCustomCssLibraryUrl('');
    };

    const handleCustomChange = () => {
        if (cssLibrary === 'custom') {
            // If already on custom, switch back to a default option (e.g., 'none')
            dispatch(setCssLibrary('none'));
            setIsCustomCssLibrary(false);
        } else {
            dispatch(setCssLibrary('custom'));
            setIsCustomCssLibrary(true);
        }
    };



    function handleFontSelection(fontFamily) {
        dispatch(setTypography(fontFamily));
        setFontSearchTerm('');
        setFontSearchResults([]);
    }

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
                            <label className="radio">
                                <input type="radio" name="cssLibrary" checked={cssLibrary === 'custom'} onChange={handleCustomChange} /> Custom
                            </label>

                            {isCustomCssLibrary && (
                                <input
                                    className="input"
                                    type="text"
                                    value={customCssLibraryUrl}
                                    onChange={(e) => setCustomCssLibraryUrl(e.target.value)}
                                    placeholder="Enter custom library URL"
                                />
                            )}


                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Typography:</label>
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                value={fontSearchTerm}
                                onChange={(e) => setFontSearchTerm(e.target.value)}
                                placeholder="Search for fonts..."
                            />
                            <div className={"fonts-dropdown-menu"}>
                                {fontSearchResults.map(font => (
                                    <div key={font.family} onClick={() => handleFontSelection(font.family)}>
                                        {font.family}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {typography && (
                            <p className="selected-font">Selected Font: <strong>{typography}</strong></p>
                        )}
                    </div>

                    {typography && (
                        <div className="font-preview" style={{ fontFamily: typography }}>
                            Preview: The quick brown fox jumps over the lazy dog
                        </div>
                    )}

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
                        <label className="label">JS Library/Framework:</label>
                        <div className="control">
                            <div className="select">
                                <select value={jsFramework} onChange={handleChange(setJsFramework, jsFramework)}>
                                    <option value="jquery">jQuery</option> {/* Added jQuery option */}
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
