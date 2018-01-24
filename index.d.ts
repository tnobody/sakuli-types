declare class TestCase {
    constructor(wt: number, ct: number, ip?: string);
    addImagePaths(...imagePaths: string[]);
    endOfStep(name: string, warnTime?: number);
    handleException(e: any);
    saveResult()
    getId(): string;
    getLastURL(): string;
    getTestCaseFolderPath(): string;
    getTestSuiteFolderPath(): string;
    throwException(message: string, screenshot: boolean);

}

declare class CommandLineResult {
    getOutput(): string;
    getExitCode(): string;
}

declare class Environment {
    setSimilarity(sim: number): this|null;
    resetSimilarity(): this|null;
    getRegionFromFocusedWindow(): Region|null;
    takeScreenshot(path: string): void;
    sleep(sec: number): this|null;
    getClipboard():string|null;
    setClipboard(text: string):this;
    pasteClipboard(): this;
    copyIntoClipboard(): this;
    cleanClipboard(): this;
    paste(text: string): this | null;
    pasteMasked(text: string): this|null;
    pasteAndDecrypt(text: string): this|null;
    type(text: string, modifier?: string): this | null;
    typeMasked(text: string, modifier?: string): this | null;
    typeAndDecrypt(text: string, modifier?: string): this | null;
    decryptSecret(secret: string): string;
    keyDown(keys: string): this | null;
    keyUp(keys: string): this | null;
    write(test: string): this | null;
    mouseWheelDown(steps: number);
    mouseWheelUp(steps: number);
    isWindows(): boolean;
    isLinux(): boolean;
    getOsIdentifier(): string;
    runCommand(command: string, optThrowException?: boolean);
    getEnv(key: string): string;
    getProperty(key: string): string;
}

declare class Region {
    find(imagesName: string): this | null;
    findthis(): this | null;
    exists(imageName: string, waitSeconds?: number): this | null;
    click(): this | null;
    doubleClick(): this | null;
    rightClick(): this | null;
    mouseMove(): this | null;
    mouseDown(mouseButton: MouseButton): this | null;
    mouseUp(mouseButton: MouseButton): this | null;
    dragAndDrop(target: this): this | null;
    waitForImage(imageName: string, seconds?: number): this | null;
    paste(text: string): this | null;
    pasteMaske(text: string): this | null;
    pasteAndDecrypt(text: string): this | null;
    type(text: string, mod?: string): this | null;
    typeMaske(text: string, mod?: string): this | null;
    typeAndDecrypt(text: string, mod?: string): this | null;
    keyDown(keys: string): this | null;
    keyUp(keys: string): this | null;
    write(text: string): this | null;
    deleteChars(amount: number): this | null;
    mouseWheelDown(steps: number): this | null;
    mouseWheelUp(steps: number): this | null;
    move(x: number, y: number): this;
    grow(range: number): this;
    above(range: number): this;
    below(range: number): this;
    left(range: number): this;
    right(range: number): this;
    setH(h: number): void;
    getH(): number;
    setW(w: number): void;
    getW(): number;
    setX(x: number): void;
    getX(): number;
    setY(y: number): void;
    getY(): number;
    highlight(seconds?: number): this | null;
    takeScreenshot(filename: string): string | null;
    sleep(time: number): this | null;
    extractText(): string;
}

declare class RegionRectangle extends Region {
    constructor(x: number, y: number, w: number, h: number, optResumeOnException?: boolean);
}

declare class Application {
    constructor(exePath: string, resumeOnException?: boolean);
    open(): Application;
    focus(): Application;
    focusWindow(wndNr: number): Application;
    close(silent?: boolean): Application;
    kill(silent: boolean): Application;
    setSleepTime(second:number): Application;
    getRegion(): Region
    getRegionForWindow(wndNr: number): Region
    getName(): string;
}

declare const $includeFolder: string;
declare function _dynamicInclude(folder: string);

declare enum MouseButton {
    LEFT, MIDDLE, RIGHT
}

declare class Logger {
    static logError(msg: string);
    static logWarning(msg: string);
    static logInfo(msg: string);
    static logDebug(msg: string);
}

declare class Key {
    static F1: string;
    static F2: string;
    static F3: string;
    static F4: string;
    static F5: string;
    static F6: string;
    static F7: string;
    static F8: string;
    static F9: string;
    static F10: string;
    static F11: string;
    static F12: string;
    static F13: string;
    static F14: string;
    static F15: string;
    static SPACE: string;
    static ENTER: string;
    static BACKSPACE: string;
    static TAB: string;
    static ESC: string;
    static UP: string;
    static RIGHT: string;
    static DOWN: string;
    static LEFT: string;
    static PAGE_UP: string;
    static PAGE_DOWN: string;
    static DELETE: string;
    static END: string;
    static HOME: string;
    static INSERT: string;
    static SHIFT: string;
    static CTRL: string;
    static ALT: string;
    static ALTGR: string;
    static META: string;
    static CMD: string;
    static WIN: string;
    static PRINTSCREEEN: string;
    static SCROLL_LOCK: string;
    static PAUSE: string;
    static CAPS_LOCK: string;
    static NUM0: string;
    static NUM1: string;
    static NUM2: string;
    static NUM3: string;
    static NUM4: string;
    static NUM5: string;
    static NUM6: string;
    static NUM7: string;
    static NUM8: string;
    static NUM9: string;
    static SEPARATOR: string;
    static NUM_LOCK: string;
    static ADD: string;
    static MINUS: string;
    static MULTIPLY: string;
    static DIVIDE: string;
    static DECIMAL: string;
    static CONTEXT: string;

}

/*** SAHI API ***/

/*** Accessors ***/

type SahiElement<T extends HTMLElement = HTMLElement> = T;

interface AccessorIdentifierAttributes {
    className: string;
    sahiIndex: number;
}
type AccessorIdentifier = number | string | AccessorIdentifierAttributes | RegExp;
type AccessorFunction<T extends HTMLElement = HTMLElement> = (identifier: AccessorIdentifier, ...relations:SahiRelation[])=> SahiElement<T>;

declare const _password: AccessorFunction<HTMLInputElement>;
declare const _textbox: AccessorFunction<HTMLInputElement>;
declare const _hidden: AccessorFunction<HTMLInputElement>;
declare const _datebox: AccessorFunction<HTMLInputElement>;
declare const _datetimebox: AccessorFunction<HTMLInputElement>;
declare const _datetimelocalbox: AccessorFunction<HTMLInputElement>;
declare const _emailbox: AccessorFunction<HTMLInputElement>;
declare const _monthbox: AccessorFunction<HTMLInputElement>;
declare const _numberbox: AccessorFunction<HTMLInputElement>;
declare const _rangebox: AccessorFunction<HTMLInputElement>;
declare const _searchbox: AccessorFunction<HTMLInputElement>;
declare const _telephonebox: AccessorFunction<HTMLInputElement>;
declare const _timebox: AccessorFunction<HTMLInputElement>;
declare const _urlbox: AccessorFunction<HTMLInputElement>;
declare const _weekbox: AccessorFunction<HTMLInputElement>;
declare const _textarea: AccessorFunction<HTMLInputElement>;

declare const _button: AccessorFunction<HTMLButtonElement>;
declare const _checkbox: AccessorFunction<HTMLInputElement>;
declare const _radio: AccessorFunction<HTMLInputElement>;
declare const _submit: AccessorFunction<HTMLInputElement>;
declare const _reset: AccessorFunction<HTMLInputElement>;
declare const _imageSubmitButton: AccessorFunction<HTMLInputElement>;

declare const _select: AccessorFunction<HTMLSelectElement>;
declare const _option: AccessorFunction<HTMLOptionElement>;

declare const _file: AccessorFunction<HTMLInputElement>;

declare const _table: AccessorFunction<HTMLTableElement>;
declare const _row: AccessorFunction<HTMLTableRowElement>;
declare const _cell: AccessorFunction<HTMLTableCellElement>;
declare const _tableHeader: AccessorFunction<HTMLTableHeaderCellElement>;

declare const _link: AccessorFunction<HTMLAnchorElement>;
declare const _image: AccessorFunction<HTMLImageElement>;
declare const _label: AccessorFunction<HTMLLabelElement>;
declare const _listItem: AccessorFunction<HTMLLIElement>;
declare const _list: AccessorFunction<HTMLDListElement | HTMLOListElement | HTMLUListElement>;
declare const _div: AccessorFunction<HTMLDivElement>;
declare const _span: AccessorFunction<HTMLSpanElement>;
declare const _fieldset: AccessorFunction<HTMLFieldSetElement>;
declare const _heading1: AccessorFunction<HTMLHeadingElement>;
declare const _heading2: AccessorFunction<HTMLHeadingElement>;
declare const _heading3: AccessorFunction<HTMLHeadingElement>;
declare const _heading4: AccessorFunction<HTMLHeadingElement>;
declare const _heading5: AccessorFunction<HTMLHeadingElement>;
declare const _heading6: AccessorFunction<HTMLHeadingElement>;
declare const _area: AccessorFunction<HTMLAreaElement>;
declare const _map: AccessorFunction<HTMLMapElement>;
declare const _paragraph: AccessorFunction<HTMLParagraphElement>;
declare const _italic: AccessorFunction;
declare const _emphasis: AccessorFunction;
declare const _bold: AccessorFunction;
declare const _strong: AccessorFunction;
declare const _preformatted: AccessorFunction;
declare const _code: AccessorFunction;
declare const _blockquote: AccessorFunction;
declare const _canvas: AccessorFunction;
declare const _abbr: AccessorFunction;
declare const _hr: AccessorFunction;
declare const _iframe: AccessorFunction;
declare const _frame: AccessorFunction;
declare const _object: AccessorFunction;
declare const _embed: AccessorFunction;
declare const _dList: AccessorFunction;
declare const _dTerm: AccessorFunction;
declare const _dDesc: AccessorFunction;
declare const _font: AccessorFunction;
declare const _svg_rect: AccessorFunction;
declare const _svg_tspan: AccessorFunction;
declare const _svg_circle: AccessorFunction;
declare const _svg_ellipse: AccessorFunction;
declare const _svg_line: AccessorFunction;
declare const _svg_polygon: AccessorFunction;
declare const _svg_polyline: AccessorFunction;
declare const _svg_path: AccessorFunction;
declare const _svg_text: AccessorFunction;
declare const _article: AccessorFunction;
declare const _aside: AccessorFunction;
declare const _details: AccessorFunction;
declare const _figcaption: AccessorFunction;
declare const _figure: AccessorFunction;
declare const _footer: AccessorFunction;
declare const _header: AccessorFunction;
declare const _main: AccessorFunction;
declare const _mark: AccessorFunction;
declare const _nav: AccessorFunction;
declare const _section: AccessorFunction;
declare const _summary: AccessorFunction;
declare const _time: AccessorFunction;
declare const _video: AccessorFunction;

declare function _activeElement(): SahiElement;
declare function _byId(id: string): SahiElement;
declare function _byText(text: string, tagName: string): SahiElement;
declare function _byClassName(className: string, tagName: string, ...relations:SahiRelation[]): SahiElement;
declare function _byXPath(xpath: string): SahiElement;
declare function _accessor(accessor: string): SahiElement;
declare function _bySeleniumSelector(locator: string): null;

/*** Relation ***/

type SahiRelation = any;

type pr_i_AB = [number, number];

declare function _near(e: SahiElement): SahiRelation;
declare function _in(e: SahiElement): SahiRelation;
declare function _startLookInside(e: SahiElement): SahiRelation;
declare function _stopLookInside(): SahiRelation;

declare function _rightOf(e: SahiElement, offset?:pr_i_AB|number): SahiRelation;
declare function _leftOf(e: SahiElement, offset?:pr_i_AB|number): SahiRelation;
declare function _leftOrRightOf(e: SahiElement, offset?:pr_i_AB|number): SahiRelation;
declare function _under(e: SahiElement, offset?:pr_i_AB|number, limit?: number): SahiRelation;
declare function _above(e: SahiElement, offset?:pr_i_AB|number, limit?: number): SahiRelation;
declare function _aboveOrUnder(e: SahiElement, offset?:pr_i_AB|number): SahiRelation;

declare function _parentNode(e: SahiElement, tagName: string, occurrence: number): SahiRelation;
declare function _parentCell(e: SahiElement): SahiRelation;
declare function _parentCell(e: SahiElement, occurrence: number): SahiRelation;
declare function _parentRow(e: SahiElement): SahiRelation;
declare function _parentRow(e: SahiElement, occurrence: number): SahiRelation;
declare function _parentTable(e: SahiElement): SahiRelation;
declare function _parentTable(e: SahiElement, occurrence: number): SahiRelation;

/*** Action APIS ***/

declare function _xy(e: SahiElement, x: number, y: number): SahiElement;
declare function _click(e: SahiElement, combo?: string): SahiElement;
declare function _doubleClick(e: SahiElement, combo?: string): SahiElement;
declare function _rightClick(e: SahiElement, combo?: string): SahiElement;
declare function _mouseDown(e: SahiElement): null;
declare function _mouseDown(e: SahiElement, $isRight: boolean): null;
declare function _mouseDown(e: SahiElement, $isRight: boolean, $combo: string): null;
declare function _mouseUp(e: SahiElement): null;
declare function _mouseUp(e: SahiElement, $isRight: boolean): null;
declare function _mouseUp(e: SahiElement, $isRight: boolean, $combo: string): null;
declare function _mouseOver(e: SahiElement): null;
declare function _mouseOver(e: SahiElement, $combo: string): null;
declare function _check(e: SahiElement): null;
declare function _uncheck(e: SahiElement): null;
declare function _setSelected(e: SahiElement): null;
declare function _setSelected(e: SahiElement, ...relations: SahiRelation[]): null;
declare function _dragDrop(eSource: SahiElement, eTarget: SahiElement): null;
declare function _dragDropXY(e: SahiElement, $x: number, $y: number): null;
declare function _dragDropXY(e: SahiElement, $x: number, $y: number, $isRelative: boolean): null;

/** Touch Events **/

declare function _tap(e: SahiElement);
declare function _tap(e: SahiElement, count: number);
declare function _touch(e: SahiElement): void
declare function _touch(e: SahiElement, count: number): void
declare function _touchStart(e: SahiElement): void
declare function _touchEnd(e: SahiElement): void
declare function _touchCancel(e: SahiElement): void
declare function _touchMove(e: SahiElement, $moveX: number, $moveY: number): void
declare function _touchMove(e: SahiElement, $moveX: number, $moveY: number, $isRelative: boolean): void
declare function _swipe(e: SahiElement, $moveX: number, $moveY: number, $isRelative: boolean): void

/** Keyboard Events **/

declare function _setValue(e: SahiElement, $value: string): void
declare function _keyDown(e: SahiElement, $charInfo: string|number|(string|number)[]): void
declare function _keyDown(e: SahiElement, $charInfo: string|number|(string|number)[], $combo: string): void
declare function _keyUp(e: SahiElement, $charInfo: string|number|(string|number)[]): void
declare function _keyUp(e: SahiElement, $charInfo: string|number|(string|number)[], $combo: string): void
declare function _keyPress(e: SahiElement, $charInfo: string|number|(string|number)[]): void
declare function _keyPress(e: SahiElement, $charInfo: string|number|(string|number)[], $combo: string): void
declare function _type(e: SahiElement, test: string): void

/** Focus Events **/

declare function _focus(e: SahiElement): void
declare function _removeFocus(e: SahiElement): void
declare function _blur(e: SahiElement): void

/** Text Selection **/

declare function _selectRange(e: SahiElement, $rangeStart: number, $rangeEnd: number): void
declare function _selectTextRange(e: SahiElement, $searchText: string): void
declare function _selectTextRange(e: SahiElement, $searchText: string, $position: "before"|"after"): void

/** Page Navigation **/

declare function _navigateTo($url: string): void;
declare function _navigateTo($url: string, $forceReload: boolean): void;

/** Waits **/

declare function _wait($timeout: number): void;
declare function _wait($timeout: number, $expression: any): void;

/** File Upload **/

declare function _setFile($element: SahiElement, $filePath): void
declare function _setFile($element: SahiElement, $filePath, $actionUrl: string): void

declare function _setFile2($element: SahiElement, $filePath): void
declare function _setFile2($element: SahiElement, $filePath, $actionUrl: string): void

/** File Download **/

declare function _lastDownloadedFileName(): string;
declare function _saveDownloadedAs($path: string): void;
declare function _clearLastDownloadedFileName(): void;
declare function _sendHTMLResponseAfterFileDownload($enable: boolean);
declare function _addToSession($domain: string): void;

/** Window open/close APIS **/

declare function _closeWindow();
declare function _closeBrowser();
declare function _openBrowser();

/** Fetch APIS **/

declare function _getValue(e: SahiElement): string
declare function _getText(e: SahiElement): string
declare function _getOptions(e: SahiElement): string[];
declare function _getOptions(e: SahiElement, $type:"value"): string[];

/**
 * @deprecated
 * @param {SahiElement} e
 * @private
 */
declare function _getCellText(e: SahiElement): string
declare function _getSelectedText(e: SahiElement): string
declare function _getAttribute(e: SahiElement, $attributeName: string): any
declare function _exists(e: SahiElement): boolean
declare function _areEqual($expected: any, $actual: any): boolean
declare function _isVisible(e: SahiElement): boolean
declare function _isVisible(e: SahiElement, $checkZindex: boolean): boolean
declare function _isVisible(e: SahiElement, $checkZindex: boolean, $doScroll: boolean): boolean
declare function _containsText(e: SahiElement, $text: string): boolean
declare function _containsHTML(e: SahiElement, $html: string): boolean
declare function _contains(e: SahiElement, $child: SahiElement): boolean
declare function _title(): string
declare function _getTableContents(e: SahiElement): string[][];
declare function _getTableContents(e: SahiElement, $columns: (number|string|RegExp)[] ): string[][];
declare function _getTableContents(e: SahiElement, $columns: (number|string|RegExp)[], $rows: RegExp | number[] | number): string[][];
declare function _getTableContents(e: SahiElement, $columns: (number|string|RegExp)[], $rows: RegExp | number[] | number, $count): string[][];
declare function _style(e: SahiElement, $styleAttribute: string): string
declare function _position(e: SahiElement): [number, number]
declare function _position(e: SahiElement, $relative: boolean): [number, number]
declare function _getSelectionText(): string
declare function _getSelectionText(e: SahiElement): string

/** Browser Detection API **/
declare function _userAgent(): string;
declare function _getScreenSize(): [number, number];
declare function _isIE(): boolean;
declare function _isIE9(): boolean;
declare function _isIE10(): boolean;
declare function _isFF(): boolean;
declare function _isFF3(): boolean;
declare function _isFF4(): boolean;
declare function _isChrome(): boolean;
declare function _isSafari(): boolean;
declare function _isOpera(): boolean;
declare function _isPhantomJS(): boolean;
declare function _isHTMLUnit(): boolean;

/** Generic attribute fetching mechanism **/

declare function _fetch(e: SahiElement | any): any
declare function _set($variable: any, $expression: any): void
declare function _condition(e: any): void

/** Multiple Elements **/

declare function _collect($apiType: string, $identifier: string | number): SahiElement[]
declare function _collect($apiType: string, $identifier: string | number, ...$relations: SahiRelation[]): SahiElement[]
declare function _count($apiType: string, $identifier: string | number): number;
declare function _count($apiType: string, $identifier: string | number, ...$relations: SahiRelation[]): number;
declare function _collectAttributes($apiType: string, $identifier: string, $attribute: string | (($e:SahiElement) => any)): string[]
declare function _collectAttributes($apiType: string, $identifier: string, $attribute: string | (($e:SahiElement) => any), ...relations: SahiRelation[]): string[]

declare function _highlight(e: SahiElement);

/** Assertion API **/

declare function _assert($condition: boolean): void
declare function _assert($condition: boolean, $message: string): void
declare function _assertTrue($condition: boolean): void
declare function _assertTrue($condition: boolean, $message: string): void
declare function _assertNotTrue($condition: boolean): void
declare function _assertNotTrue($condition: boolean, $message: string): void
declare function _assertFalse($condition: boolean): void
declare function _assertFalse($condition: boolean, $message: string): void
declare function _assertNull($value: any): void
declare function _assertNull($value: any, $message: string): void
declare function _assertNotNull($value: any): void
declare function _assertNotNull($value: any, $message: string): void
declare function _assertExists($element: SahiElement): void
declare function _assertExists($element: SahiElement, $message: string): void
declare function _assertVisible($element: SahiElement): void
declare function _assertVisible($element: SahiElement, $message: string): void
declare function _assertNotVisible($element: SahiElement): void
declare function _assertNotVisible($element: SahiElement, $message: string): void
declare function _assertNotExists($element: SahiElement): void
declare function _assertNotExists($element: SahiElement, $message: string): void
declare function _assertEqual($expected: any, $actual: any): void
declare function _assertEqual($expected: any, $actual: any, $message: string): void

/**
 * @deprecated
 * @param {T[]} $expected
 * @param {T[]} $actual
 * @private
 */
declare function _assertEqualArrays<T>($expected: T[], $actual: T[]): void
/**
 * @deprecated
 * @param {T[]} $expected
 * @param {T[]} $actual
 * @param {string} $message
 * @private
 */
declare function _assertEqualArrays<T>($expected: T[], $actual: T[], $message: string): void

declare function _assertNotEqual($expected: any, $actual: any): void
declare function _assertNotEqual($expected: any, $actual: any, $message: string): void
declare function _assertContainsText($expected: any, $element: SahiElement): void
declare function _assertContainsText($expected: any, $element: SahiElement, $message: string): void
declare function _assertNotContainsText($expected: any, $element: SahiElement): void
declare function _assertNotContainsText($expected: any, $element: SahiElement, $message: string): void
declare function _assertEqualImages($expectedImagePath: string, $actualImagePath: string): void
declare function _assertEqualImages($expectedImagePath: string, $actualImagePath: string, $differenceThreshold: number): void
declare function _assertEqualImages($expectedImagePath: string, $actualImagePath: string, $differenceThreshold: number, $displayOnSuccess: boolean): void
declare function _assertEqualImages($expectedImagePath: string, $actualImagePath: string, $differenceThreshold: number, $displayOnSuccess: boolean, $failureMessage: string): void


/** Rich Text Editors **/

declare function _rte($identifier: string | number): SahiElement;
declare function _rte($identifier: string | number, ...$relation:SahiRelation[]): SahiElement;

/** Popup Windows **/
declare interface SahiWindowProperties {
    windowName: string;
    windowTitle: string;
    wasOpened:"0"|"1",
    domain: string;
    initialTime: number;
    lastTime: number;
    sahiWinId: string;
}
declare function _selectWindow(): void
declare function _selectWindow($windowIdentifier: string): void
declare function _popup(): void
declare function _popup(): any
declare function _popup($windowIdentifier: string): any
declare function _getWindows(): SahiWindowProperties[];
declare function _getWindows($activePeriod: number): SahiWindowProperties[]
declare function _windowExists($windowIdentifier: string): boolean
declare function _windowExists($windowIdentifier: string, $activePeriod: number): boolean
declare function _getRecentWindow(): SahiWindowProperties;

declare function _call($expression: any);
declare function _eval($evalString: string);

/** Native Events **/

declare function _typeNative($text :string): void
declare function _typeKeyCodeNative($typeKeyCodeNative: number): void
declare function _focusWindow(): void
declare type SahiWindowAction = "focus" | "maximize" | "minimize" | "resize" | "restore" | "refresh"
declare function _windowAction($action: SahiWindowAction): void
declare function _windowAction($action: SahiWindowAction, $width: number): void
declare function _windowAction($action: SahiWindowAction, $width: number, $height: number): void
declare function _clickNative($element: SahiElement): void
declare function _clickNative($element: SahiElement, $combo: string): void
declare function _clickNative($element: SahiElement, $combo: string, $isRight: boolean): void
declare function _clickNative($element: SahiElement, $combo: string, $isRight: boolean, $isDouble: boolean): void
declare function _rightClickNative($element: SahiElement): void
declare function _rightClickNative($element: SahiElement, $combo: string): void
declare function _doubleClickNative($element: SahiElement): void
declare function _doubleClickNative($element: SahiElement, $combo: string): void
declare function _clickNativeXY($x: number, $y: number): void
declare function _clickNativeXY($x: number, $y: number, $combo: string): void
declare function _clickNativeXY($x: number, $y: number, $combo: string, $isRight: boolean): void
declare function _clickNativeXY($x: number, $y: number, $combo: string, $isRight: boolean, $isDouble: boolean): void
declare function _mouseOverNative($element: SahiElement): void
declare function _mouseOverNative($element: SahiElement, $combo: string): void
declare function _dragDropNative($el: SahiElement, $l2: SahiElement): void
declare function _dragDropNativeXY($x1, $y1, $x2, $y2): void

declare function _takeScreenShot();
declare function _takeScreenShot($fileSysPath: string);
declare function _takeScreenShot($fileSysPath: string, $noLog: boolean);
declare function _takeScreenShot($fileSysPath: string, $noLog: boolean, $props: {format?:string, resizePercentage?:number});

/** Script Suite Info APIS **/

declare function _scriptName(): string
declare function _scriptPath(): string
declare function _scriptStartTime(): Date
declare function _scriptStatus(): "SUCCESS" | "FAILURE"
declare function _userDataDir(): string;
declare function _userDataPath($relPath: string): string;
declare function _resolvePath($relPath: string): string;
declare interface SahiSessionInfo {
    isRecording: boolean;
    isPlaying: boolean;
    isPause: boolean;
    sessionId: string;
    threadNumber: number;
    scriptPath: string;
}
declare function _sessionInfo(): SahiSessionInfo
declare interface SahiSuiteInfo {
    suiteReportId: string;
    suiteName: string;
    suitePath: string;
    baseURL: string;
    browserType: string
}
declare function _suiteInfo(): SahiSuiteInfo
declare function _isDataPassed(): boolean