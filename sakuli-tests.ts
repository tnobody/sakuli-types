///<reference path="index.d.ts"/>

_dynamicInclude($includeFolder);
const testCase = new TestCase(50, 60);
const env = new Environment();
const screenRegion = new Region();
const appCalc = new Application("/usr/bin/gnome-calculator");
const appGedit = new Application("/usr/bin/gedit");

function checkCentOS() {
    const dist = env.runCommand('cat /etc/os-release').getOutput();
    if (dist.match(/NAME=.*CentOS.*/)) {
        Logger.logInfo('Detected distribution: CentOS  >> override some image patterns');
        testCase.addImagePaths("centos");
    }
}

try {
    checkCentOS();

    env.sleep(100000);

    _highlight(_link(/SSL M.*/));
    /**
     try {
        _highlight(_link("LogsXXXX"));
    } catch(e) {
        throw 'no logs found';
    }
     **/

    _highlight(_link("Online Documentation"));
    _highlight(_link("Test Pages"));
    _highlight(_link("Sample Application"));
    testCase.endOfStep("Test Sahi landing page");
    appCalc.open();
    screenRegion.highlight();
    appCalc.getRegion().highlight();
    screenRegion.waitForImage("calculator.png", 5).highlight().mouseMove();

    screenRegion.waitForImage('calc').highlight(5);

    env.type("525");
    env.sleep(2);
    var calcRegion = appCalc.getRegion();
    calcRegion.find("plus.png").click().type("100");
    calcRegion.find("result.png").click();
    screenRegion.waitForImage("625", 5);
    testCase.endOfStep("Calculation");

    appGedit.open();
    screenRegion.waitForImage("gedit.png", 10);
    env.paste("Initial test passed. Sakuli, Sahi and Sikuli seem to work fine. Exiting...");
    testCase.endOfStep("Editor");
    env.sleep(4);

} catch (e) {
    testCase.handleException(e);
} finally {
    //env.sleep(99999999);
    appCalc.close(true); //silent
    appGedit.kill(true);  //silent, without exit prompt
    testCase.saveResult();
}

/** ACCESSOR API **/

//name
_password("password_name")
//id
_password("password_id")
//index
_password(5)
//css class with index
_password("shaded bigfont[1]")
//css class with regular expression and index
_password("/bigfont/[1]")
//multiple attributes as JSON
_password({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_password({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_password("password_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_password(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_password("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_password("password_name"), "apple");
_setValue(_password("/bigfont/[1]", _rightOf(_span("Name"))), "apple");
// Check if element exists
_assertExists(_password("password_id"));
// Check if element is visible
_assert(_isVisible(_password("password_id")));
_assertEqual("apple", _getValue(_password("password_id")));

//name
_textbox("textbox_name")
//id
_textbox("textbox_id")
//index
_textbox(5)
//css class with index
_textbox("shaded bigfont[1]")
//css class with regular expression and index
_textbox("/bigfont/[1]")
//multiple attributes as JSON
_textbox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_textbox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_textbox("textbox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_textbox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_textbox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_textbox("textbox_name"), "apple");
_setValue(_textbox("/bigfont/[1]", _rightOf(_span("Name"))), "apple");
// Check if element exists
_assertExists(_textbox("textbox_id"));
// Check if element is visible
_assert(_isVisible(_textbox("textbox_id")));
_assertEqual("apple", _getValue(_textbox("textbox_id")));

//name
_hidden("hidden_name")
//id
_hidden("hidden_id")
//index
_hidden(5)
//css class with index
_hidden("shaded bigfont[1]")
//css class with regular expression and index
_hidden("/bigfont/[1]")
//multiple attributes as JSON
_hidden({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_hidden({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_hidden("hidden_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_hidden(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_hidden("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_hidden("hidden_name"), "apple");
_setValue(_hidden("/bigfont/[1]", _rightOf(_span("Name"))), "apple");
// Check if element exists
_assertExists(_hidden("hidden_id"));
// Check if element is visible
_assert(_isVisible(_hidden("hidden_id")));
_assertEqual("apple", _getValue(_hidden("hidden_id")));

//name
_datebox("datebox_name")
//id
_datebox("datebox_id")
//index
_datebox(5)
//css class with index
_datebox("shaded bigfont[1]")
//css class with regular expression and index
_datebox("/bigfont/[1]")
//multiple attributes as JSON
_datebox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_datebox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_datebox("datebox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_datebox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_datebox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_datebox("datebox_name"), "2012-12-18");
_setValue(_datebox("/bigfont/[1]", _rightOf(_span("Name"))), "2012-12-18");
// Check if element exists
_assertExists(_datebox("datebox_id"));
// Check if element is visible
_assert(_isVisible(_datebox("datebox_id")));
_assertEqual("2012-12-18", _getValue(_datebox("datebox_id")));

//name
_datetimebox("datetimebox_name")
//id
_datetimebox("datetimebox_id")
//index
_datetimebox(5)
//css class with index
_datetimebox("shaded bigfont[1]")
//css class with regular expression and index
_datetimebox("/bigfont/[1]")
//multiple attributes as JSON
_datetimebox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_datetimebox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_datetimebox("datetimebox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_datetimebox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_datetimebox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_datetimebox("datetimebox_name"), "9/6/2011 14:06:48");
_setValue(_datetimebox("/bigfont/[1]", _rightOf(_span("Name"))), "9/6/2011 14:06:48");
// Check if element exists
_assertExists(_datetimebox("datetimebox_id"));
// Check if element is visible
_assert(_isVisible(_datetimebox("datetimebox_id")));
_assertEqual("9/6/2011 14:06:48", _getValue(_datetimebox("datetimebox_id")));

//name
_datetimelocalbox("datetimelocalbox_name")
//id
_datetimelocalbox("datetimelocalbox_id")
//index
_datetimelocalbox(5)
//css class with index
_datetimelocalbox("shaded bigfont[1]")
//css class with regular expression and index
_datetimelocalbox("/bigfont/[1]")
//multiple attributes as JSON
_datetimelocalbox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_datetimelocalbox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_datetimelocalbox("datetimelocalbox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_datetimelocalbox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_datetimelocalbox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_datetimelocalbox("datetimelocalbox_name"), "1985-04-12T23:20:50.52");
_setValue(_datetimelocalbox("/bigfont/[1]", _rightOf(_span("Name"))), "1985-04-12T23:20:50.52");
// Check if element exists
_assertExists(_datetimelocalbox("datetimelocalbox_id"));
// Check if element is visible
_assert(_isVisible(_datetimelocalbox("datetimelocalbox_id")));
_assertEqual("1985-04-12T23:20:50.52", _getValue(_datetimelocalbox("datetimelocalbox_id")));

//name
_emailbox("emailbox_name");
//id
_emailbox("emailbox_id")
//index
_emailbox(5)
//css class with index
_emailbox("shaded bigfont[1]")
//css class with regular expression and index
_emailbox("/bigfont/[1]")
//multiple attributes as JSON
_emailbox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_emailbox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_emailbox("emailbox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_emailbox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_emailbox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_emailbox("emailbox_name"), "my_email@sahi.co.in");
_setValue(_emailbox("/bigfont/[1]", _rightOf(_span("Name"))), "my_email@sahi.co.in");
// Check if element exists
_assertExists(_emailbox("emailbox_id"));
// Check if element is visible
_assert(_isVisible(_emailbox("emailbox_id")));
_assertEqual("my_email@sahi.co.in", _getValue(_emailbox("emailbox_id")));

//name
_monthbox("monthbox_name")
//id
_monthbox("monthbox_id")
//index
_monthbox(5)
//css class with index
_monthbox("shaded bigfont[1]")
//css class with regular expression and index
_monthbox("/bigfont/[1]")
//multiple attributes as JSON
_monthbox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_monthbox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_monthbox("monthbox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_monthbox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_monthbox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_monthbox("monthbox_name"), "1996-12");
_setValue(_monthbox("/bigfont/[1]", _rightOf(_span("Name"))), "1996-12");
// Check if element exists
_assertExists(_monthbox("monthbox_id"));
// Check if element is visible
_assert(_isVisible(_monthbox("monthbox_id")));
_assertEqual("1996-12", _getValue(_monthbox("monthbox_id")));

//name
_numberbox("numberbox_name")
//id
_numberbox("numberbox_id")
//index
_numberbox(5)
//css class with index
_numberbox("shaded bigfont[1]")
//css class with regular expression and index
_numberbox("/bigfont/[1]")
//multiple attributes as JSON
_numberbox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_numberbox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_numberbox("numberbox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_numberbox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_numberbox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_numberbox("numberbox_name"), "13579");
_setValue(_numberbox("/bigfont/[1]", _rightOf(_span("Name"))), "13579");
// Check if element exists
_assertExists(_numberbox("numberbox_id"));
// Check if element is visible
_assert(_isVisible(_numberbox("numberbox_id")));
_assertEqual("13579", _getValue(_numberbox("numberbox_id")));

//name
_rangebox("rangebox_name")
//id
_rangebox("rangebox_id")
//index
_rangebox(5)
//css class with index
_rangebox("shaded bigfont[1]")
//css class with regular expression and index
_rangebox("/bigfont/[1]")
//multiple attributes as JSON
_rangebox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_rangebox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_rangebox("rangebox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_rangebox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_rangebox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_rangebox("rangebox_name"), "5");
_setValue(_rangebox("/bigfont/[1]", _rightOf(_span("Name"))), "5");
// Check if element exists
_assertExists(_rangebox("rangebox_id"));
// Check if element is visible
_assert(_isVisible(_rangebox("rangebox_id")));
_assertEqual("5", _getValue(_rangebox("rangebox_id")));

//name
_searchbox("searchbox_name")
//id
_searchbox("searchbox_id")
//index
_searchbox(5)
//css class with index
_searchbox("shaded bigfont[1]")
//css class with regular expression and index
_searchbox("/bigfont/[1]")
//multiple attributes as JSON
_searchbox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_searchbox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_searchbox("searchbox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_searchbox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_searchbox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_searchbox("searchbox_name"), "apple");
_setValue(_searchbox("/bigfont/[1]", _rightOf(_span("Name"))), "apple");
// Check if element exists
_assertExists(_searchbox("searchbox_id"));
// Check if element is visible
_assert(_isVisible(_searchbox("searchbox_id")));
_assertEqual("apple", _getValue(_searchbox("searchbox_id")));

//name
_telephonebox("telephonebox_name")
//id
_telephonebox("telephonebox_id")
//index
_telephonebox(5)
//css class with index
_telephonebox("shaded bigfont[1]")
//css class with regular expression and index
_telephonebox("/bigfont/[1]")
//multiple attributes as JSON
_telephonebox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_telephonebox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_telephonebox("telephonebox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_telephonebox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_telephonebox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_telephonebox("telephonebox_name"), "123-555-2000");
_setValue(_telephonebox("/bigfont/[1]", _rightOf(_span("Name"))), "123-555-2000");
// Check if element exists
_assertExists(_telephonebox("telephonebox_id"));
// Check if element is visible
_assert(_isVisible(_telephonebox("telephonebox_id")));
_assertEqual("123-555-2000", _getValue(_telephonebox("telephonebox_id")));

//name
_timebox("timebox_name")
//id
_timebox("timebox_id")
//index
_timebox(5)
//css class with index
_timebox("shaded bigfont[1]")
//css class with regular expression and index
_timebox("/bigfont/[1]")
//multiple attributes as JSON
_timebox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_timebox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_timebox("timebox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_timebox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_timebox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_timebox("timebox_name"), "17:39:57");
_setValue(_timebox("/bigfont/[1]", _rightOf(_span("Name"))), "17:39:57");
// Check if element exists
_assertExists(_timebox("timebox_id"));
// Check if element is visible
_assert(_isVisible(_timebox("timebox_id")));
_assertEqual("17:39:57", _getValue(_timebox("timebox_id")));

//name
_urlbox("urlbox_name")
//id
_urlbox("urlbox_id")
//index
_urlbox(5)
//css class with index
_urlbox("shaded bigfont[1]")
//css class with regular expression and index
_urlbox("/bigfont/[1]")
//multiple attributes as JSON
_urlbox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_urlbox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_urlbox("urlbox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_urlbox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_urlbox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_urlbox("urlbox_name"), "http://www.example.com/blah.html");
_setValue(_urlbox("/bigfont/[1]", _rightOf(_span("Name"))), "http://www.example.com/blah.html");
// Check if element exists
_assertExists(_urlbox("urlbox_id"));
// Check if element is visible
_assert(_isVisible(_urlbox("urlbox_id")));
_assertEqual("http://www.example.com/blah.html", _getValue(_urlbox("urlbox_id")));

//name
_weekbox("weekbox_name")
//id
_weekbox("weekbox_id")
//index
_weekbox(5)
//css class with index
_weekbox("shaded bigfont[1]")
//css class with regular expression and index
_weekbox("/bigfont/[1]")
//multiple attributes as JSON
_weekbox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_weekbox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_weekbox("weekbox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_weekbox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_weekbox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_weekbox("weekbox_name"), "1996-W16");
_setValue(_weekbox("/bigfont/[1]", _rightOf(_span("Name"))), "1996-W16");
// Check if element exists
_assertExists(_weekbox("weekbox_id"));
// Check if element is visible
_assert(_isVisible(_weekbox("weekbox_id")));
_assertEqual("1996-W16", _getValue(_weekbox("weekbox_id")));

//name
_textarea("textarea_name")
//id
_textarea("textarea_id")
//index
_textarea(5)
//css class with index
_textarea("shaded bigfont[1]")
//css class with regular expression and index
_textarea("/bigfont/[1]")
//multiple attributes as JSON
_textarea({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_textarea({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_textarea("textarea_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_textarea(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_textarea("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setValue(_textarea("textarea_name"), "apple");
_setValue(_textarea("/bigfont/[1]", _rightOf(_span("Name"))), "apple");
// Check if element exists
_assertExists(_textarea("textarea_id"));
// Check if element is visible
_assert(_isVisible(_textarea("textarea_id")));
_assertEqual("apple", _getValue(_textarea("textarea_id")));

//value
_button("apple")
//name
_button("button_name")
//id
_button("button_id")
//index
_button(5)
//css class with index
_button("shaded bigfont[1]")
//css class with regular expression and index
_button("/bigfont/[1]")
//multiple attributes as JSON
_button({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_button({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_button("apple", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_button(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_button("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_button("apple"));
_click(_button("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_button("button_id"));
// Check if element is visible
_assert(_isVisible(_button("button_id")));
_assertEqual("apple", _getValue(_button("button_id")));

//visible text
_button("button text")
//visible text with regular expression
_button("/ton te/")
//visible text with regular expression
_button("/but.*text/")
//name
_button("button_name")
//id
_button("button_id")
//index
_button(5)
//css class with index
_button("shaded bigfont[1]")
//css class with regular expression and index
_button("/bigfont/[1]")
//multiple attributes as JSON
_button({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_button({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_button("button text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_button(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_button("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_button("button text"));
_click(_button("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_button("button_id"));
// Check if element is visible
_assert(_isVisible(_button("button_id")));
_assertEqual("button text", _getText(_button("button_id")));

//name
_checkbox("checkbox_name")
//id
_checkbox("checkbox_id")
//value
_checkbox("apple")
//index
_checkbox(5)
//css class with index
_checkbox("shaded bigfont[1]")
//css class with regular expression and index
_checkbox("/bigfont/[1]")
//multiple attributes as JSON
_checkbox({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_checkbox({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_checkbox("checkbox_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_checkbox(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_checkbox("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_checkbox("checkbox_name"));
_click(_checkbox("/bigfont/[1]", _rightOf(_span("Name"))));
// Check irrespective of whether it was checked or unchecked
_check(_checkbox("checkbox_name"));
// Uncheck irrespective of whether it was checked or unchecked
_uncheck(_checkbox("checkbox_name"));
// Check if element exists
_assertExists(_checkbox("checkbox_id"));
// Check if element is visible
_assert(_isVisible(_checkbox("checkbox_id")));
_assertTrue(_getAttribute(_checkbox("checkbox_id"), "checked")); // checked
_assertFalse(_getAttribute(_checkbox("checkbox_id"), "checked")); //  not checked

//id
_radio("radio_id")
//name
_radio("radio_name")
//value
_radio("apple")
//index
_radio(5)
//css class with index
_radio("shaded bigfont[1]")
//css class with regular expression and index
_radio("/bigfont/[1]")
//multiple attributes as JSON
_radio({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_radio({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_radio("radio_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_radio(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_radio("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_radio("radio_id"));
_click(_radio("/bigfont/[1]", _rightOf(_span("Name"))));
// Check irrespective of whether it was checked or unchecked
_check(_radio("radio_name"));
// Check if element exists
_assertExists(_radio("radio_id"));
// Check if element is visible
_assert(_isVisible(_radio("radio_id")));
_assertTrue(_getAttribute(_radio("radio_id"), "checked")); // checked
_assertFalse(_getAttribute(_radio("radio_id"), "checked")); //  not checked

//value
_submit("apple")
//name
_submit("submit_name")
//id
_submit("submit_id")
//index
_submit(5)
//css class with index
_submit("shaded bigfont[1]")
//css class with regular expression and index
_submit("/bigfont/[1]")
//multiple attributes as JSON
_submit({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_submit({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_submit("apple", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_submit(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_submit("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_submit("apple"));
_click(_submit("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_submit("submit_id"));
// Check if element is visible
_assert(_isVisible(_submit("submit_id")));
_assertEqual("apple", _getValue(_submit("submit_id")));

//visible text
_submit("submit text")
//visible text with regular expression
_submit("/mit te/")
//visible text with regular expression
_submit("/sub.*text/")
//name
_submit("submit_name")
//id
_submit("submit_id")
//index
_submit(5)
//css class with index
_submit("shaded bigfont[1]")
//css class with regular expression and index
_submit("/bigfont/[1]")
//multiple attributes as JSON
_submit({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_submit({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_submit("submit text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_submit(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_submit("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_submit("submit text"));
_click(_submit("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_submit("submit_id"));
// Check if element is visible
_assert(_isVisible(_submit("submit_id")));
_assertEqual("submit text", _getText(_submit("submit_id")));

//value
_reset("apple")
//name
_reset("reset_name")
//id
_reset("reset_id")
//index
_reset(5)
//css class with index
_reset("shaded bigfont[1]")
//css class with regular expression and index
_reset("/bigfont/[1]")
//multiple attributes as JSON
_reset({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_reset({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_reset("apple", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_reset(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_reset("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_reset("apple"));
_click(_reset("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_reset("reset_id"));
// Check if element is visible
_assert(_isVisible(_reset("reset_id")));
_assertEqual("apple", _getValue(_reset("reset_id")));

//visible text
_reset("reset text")
//visible text with regular expression
_reset("/set te/")
//visible text with regular expression
_reset("/re.*text/")
//name
_reset("reset_name")
//id
_reset("reset_id")
//index
_reset(5)
//css class with index
_reset("shaded bigfont[1]")
//css class with regular expression and index
_reset("/bigfont/[1]")
//multiple attributes as JSON
_reset({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_reset({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_reset("reset text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_reset(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_reset("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_reset("reset text"));
_click(_reset("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_reset("reset_id"));
// Check if element is visible
_assert(_isVisible(_reset("reset_id")));
_assertEqual("reset text", _getText(_reset("reset_id")));

//title|alt
_imageSubmitButton("brief description")
//name
_imageSubmitButton("imageSubmitButton_name")
//id
_imageSubmitButton("imageSubmitButton_id")
//index
_imageSubmitButton(5)
//css class with index
_imageSubmitButton("shaded bigfont[1]")
//css class with regular expression and index
_imageSubmitButton("/bigfont/[1]")
//multiple attributes as JSON
_imageSubmitButton({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_imageSubmitButton({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_imageSubmitButton("brief description", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_imageSubmitButton(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_imageSubmitButton("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_imageSubmitButton("brief description"));
_click(_imageSubmitButton("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_imageSubmitButton("imageSubmitButton_id"));
// Check if element is visible
_assert(_isVisible(_imageSubmitButton("imageSubmitButton_id")));

//name
_select("select_name")
//id
_select("select_id")
//index
_select(5)
//css class with index
_select("shaded bigfont[1]")
//css class with regular expression and index
_select("/bigfont/[1]")
//multiple attributes as JSON
_select({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_select({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_select("select_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_select(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_select("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setSelected(_select("select_name"), "option one");
_setSelected(_select("/bigfont/[1]", _rightOf(_span("Name"))), "option one");
// select by index
_setSelected(_select("select_name"), 3);
// multi select by index
_setSelected(_select("select_name"), 4, true);
// select another in multiselect
_setSelected(_select("select_name"), "another one", true);
// select multiple in multiselect
_setSelected(_select("select_name"), ["opt one", "opt two"]);
// select multiple by index in multiselect
_setSelected(_select("select_name"), [1, 2]);
// select some more in multiselect
_setSelected(_select("select_name"), ["opt three", "opt four"], true);
// Check if element exists
_assertExists(_select("select_id"));
// Check if element is visible
_assert(_isVisible(_select("select_id")));

// single option
_assertEqual("option one", _getSelectedText(_select("select_id")));
// multiple options
_assertEqual("option one,option three", _getSelectedText(_select("select_id")));
//visible text
_option("option text")
//visible text with regular expression
_option("/ion te/")
//visible text with regular expression
_option("/opt.*text/")
//value
_option("apple")
//id
_option("option_id")
//index
_option(5)
//css class with index
_option("shaded bigfont[1]")
//css class with regular expression and index
_option("/bigfont/[1]")
//multiple attributes as JSON
_option({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_option({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_option("option text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_option(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_option("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_option("option text"));
_click(_option("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_option("option_id"));
// Check if element is visible
_assert(_isVisible(_option("option_id")));
_assertEqual("option text", _getText(_option("option_id")));

//name
_file("file_name")
//id
_file("file_id")
//index
_file(5)
//css class with index
_file("shaded bigfont[1]")
//css class with regular expression and index
_file("/bigfont/[1]")
//multiple attributes as JSON
_file({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_file({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_file("file_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_file(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_file("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_setFile(_file("file_name"), "apple");
_setFile(_file("/bigfont/[1]", _rightOf(_span("Name"))), "apple");
// Check if element exists
_assertExists(_file("file_id"));
// Check if element is visible
_assert(_isVisible(_file("file_id")));
_assertEqual("apple", _getValue(_file("file_id")));

//id
_table("table_id")
//index
_table(5)
//css class with index
_table("shaded bigfont[1]")
//css class with regular expression and index
_table("/bigfont/[1]")
//multiple attributes as JSON
_table({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_table({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_table("table_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_table(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_table("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_table("table_id"));
_click(_table("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_table("table_id"));
// Check if element is visible
_assert(_isVisible(_table("table_id")));
_assertEqual("table text", _getText(_table("table_id")));

//id
_row("row_id")
//visible text
_row("row text")
//visible text with regular expression
_row("/ow te/")
//visible text with regular expression
_row("/r.*text/")
//index
_row(5)
//css class with index
_row("shaded bigfont[1]")
//css class with regular expression and index
_row("/bigfont/[1]")
//multiple attributes as JSON
_row({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_row({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_row("row_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_row(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_row("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_row("row_id"));
_click(_row("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_row("row_id"));
// Check if element is visible
_assert(_isVisible(_row("row_id")));
_assertEqual("row text", _getText(_row("row_id")));

//visible text
_cell("cell text")
//visible text with regular expression
_cell("/ll te/")
//visible text with regular expression
_cell("/ce.*text/")
//id
_cell("cell_id")
//index
_cell(5)
//css class with index
_cell("shaded bigfont[1]")
//css class with regular expression and index
_cell("/bigfont/[1]")
//multiple attributes as JSON
_cell({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_cell({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_cell("cell text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_cell(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_cell("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_cell("cell text"));
_click(_cell("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_cell("cell_id"));
// Check if element is visible
_assert(_isVisible(_cell("cell_id")));
_assertEqual("cell text", _getText(_cell("cell_id")));

//visible text
_tableHeader("tableHeader text")
//visible text with regular expression
_tableHeader("/Header te/")
//visible text with regular expression
_tableHeader("/table.*text/")
//id
_tableHeader("tableHeader_id")
//css class with index
_tableHeader("shaded bigfont[1]")
//css class with regular expression and index
_tableHeader("/bigfont/[1]")
//multiple attributes as JSON
_tableHeader({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_tableHeader({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_tableHeader("tableHeader text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_tableHeader(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_tableHeader("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_tableHeader("tableHeader text"));
_click(_tableHeader("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_tableHeader("tableHeader_id"));
// Check if element is visible
_assert(_isVisible(_tableHeader("tableHeader_id")));
_assertEqual("tableHeader text", _getText(_tableHeader("tableHeader_id")));

//visible text
_link("link text")
//visible text with regular expression
_link("/nk te/")
//visible text with regular expression
_link("/li.*text/")
//title|alt
_link("brief description")
//id
_link("link_id")
//index
_link(5)
//href
_link("http://a.example.com/")
//css class with index
_link("shaded bigfont[1]")
//css class with regular expression and index
_link("/bigfont/[1]")
//multiple attributes as JSON
_link({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_link({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_link("link text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_link(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_link("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_link("link text"));
_click(_link("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_link("link_id"));
// Check if element is visible
_assert(_isVisible(_link("link_id")));
_assertEqual("link text", _getText(_link("link_id")));

//title|alt
_image("brief description")
//id
_image("image_id")
//index
_image(5)
//css class with index
_image("shaded bigfont[1]")
//css class with regular expression and index
_image("/bigfont/[1]")
//multiple attributes as JSON
_image({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_image({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_image("brief description", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_image(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_image("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_image("brief description"));
_click(_image("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_image("image_id"));
// Check if element is visible
_assert(_isVisible(_image("image_id")));

//visible text
_label("label text")
//visible text with regular expression
_label("/bel te/")
//visible text with regular expression
_label("/la.*text/")
//id
_label("label_id")
//index
_label(5)
//css class with index
_label("shaded bigfont[1]")
//css class with regular expression and index
_label("/bigfont/[1]")
//multiple attributes as JSON
_label({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_label({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_label("label text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_label(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_label("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_label("label text"));
_click(_label("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_label("label_id"));
// Check if element is visible
_assert(_isVisible(_label("label_id")));
_assertEqual("label text", _getText(_label("label_id")));
//visible text
_listItem("listItem text")
//visible text with regular expression
_listItem("/Item te/")
//visible text with regular expression
_listItem("/list.*text/")
//id
_listItem("listItem_id")
//index
_listItem(5)
//css class with index
_listItem("shaded bigfont[1]")
//css class with regular expression and index
_listItem("/bigfont/[1]")
//multiple attributes as JSON
_listItem({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_listItem({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_listItem("listItem text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_listItem(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_listItem("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_listItem("listItem text"));
_click(_listItem("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_listItem("listItem_id"));
// Check if element is visible
_assert(_isVisible(_listItem("listItem_id")));
_assertEqual("listItem text", _getText(_listItem("listItem_id")));

//id
_list("list_id")
//index
_list(5)
//css class with index
_list("shaded bigfont[1]")
//css class with regular expression and index
_list("/bigfont/[1]")
//multiple attributes as JSON
_list({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_list({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_list("list_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_list(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_list("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_list("list_id"));
_click(_list("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_list("list_id"));
// Check if element is visible
_assert(_isVisible(_list("list_id")));
_assertEqual("list text", _getText(_list("list_id")));

//id
_list("list_id")
//index
_list(5)
//css class with index
_list("shaded bigfont[1]")
//css class with regular expression and index
_list("/bigfont/[1]")
//multiple attributes as JSON
_list({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_list({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_list("list_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_list(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_list("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_list("list_id"));
_click(_list("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_list("list_id"));
// Check if element is visible
_assert(_isVisible(_list("list_id")));
_assertEqual("list text", _getText(_list("list_id")));

//visible text
_div("div text")
//visible text with regular expression
_div("/iv te/")
//visible text with regular expression
_div("/d.*text/")
//id
_div("div_id")
//index
_div(5)
//css class with index
_div("shaded bigfont[1]")
//css class with regular expression and index
_div("/bigfont/[1]")
//multiple attributes as JSON
_div({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_div({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_div("div text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_div(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_div("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_div("div text"));
_click(_div("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_div("div_id"));
// Check if element is visible
_assert(_isVisible(_div("div_id")));
_assertEqual("div text", _getText(_div("div_id")));

//visible text
_span("span text")
//visible text with regular expression
_span("/an te/")
//visible text with regular expression
_span("/sp.*text/")
//id
_span("span_id")
//index
_span(5)
//css class with index
_span("shaded bigfont[1]")
//css class with regular expression and index
_span("/bigfont/[1]")
//multiple attributes as JSON
_span({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_span({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_span("span text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_span(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_span("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_span("span text"));
_click(_span("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_span("span_id"));
// Check if element is visible
_assert(_isVisible(_span("span_id")));
_assertEqual("span text", _getText(_span("span_id")));

//name
_fieldset("fieldset_name")
//id
_fieldset("fieldset_id")
//index
_fieldset(5)
//css class with index
_fieldset("shaded bigfont[1]")
//css class with regular expression and index
_fieldset("/bigfont/[1]")
//multiple attributes as JSON
_fieldset({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_fieldset({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_fieldset("fieldset_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_fieldset(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_fieldset("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_fieldset("fieldset_name"));
_click(_fieldset("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_fieldset("fieldset_id"));
// Check if element is visible
_assert(_isVisible(_fieldset("fieldset_id")));
_assertEqual("fieldset text", _getText(_fieldset("fieldset_id")));

_heading1("heading1 text")
//visible text with regular expression
_heading1("/ing1 te/")
//visible text with regular expression
_heading1("/head.*text/")
//id
_heading1("heading1_id")
//index
_heading1(5)
//css class with index
_heading1("shaded bigfont[1]")
//css class with regular expression and index
_heading1("/bigfont/[1]")
//multiple attributes as JSON
_heading1({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_heading1({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_heading1("heading1 text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_heading1(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_heading1("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_heading1("heading1 text"));
_click(_heading1("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_heading1("heading1_id"));
// Check if element is visible
_assert(_isVisible(_heading1("heading1_id")));
_assertEqual("heading1 text", _getText(_heading1("heading1_id")));

//visible text
_heading2("heading2 text")
//visible text with regular expression
_heading2("/ing2 te/")
//visible text with regular expression
_heading2("/head.*text/")
//id
_heading2("heading2_id")
//index
_heading2(5)
//css class with index
_heading2("shaded bigfont[1]")
//css class with regular expression and index
_heading2("/bigfont/[1]")
//multiple attributes as JSON
_heading2({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_heading2({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_heading2("heading2 text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_heading2(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_heading2("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_heading2("heading2 text"));
_click(_heading2("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_heading2("heading2_id"));
// Check if element is visible
_assert(_isVisible(_heading2("heading2_id")));
_assertEqual("heading2 text", _getText(_heading2("heading2_id")));

//visible text
_heading3("heading3 text")
//visible text with regular expression
_heading3("/ing3 te/")
//visible text with regular expression
_heading3("/head.*text/")
//id
_heading3("heading3_id")
//index
_heading3(5)
//css class with index
_heading3("shaded bigfont[1]")
//css class with regular expression and index
_heading3("/bigfont/[1]")
//multiple attributes as JSON
_heading3({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_heading3({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_heading3("heading3 text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_heading3(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_heading3("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_heading3("heading3 text"));
_click(_heading3("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_heading3("heading3_id"));
// Check if element is visible
_assert(_isVisible(_heading3("heading3_id")));
_assertEqual("heading3 text", _getText(_heading3("heading3_id")));

//visible text
_heading4("heading4 text")
//visible text with regular expression
_heading4("/ing4 te/")
//visible text with regular expression
_heading4("/head.*text/")
//id
_heading4("heading4_id")
//index
_heading4(5)
//css class with index
_heading4("shaded bigfont[1]")
//css class with regular expression and index
_heading4("/bigfont/[1]")
//multiple attributes as JSON
_heading4({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_heading4({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_heading4("heading4 text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_heading4(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_heading4("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_heading4("heading4 text"));
_click(_heading4("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_heading4("heading4_id"));
// Check if element is visible
_assert(_isVisible(_heading4("heading4_id")));
_assertEqual("heading4 text", _getText(_heading4("heading4_id")));

//visible text
_heading5("heading5 text")
//visible text with regular expression
_heading5("/ing5 te/")
//visible text with regular expression
_heading5("/head.*text/")
//id
_heading5("heading5_id")
//index
_heading5(5)
//css class with index
_heading5("shaded bigfont[1]")
//css class with regular expression and index
_heading5("/bigfont/[1]")
//multiple attributes as JSON
_heading5({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_heading5({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_heading5("heading5 text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_heading5(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_heading5("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_heading5("heading5 text"));
_click(_heading5("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_heading5("heading5_id"));
// Check if element is visible
_assert(_isVisible(_heading5("heading5_id")));
_assertEqual("heading5 text", _getText(_heading5("heading5_id")));

//visible text
_heading6("heading6 text")
//visible text with regular expression
_heading6("/ing6 te/")
//visible text with regular expression
_heading6("/head.*text/")
//id
_heading6("heading6_id")
//index
_heading6(5)
//css class with index
_heading6("shaded bigfont[1]")
//css class with regular expression and index
_heading6("/bigfont/[1]")
//multiple attributes as JSON
_heading6({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_heading6({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_heading6("heading6 text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_heading6(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_heading6("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_heading6("heading6 text"));
_click(_heading6("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_heading6("heading6_id"));
// Check if element is visible
_assert(_isVisible(_heading6("heading6_id")));
_assertEqual("heading6 text", _getText(_heading6("heading6_id")));
//id
_area("area_id")
//title|alt
_area("brief description")
//href
_area("http://a.example.com/")
//index
_area(5)
//css class with index
_area("shaded bigfont[1]")
//css class with regular expression and index
_area("/bigfont/[1]")
//multiple attributes as JSON
_area({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_area({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_area("area_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_area(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_area("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_area("area_id"));
_click(_area("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_area("area_id"));
// Check if element is visible
_assert(_isVisible(_area("area_id")));

//name
_map("map_name")
//id
_map("map_id")
//index
_map(5)
//css class with index
_map("shaded bigfont[1]")
//css class with regular expression and index
_map("/bigfont/[1]")
//multiple attributes as JSON
_map({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_map({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_map("map_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_map(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_map("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_map("map_name"));
_click(_map("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_map("map_id"));
// Check if element is visible
_assert(_isVisible(_map("map_id")));

//id
_paragraph("paragraph_id")
//visible text
_paragraph("paragraph text")
//visible text with regular expression
_paragraph("/graph te/")
//visible text with regular expression
_paragraph("/para.*text/")
//index
_paragraph(5)
//css class with index
_paragraph("shaded bigfont[1]")
//css class with regular expression and index
_paragraph("/bigfont/[1]")
//multiple attributes as JSON
_paragraph({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_paragraph({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_paragraph("paragraph_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_paragraph(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_paragraph("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_paragraph("paragraph_id"));
_click(_paragraph("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_paragraph("paragraph_id"));
// Check if element is visible
_assert(_isVisible(_paragraph("paragraph_id")));
_assertEqual("paragraph text", _getText(_paragraph("paragraph_id")));

//visible text
_italic("italic text")
//visible text with regular expression
_italic("/lic te/")
//visible text with regular expression
_italic("/ita.*text/")
//id
_italic("italic_id")
//index
_italic(5)
//css class with index
_italic("shaded bigfont[1]")
//css class with regular expression and index
_italic("/bigfont/[1]")
//multiple attributes as JSON
_italic({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_italic({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_italic("italic text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_italic(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_italic("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_italic("italic text"));
_click(_italic("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_italic("italic_id"));
// Check if element is visible
_assert(_isVisible(_italic("italic_id")));
_assertEqual("italic text", _getText(_italic("italic_id")));

//visible text
_emphasis("emphasis text")
//visible text with regular expression
_emphasis("/asis te/")
//visible text with regular expression
_emphasis("/emph.*text/")
//id
_emphasis("emphasis_id")
//index
_emphasis(5)
//css class with index
_emphasis("shaded bigfont[1]")
//css class with regular expression and index
_emphasis("/bigfont/[1]")
//multiple attributes as JSON
_emphasis({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_emphasis({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_emphasis("emphasis text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_emphasis(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_emphasis("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_emphasis("emphasis text"));
_click(_emphasis("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_emphasis("emphasis_id"));
// Check if element is visible
_assert(_isVisible(_emphasis("emphasis_id")));
_assertEqual("emphasis text", _getText(_emphasis("emphasis_id")));

//visible text
_bold("bold text")
//visible text with regular expression
_bold("/ld te/")
//visible text with regular expression
_bold("/bo.*text/")
//id
_bold("bold_id")
//index
_bold(5)
//css class with index
_bold("shaded bigfont[1]")
//css class with regular expression and index
_bold("/bigfont/[1]")
//multiple attributes as JSON
_bold({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_bold({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_bold("bold text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_bold(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_bold("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_bold("bold text"));
_click(_bold("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_bold("bold_id"));
// Check if element is visible
_assert(_isVisible(_bold("bold_id")));
_assertEqual("bold text", _getText(_bold("bold_id")));

//visible text
_strong("strong text")
//visible text with regular expression
_strong("/ong te/")
//visible text with regular expression
_strong("/str.*text/")
//id
_strong("strong_id")
//index
_strong(5)
//css class with index
_strong("shaded bigfont[1]")
//css class with regular expression and index
_strong("/bigfont/[1]")
//multiple attributes as JSON
_strong({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_strong({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_strong("strong text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_strong(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_strong("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_strong("strong text"));
_click(_strong("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_strong("strong_id"));
// Check if element is visible
_assert(_isVisible(_strong("strong_id")));
_assertEqual("strong text", _getText(_strong("strong_id")));

//visible text
_preformatted("preformatted text")
//visible text with regular expression
_preformatted("/matted te/")
//visible text with regular expression
_preformatted("/prefor.*text/")
//id
_preformatted("preformatted_id")
//index
_preformatted(5)
//css class with index
_preformatted("shaded bigfont[1]")
//css class with regular expression and index
_preformatted("/bigfont/[1]")
//multiple attributes as JSON
_preformatted({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_preformatted({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_preformatted("preformatted text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_preformatted(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_preformatted("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_preformatted("preformatted text"));
_click(_preformatted("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_preformatted("preformatted_id"));
// Check if element is visible
_assert(_isVisible(_preformatted("preformatted_id")));
_assertEqual("preformatted text", _getText(_preformatted("preformatted_id")));

//visible text
_code("code text")
//visible text with regular expression
_code("/de te/")
//visible text with regular expression
_code("/co.*text/")
//id
_code("code_id")
//index
_code(5)
//css class with index
_code("shaded bigfont[1]")
//css class with regular expression and index
_code("/bigfont/[1]")
//multiple attributes as JSON
_code({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_code({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_code("code text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_code(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_code("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_code("code text"));
_click(_code("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_code("code_id"));
// Check if element is visible
_assert(_isVisible(_code("code_id")));
_assertEqual("code text", _getText(_code("code_id")));

//visible text
_blockquote("blockquote text")
//visible text with regular expression
_blockquote("/quote te/")
//visible text with regular expression
_blockquote("/block.*text/")
//id
_blockquote("blockquote_id")
//index
_blockquote(5)
//css class with index
_blockquote("shaded bigfont[1]")
//css class with regular expression and index
_blockquote("/bigfont/[1]")
//multiple attributes as JSON
_blockquote({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_blockquote({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_blockquote("blockquote text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_blockquote(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_blockquote("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_blockquote("blockquote text"));
_click(_blockquote("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_blockquote("blockquote_id"));
// Check if element is visible
_assert(_isVisible(_blockquote("blockquote_id")));
_assertEqual("blockquote text", _getText(_blockquote("blockquote_id")));

//visible text
_canvas("canvas text")
//visible text with regular expression
_canvas("/vas te/")
//visible text with regular expression
_canvas("/can.*text/")
//id
_canvas("canvas_id")
//index
_canvas(5)
//css class with index
_canvas("shaded bigfont[1]")
//css class with regular expression and index
_canvas("/bigfont/[1]")
//multiple attributes as JSON
_canvas({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_canvas({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_canvas("canvas text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_canvas(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_canvas("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_canvas("canvas text"));
_click(_canvas("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_canvas("canvas_id"));
// Check if element is visible
_assert(_isVisible(_canvas("canvas_id")));
_assertEqual("canvas text", _getText(_canvas("canvas_id")));

//visible text
_abbr("abbr text")
//visible text with regular expression
_abbr("/br te/")
//visible text with regular expression
_abbr("/ab.*text/")
//id
_abbr("abbr_id")
//index
_abbr(5)
//css class with index
_abbr("shaded bigfont[1]")
//css class with regular expression and index
_abbr("/bigfont/[1]")
//multiple attributes as JSON
_abbr({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_abbr({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_abbr("abbr text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_abbr(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_abbr("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_abbr("abbr text"));
_click(_abbr("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_abbr("abbr_id"));
// Check if element is visible
_assert(_isVisible(_abbr("abbr_id")));
_assertEqual("abbr text", _getText(_abbr("abbr_id")));

//id
_hr("hr_id")
//index
_hr(5)
//css class with index
_hr("shaded bigfont[1]")
//css class with regular expression and index
_hr("/bigfont/[1]")
//multiple attributes as JSON
_hr({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_hr({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_hr("hr_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_hr(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_hr("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_hr("hr_id"));
_click(_hr("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_hr("hr_id"));
// Check if element is visible
_assert(_isVisible(_hr("hr_id")));

//id
_iframe("iframe_id")
//name
_iframe("iframe_name")
//index
_iframe(5)
//css class with index
_iframe("shaded bigfont[1]")
//css class with regular expression and index
_iframe("/bigfont/[1]")
//multiple attributes as JSON
_iframe({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_iframe({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_iframe("iframe_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_iframe(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_iframe("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_iframe("iframe_id"));
_click(_iframe("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_iframe("iframe_id"));
// Check if element is visible
_assert(_isVisible(_iframe("iframe_id")));
//id
_frame("frame_id")
//name
_frame("frame_name")
//index
_frame(5)
//css class with index
_frame("shaded bigfont[1]")
//css class with regular expression and index
_frame("/bigfont/[1]")
//multiple attributes as JSON
_frame({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_frame({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_frame("frame_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_frame(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_frame("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_frame("frame_id"));
_click(_frame("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_frame("frame_id"));
// Check if element is visible
_assert(_isVisible(_frame("frame_id")));

//id
_object("object_id")
//name
_object("object_name")
//css class with index
_object("shaded bigfont[1]")
//css class with regular expression and index
_object("/bigfont/[1]")
//multiple attributes as JSON
_object({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_object({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_object("object_id", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_object(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_object("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_object("object_id"));
_click(_object("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_object("object_id"));
// Check if element is visible
_assert(_isVisible(_object("object_id")));

//name
_embed("embed_name")
//id
_embed("embed_id")
//css class with index
_embed("shaded bigfont[1]")
//css class with regular expression and index
_embed("/bigfont/[1]")
//multiple attributes as JSON
_embed({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_embed({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_embed("embed_name", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_embed(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_embed("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_embed("embed_name"));
_click(_embed("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_embed("embed_id"));
// Check if element is visible
_assert(_isVisible(_embed("embed_id")));

//visible text
_dList("dList text")
//visible text with regular expression
_dList("/ist te/")
//visible text with regular expression
_dList("/dL.*text/")
//id
_dList("dList_id")
//index
_dList(5)
//css class with index
_dList("shaded bigfont[1]")
//css class with regular expression and index
_dList("/bigfont/[1]")
//multiple attributes as JSON
_dList({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_dList({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_dList("dList text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_dList(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_dList("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_dList("dList text"));
_click(_dList("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_dList("dList_id"));
// Check if element is visible
_assert(_isVisible(_dList("dList_id")));
_assertEqual("dList text", _getText(_dList("dList_id")));

//visible text
_dTerm("dTerm text")
//visible text with regular expression
_dTerm("/erm te/")
//visible text with regular expression
_dTerm("/dT.*text/")
//id
_dTerm("dTerm_id")
//index
_dTerm(5)
//css class with index
_dTerm("shaded bigfont[1]")
//css class with regular expression and index
_dTerm("/bigfont/[1]")
//multiple attributes as JSON
_dTerm({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_dTerm({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_dTerm("dTerm text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_dTerm(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_dTerm("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_dTerm("dTerm text"));
_click(_dTerm("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_dTerm("dTerm_id"));
// Check if element is visible
_assert(_isVisible(_dTerm("dTerm_id")));
_assertEqual("dTerm text", _getText(_dTerm("dTerm_id")));

//visible text
_dDesc("dDesc text")
//visible text with regular expression
_dDesc("/esc te/")
//visible text with regular expression
_dDesc("/dD.*text/")
//id
_dDesc("dDesc_id")
//index
_dDesc(5)
//css class with index
_dDesc("shaded bigfont[1]")
//css class with regular expression and index
_dDesc("/bigfont/[1]")
//multiple attributes as JSON
_dDesc({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_dDesc({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_dDesc("dDesc text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_dDesc(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_dDesc("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_dDesc("dDesc text"));
_click(_dDesc("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_dDesc("dDesc_id"));
// Check if element is visible
_assert(_isVisible(_dDesc("dDesc_id")));
_assertEqual("dDesc text", _getText(_dDesc("dDesc_id")));

//visible text
_font("font text")
//visible text with regular expression
_font("/nt te/")
//visible text with regular expression
_font("/fo.*text/")
//css class with index
_font("shaded bigfont[1]")
//css class with regular expression and index
_font("/bigfont/[1]")
//multiple attributes as JSON
_font({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_font({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_font("font text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_font(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_font("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))

// Check if element exists
_assertExists(_font("font_id"));
// Check if element is visible
_assert(_isVisible(_font("font_id")));

//visible text
_svg_rect("svg_rect text")
//visible text with regular expression
_svg_rect("/rect te/")
//visible text with regular expression
_svg_rect("/svg_.*text/")
//id
_svg_rect("svg_rect_id")
//index
_svg_rect(5)
//css class with index
_svg_rect("shaded bigfont[1]")
//css class with regular expression and index
_svg_rect("/bigfont/[1]")
//multiple attributes as JSON
_svg_rect({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_svg_rect({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_svg_rect("svg_rect text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_svg_rect(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_svg_rect("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_svg_rect("svg_rect text"));
_click(_svg_rect("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_svg_rect("svg_rect_id"));
// Check if element is visible
_assert(_isVisible(_svg_rect("svg_rect_id")));
_assertEqual("svg_rect text", _getText(_svg_rect("svg_rect_id")));

//visible text
_svg_tspan("svg_tspan text")
//visible text with regular expression
_svg_tspan("/tspan te/")
//visible text with regular expression
_svg_tspan("/svg_.*text/")
//id
_svg_tspan("svg_tspan_id")
//index
_svg_tspan(5)
//css class with index
_svg_tspan("shaded bigfont[1]")
//css class with regular expression and index
_svg_tspan("/bigfont/[1]")
//multiple attributes as JSON
_svg_tspan({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_svg_tspan({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_svg_tspan("svg_tspan text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_svg_tspan(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_svg_tspan("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_svg_tspan("svg_tspan text"));
_click(_svg_tspan("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_svg_tspan("svg_tspan_id"));
// Check if element is visible
_assert(_isVisible(_svg_tspan("svg_tspan_id")));
_assertEqual("svg_tspan text", _getText(_svg_tspan("svg_tspan_id")));

//visible text
_svg_circle("svg_circle text")
//visible text with regular expression
_svg_circle("/ircle te/")
//visible text with regular expression
_svg_circle("/svg_c.*text/")
//id
_svg_circle("svg_circle_id")
//index
_svg_circle(5)
//css class with index
_svg_circle("shaded bigfont[1]")
//css class with regular expression and index
_svg_circle("/bigfont/[1]")
//multiple attributes as JSON
_svg_circle({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_svg_circle({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_svg_circle("svg_circle text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_svg_circle(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_svg_circle("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_svg_circle("svg_circle text"));
_click(_svg_circle("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_svg_circle("svg_circle_id"));
// Check if element is visible
_assert(_isVisible(_svg_circle("svg_circle_id")));
_assertEqual("svg_circle text", _getText(_svg_circle("svg_circle_id")));

//visible text
_svg_ellipse("svg_ellipse text")
//visible text with regular expression
_svg_ellipse("/llipse te/")
//visible text with regular expression
_svg_ellipse("/svg_e.*text/")
//id
_svg_ellipse("svg_ellipse_id")
//index
_svg_ellipse(5)
//css class with index
_svg_ellipse("shaded bigfont[1]")
//css class with regular expression and index
_svg_ellipse("/bigfont/[1]")
//multiple attributes as JSON
_svg_ellipse({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_svg_ellipse({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_svg_ellipse("svg_ellipse text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_svg_ellipse(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_svg_ellipse("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_svg_ellipse("svg_ellipse text"));
_click(_svg_ellipse("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_svg_ellipse("svg_ellipse_id"));
// Check if element is visible
_assert(_isVisible(_svg_ellipse("svg_ellipse_id")));
_assertEqual("svg_ellipse text", _getText(_svg_ellipse("svg_ellipse_id")));

//visible text
_svg_line("svg_line text")
//visible text with regular expression
_svg_line("/line te/")
//visible text with regular expression
_svg_line("/svg_.*text/")
//id
_svg_line("svg_line_id")
//index
_svg_line(5)
//css class with index
_svg_line("shaded bigfont[1]")
//css class with regular expression and index
_svg_line("/bigfont/[1]")
//multiple attributes as JSON
_svg_line({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_svg_line({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_svg_line("svg_line text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_svg_line(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_svg_line("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_svg_line("svg_line text"));
_click(_svg_line("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_svg_line("svg_line_id"));
// Check if element is visible
_assert(_isVisible(_svg_line("svg_line_id")));
_assertEqual("svg_line text", _getText(_svg_line("svg_line_id")));

//visible text
_svg_polygon("svg_polygon text")
//visible text with regular expression
_svg_polygon("/olygon te/")
//visible text with regular expression
_svg_polygon("/svg_p.*text/")
//id
_svg_polygon("svg_polygon_id")
//index
_svg_polygon(5)
//css class with index
_svg_polygon("shaded bigfont[1]")
//css class with regular expression and index
_svg_polygon("/bigfont/[1]")
//multiple attributes as JSON
_svg_polygon({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_svg_polygon({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_svg_polygon("svg_polygon text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_svg_polygon(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_svg_polygon("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_svg_polygon("svg_polygon text"));
_click(_svg_polygon("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_svg_polygon("svg_polygon_id"));
// Check if element is visible
_assert(_isVisible(_svg_polygon("svg_polygon_id")));
_assertEqual("svg_polygon text", _getText(_svg_polygon("svg_polygon_id")));

//visible text
_svg_polyline("svg_polyline text")
//visible text with regular expression
_svg_polyline("/lyline te/")
//visible text with regular expression
_svg_polyline("/svg_po.*text/")
//id
_svg_polyline("svg_polyline_id")
//index
_svg_polyline(5)
//css class with index
_svg_polyline("shaded bigfont[1]")
//css class with regular expression and index
_svg_polyline("/bigfont/[1]")
//multiple attributes as JSON
_svg_polyline({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_svg_polyline({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_svg_polyline("svg_polyline text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_svg_polyline(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_svg_polyline("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_svg_polyline("svg_polyline text"));
_click(_svg_polyline("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_svg_polyline("svg_polyline_id"));
// Check if element is visible
_assert(_isVisible(_svg_polyline("svg_polyline_id")));
_assertEqual("svg_polyline text", _getText(_svg_polyline("svg_polyline_id")));

//visible text
_svg_path("svg_path text")
//visible text with regular expression
_svg_path("/path te/")
//visible text with regular expression
_svg_path("/svg_.*text/")
//id
_svg_path("svg_path_id")
//index
_svg_path(5)
//css class with index
_svg_path("shaded bigfont[1]")
//css class with regular expression and index
_svg_path("/bigfont/[1]")
//multiple attributes as JSON
_svg_path({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_svg_path({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_svg_path("svg_path text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_svg_path(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_svg_path("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_svg_path("svg_path text"));
_click(_svg_path("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_svg_path("svg_path_id"));
// Check if element is visible
_assert(_isVisible(_svg_path("svg_path_id")));
_assertEqual("svg_path text", _getText(_svg_path("svg_path_id")));

//visible text
_svg_text("svg_text text")
//visible text with regular expression
_svg_text("/text te/")
//visible text with regular expression
_svg_text("/svg_.*text/")
//id
_svg_text("svg_text_id")
//index
_svg_text(5)
//css class with index
_svg_text("shaded bigfont[1]")
//css class with regular expression and index
_svg_text("/bigfont/[1]")
//multiple attributes as JSON
_svg_text({className: "shaded bigfont", sahiIndex: 1})
//multiple attributes as JSON including regular expression
_svg_text({className: "/shaded .*font/", sahiIndex: 1})
// Use sahiIndex for index, className for class and sahiText for visible text attributes.
// with _in
_svg_text("svg_text text", _in(_div("Container")))

// index with 2 relational APIs, _rightOf and _under
_svg_text(0, _rightOf(_span("Name")), _under(_cell("Action")))

// with regular expression and relations
_svg_text("/bigfont/", _rightOf(_span("Name")), _under(_cell("Action")))
_click(_svg_text("svg_text text"));
_click(_svg_text("/bigfont/[1]", _rightOf(_span("Name"))));
// Check if element exists
_assertExists(_svg_text("svg_text_id"));
// Check if element is visible
_assert(_isVisible(_svg_text("svg_text_id")));
_assertEqual("svg_text text", _getText(_svg_text("svg_text_id")));


/** RELATION APIS **/


_link(0, _near(_cell("User Two")))
_link("delete", _near(_cell("User Two")))
_startLookInside(_cell("del2"));
_link(0); //points to the 0th link in cell with id "del2"
_link("delete"); //points to the link with text "delete" within cell with id "del2"
_stopLookInside();
_stopLookInside()
_startLookInside(_cell("del2"));
_link(0);
_link("delete");
_stopLookInside(); //reset the _startLookInside relation marker.
_link(0, _rightOf(_cell("User Two")))
_link("delete", _rightOf(_cell("User Two")))
_link("delete", _rightOf(_cell("User Two"), 25))
_link("delete", _rightOf(_cell("User Two"), [25,25]))
_link(0, _leftOf(_cell("ID 2")))
_link("delete", _leftOf(_cell("ID 2")))
_link("delete", _leftOf(_cell("ID 2"), 25))
_link("delete", _leftOf(_cell("ID 2"), [25,25]))
_link(0, _leftOrRightOf(_cell("ID 2")))
_link("delete", _leftOrRightOf(_cell("ID 2")))
_link("delete", _leftOrRightOf(_cell("ID 2"), 25))
_link("delete", _leftOrRightOf(_cell("ID 2"), [25,25]))
_link(0, _under(_cell("Action")))
_link("delete", _under(_cell("Action")))
_link("delete", _under(_cell("Action")), _rightOf(_cell("User Two")))
_cell(0, _above(_cell("User Two"))) // gives User One
_cell(0, _aboveOrUnder(_cell("User Two"))) // gives User One
_parentNode(_link("aLink"), "DIV", 1) // points to div1
_parentNode(_link("aLink"), "DIV", 2) // points to div2
_parentCell(_link("aElement")) // points to parent cell
_parentRow(_link("aElement")) // points to parent row
_parentTable(_link("aElement")) // points to parent table

/** ACTION APIS **/

_click(_xy(_button("id"), 10, 20))
_click(_xy(_button("id"), -5, -10))
_click(_button("Click Me"));
_click(_button("Click Me"), "CTRL"); // clicks with CTRL key pressed
_click(_button("Click Me"), "CTRL|SHIFT"); // clicks with CTRL and SHIFT keys pressed

// With _xy
_click(_xy(_button("Click Me"),4,5)); // Click at coordinates 4,5 pixels inside the button
_doubleClick(_button("DblClick Me"));
_doubleClick(_button("DblClick Me"), "CTRL"); // double clicks with CTRL key pressed
_doubleClick(_button("DblClick Me"), "CTRL|SHIFT"); // double clicks with CTRL and SHIFT keys pressed

// With _xy
_doubleClick(_xy(_button("DblClick Me"),4,5)); // double click at coordinates 4,5 pixels inside the button
_rightClick(_button("Right Click Me"));
_rightClick(_button("Right Click Me"), "CTRL"); // right clicks with CTRL key pressed
_rightClick(_button("Right Click Me"), "CTRL|SHIFT"); // right clicks with CTRL and SHIFT keys pressed

// With _xy
_rightClick(_xy(_button("Right Click Me"),4,5)); // right click at coordinates 4,5 pixels inside the button
_mouseDown(_button("Mouse Down"));
_mouseDown(_button("Mouse Down"), true); //mouseDown for a left-hand mouse
_mouseDown(_button("Mouse Down"), false, "CTRL"); //mouseDown with CTRL key pressed
_mouseDown(_button("Mouse Down"), false, "CTRL|SHIFT"); //mouseDown with CTRL and SHIFT keys pressed
_mouseUp(_button("Mouse up"));
_mouseUp(_button("Mouse up"), true); // mouseup for a left-hand mouse
_mouseUp(_button("Mouse up"), false, "CTRL"); // mouseup with CTRL key pressed
_mouseUp(_button("Mouse up"), false, "CTRL|SHIFT"); // mouseup with CTRL and SHIFT keys pressed
_mouseOver(_button("Click Me"));
_mouseOver(_button("Click Me"), "CTRL"); // mouseOver with CTRL key pressed
_mouseOver(_button("Click Me"), "CTRL|SHIFT"); // mouseOver with CTRL and SHIFT keys pressed
_setSelected(_select("Age"), "28"); // Selects the option visible as "28" in a select box
_setSelected(_select("color"), 1);  // Selects the second option in a select box
_setSelected(_select("color"), "red");         // Selects red in a multiselect box
_setSelected(_select("color"), "blue", true);  // Selects blue also in the multiselect box
_setSelected(_select("color"), ["red", "blue"]); // Unselects previous and selects red and blue in a multiselect box
_setSelected(_select("color"), [1,2,3]); // Unselects previous and selects the second, third and fourth options in a multiselect box
_setSelected(_select("color"), ["green", "yellow"], true); // Keeps previous options selected and selects "green" and "yellow" also
// Drag the item and drop it in the shopping cart
_dragDrop(_image("item"), _byId("ShoppingCart"));
// Drag the item and drop it at coordinates 20,40 pixels inside shopping cart
_dragDrop(_image("item"), _xy(_byId("ShoppingCart"), 20, 40));
// If _image("item") is located at coordinates (50, 150)

// Drag the item and drop it at the coordinate (100, 300)
// The end result is that the element's coordinates will be at (100, 300)
_dragDropXY(_image("item"),  100, 300);

// Drag the item and drop it at the coordinate (50+100, 150+300)
// The end result is that the element's coordinates will be at (150, 450)
_dragDropXY(_image("item"),  100, 300, true);
// populates textbox identified as _textbox("user") with Ram
_setValue(_textbox("user"), "Ram");

_keyDown(document.body, 'a');
_keyDown(document.body, 98);
_keyDown(document.body, [13,13]);
_keyDown(document.body, 'a', "CTRL");

_keyUp(document.body, 'a');
_keyUp(document.body, 98);
_keyUp(document.body, [13,13]);
_keyUp(document.body, 'a', "CTRL");

_keyPress(document.body, 'a');
_keyPress(document.body, 98);
_keyPress(document.body, [13,13]);
_keyPress(document.body, 'a', "CTRL");

_type(_textbox("user"), "am");

_focus(_textbox("username"));

_removeFocus(_textbox("username"));

_blur(_textbox("username"));

// If the text was "abcdefghij"
_selectRange(_rte(1), 2, 4); // selects text cd
var $text = _getSelectionText(); // $text = "cd"

_selectRange(_rte(1), 2, 2); // places the cursor at 3rd position without any selection
//Given a sample string
//This bright red apple is sweeter than that dull red apple

_selectTextRange(_rte(1), "red apple"); // selects the first red apple
_selectTextRange(_rte(1), "red apple[1]"); // selects the second red apple
_selectTextRange(_rte(1), "/ap.le/[1]"); // selects the second apple
var $text = _getSelectionText(); // $text = "apple"
_selectTextRange(_rte(1), "/ap.le/[1]", "before"); // moves the cursor before the second apple, with no selection
_selectTextRange(_rte(1), "/ap.le/[1]", "after"); // moves the cursor after the second apple, with no selection
// If current page is not http://sahi.co.in/demo/
_navigateTo("http://sahi.co.in/demo/"); // Will navigate to this page.

// If current page is itself "http://sahi.co.in/demo/"
_navigateTo("http://sahi.co.in/demo/"); // will do nothing
_navigateTo("http://sahi.co.in/demo/", true); // Will force navigation to this page.

_selectWindow("popWin");
_navigateTo("http://sahi.co.in/demo/"); // loads in the popup window.
_call(top.location.reload()); // reload via Javascript
// or
_wait(1000); // Will stop execution for a second

// Wait till div by id "ajaxConfirm" is populated for max 5 seconds.
_wait(5000, _getText(_div("ajaxConfirm"))!="");

// Wait till button becomes visible
_wait(5000, _isVisible(_button("Confirm")));

// Wait till "Loading ..." message disappears
_wait(1000); // may take a second before that message appears.
_wait(5000, !_isVisible(_div("Loading ..."))); // wait max 5 seconds for it to disappear.
_focusWindow()
_typeNative($text)
_focus(_textbox("user"));
_focusWindow();
_typeNative("Ram");

_focusWindow();
_focusWindow()
_focusWindow(); // bring window into focus.
_takeScreenShot();

// For popup windows, use _selectWindow first
_selectWindow("popWin"); // target further statements at popWin window
_focusWindow(); // bring popup window into focus.
_takeScreenShot();
_windowAction("focus"); // focus window. Same as _focusWindw
_windowAction("maximize"); // mazimize window.
_windowAction("minimize"); // minimize window.
_windowAction("restore"); // restore window.
_windowAction("refresh"); // refresh window.
_windowAction("resize",500,300); // resize the window with the given width and height.

// maximizing a popup window
_selectWindow("popWin"); // first select the popWin window to target further steps on.
_windowAction("maximize");
_focusWindow
_clickNative(_button("b1"));
_focusWindow
_rightClickNative(_button("b1"));
_focusWindow
_doubleClickNative(_button("b1"));
_focusWindow
_clickNativeXY(100, 200);
_clickNativeXY(150,300, "ALT"); // ALT + click
_focusWindow
_mouseOverNative(_button("b1"));
_focusWindow
_dragDropNative(_div("draggable"), _div("droppable"));
_focusWindow
_dragDropNativeXY(100,50, 100,150);
_setFile(_file("id"), "C:\\abc\\efg.jpg");
_setFile(_file("id"), "C:\\abc\\efg.jpg", "formSubmit.jsp");
_setFile2
// _setFile2 implementation
// set the file
_setFile(_file("file"), "scripts/demo/uploadme.txt");
// Change the "type" attribute of file field
if (_isIE()){
    _call(_file("file").outerHTML = _file("file").outerHTML.replace(/type=['"]?file['"]?/, "type=text"));
}else{
    _call(_file("file").type = "text");
}
// Set the value into the textbox
_setValue(_textbox("file"), "scripts/demo/uploadme.txt");
function setFileUpload($fileEl, $path) {
    _focusWindow();
    _wait(1000); // needed
    // focus on the element
    _focus($fileEl);
    // click "space" to bring up the browser dialog
    _wait(1000);
    // type the file path
    _typeNative($path);
    _wait(1000);
    // press enter
    _wait(1000);
}
// Then invoke it like this:
setFileUpload(_file("id"), "C:\\abc\\efg.jpg");
//or
setFileUpload(_file("id"), _resolvePath("uploadme.txt")); // resolves relative to this file
_lastDownloadedFileName()

_clearLastDownloadedFileName()
_assertNull(_lastDownloadedFileName()); // nothing so far
_click(_link("download")); // click on download link
// Wait for a while till _lastDownloadedFileName() becomes NOT null. This is when the download is complete.
// We wait for a maximum of 90 seconds or till _lastDownloadedFileName() becomes NOT null.
// If you find that your file is huge and takes much longer, run the following statement in a loop for 5 or 6 retries.
// Do NOT increase 90000 to more than 120000.
_wait(90000, _lastDownloadedFileName() != null);
// Assert the name of the downloaded file.
_assertEqual("setup.exe", _lastDownloadedFileName()); // check if downloaded

if (_lastDownloadedFileName() != null) {
    _saveDownloadedAs("c:/myownpath/setup.exe"); // save to another path
    _clearLastDownloadedFileName(); // clear the variable
    _assertNull(_lastDownloadedFileName()); // check to see if cleared.
}

_sendHTMLResponseAfterFileDownload(true);
_sendHTMLResponseAfterFileDownload(false);
_assertNull(_lastDownloadedFileName()); // nothing so far
_sendHTMLResponseAfterFileDownload(true);

_click(_link("Show PDF in new Window"));
_wait(90000, _lastDownloadedFileName() != null);
_assertEqual("test.pdf", _lastDownloadedFileName());

if (_lastDownloadedFileName() != null) {
    _saveDownloadedAs("c:/test.pdf");
    _clearLastDownloadedFileName(); // clear the variable
    _assertNull(_lastDownloadedFileName()); // check to see if cleared.
}
// Close the popup window
_selectWindow("/File Downloaded/");
_click(_link("Close Window"));

// Select back the main window
_selectWindow();

_sendHTMLResponseAfterFileDownload(false);
_addToSession("http://downloaddomain.com"); // Here the download url is http. Change downloaddomain.com to your domain.
_addToSession("https://downloaddomain.com"); // Here the download url is https. Change downloaddomain.com to your domain.
// Add new domain url to Sahi's playback session
_addToSession("http://downloads.mydomain.com");
// NOTE _addToSession comes before click
_click(_link("Download"));
// The rest of the code is same as above...
_closeWindow()
_popup("popWin")._closeWindow();
_closeBrowser()
_openBrowser()
// For example, a date field may bring up the calendar, but selecting the year,month etc. may be time consuming.
// For repeated flows, one may want to bypass this by directly setting the value of the field through javascript.
_call(_textbox("date").value = "25/02/1990");

// For example, a date field may bring up the calendar, but selecting the year,month etc. may be time consuming.
// For repeated flows, one may want to bypass this by directly setting the value of the field through javascript.
_eval("_textbox(\"date\").value = \"25/02/1990\"");