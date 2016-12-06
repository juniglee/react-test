import React from "react";
import ReactDOM from "react-dom";

import {RadioGroup, Radio} from 'react-radio-group';

var Months = [
    {"value": 1, "name": "January"},
    {"value": 2, "name": "February"},
    {"value": 3, "name": "March"},
    {"value": 4, "name": "April"},
    {"value": 5, "name": "May"},
    {"value": 6, "name": "June"},
    {"value": 7, "name": "July"},
    {"value": 8, "name": "August"},
    {"value": 9, "name": "September"},
    {"value": 10, "name": "October"},
    {"value": 11, "name": "November"},
    {"value": 12, "name": "December"}
];

function GetMonth(value) {
    var month;

    Months.forEach(function(item) {
        if (item.value == value) {
            month = item.name;
        }
    });

    return month;
}

function InitializeDatepicker() {
    var dateNow = new Date();
    var $datePickerDay = $("#fieldahkkjjdy");
    var $datePickerMonth = $("#fieldahkkjj");
    var $datePickerYear = $("#fieldahkkjjyr");

    $datePickerDay.children("option[value='" + dateNow.getDate() + "']").prop('selected', true);
    $datePickerMonth.children("option[value='" + (dateNow.getMonth() + 1) + "']").prop('selected', true);
    $datePickerYear.children("option[value='" + dateNow.getUTCFullYear() + "']").prop('selected', true);

    var $datePickerInput = $('<input/>', {
        'type': 'text',
        'class': 'cm-datepicker'
    })
    // don't include this in the constructor above
    // since it will invoke the 'autocomplete' plugin
    // on the input (when jQuery version >= 1.8)
    .attr('autocomplete', 'off')
    .insertAfter($datePickerYear);

    $datePickerInput.datePickerForSelects($datePickerDay, $datePickerMonth, $datePickerYear, {numberOfMonths: 1});
}

var Field = React.createClass({
    getInitialState: function() {
        return {
            value: this.props.value
        }
    },
    setValue: function(event) {
        this.setState({
            value: event.target.value
        });
    },
    render: function() {
        return (
            <div className="small-12 medium-6 column">
                {this.props.required ?
                    <label className="required" htmlFor={this.props.fieldId}>{this.props.labelName}</label> :
                    <label htmlFor={this.props.fieldId}>{this.props.labelName}</label>
                }
                {!this.props.editState ?
                    <p className="subscribeForm-values">{this.props.textValue}<input type="hidden" name={this.props.fieldName} value={this.props.textValue} /></p> :
                    <input id={this.props.fieldId} name={this.props.fieldName} type={this.props.type} placeholder={this.props.placeholder} required={this.props.required} value={this.state.value} onChange={this.setValue}/>
                }
            </div>
        );
    }
});

var Hero = React.createClass({
    render: function() {
        return (
            <section className="subscribeForm">
                <div className="Hero">
                    <div className="row">
                        <div className="small-12 medium-8 large-6 columns">
                            <div className="Hero-container">
                                <div className="Hero-container-inner">
                                    <ul className="BreadCrumb BreadCrumb--reverse">
                                        <li><a href="/">World Nomads</a></li>
                                    </ul>
                                    <h1 className="Hero-copy">{this.props.header}</h1>
                                    <h4 className="Hero-copy">{this.props.subHeader}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
});

var CountryPicker = React.createClass({
    getInitialState: function() {
        return {
            value: this.props.value
        }
    },
    setValue: function(event) {
        this.setState({
            value: event.target.value
        });
    },
    render: function() {
        var wrapperClasses;

        if (!this.props.display) {
            wrapperClasses = "small-12 medium-6 column hide";
        }
        else {
            wrapperClasses = "small-12 medium-6 column";
        }

        var countries = this.props.countries.map(function(country) {
            return React.createElement(
                'option',
                { value: country.data.value, key: country.data.country },
                country.data.country
            );
        });

        var countriesList =  React.createElement(
            'select',
            {id: this.props.fieldId, name: this.props.fieldName, required: this.props.required, value: this.state.value, onChange: this.setValue},
            countries
        );

        var destination;
        var countryValue = this.props.value;

        this.props.countries.forEach(function(item) {
            if (item.data.value == countryValue) {
                destination = item.data.country;
            }
        });

        return (
            <div className={wrapperClasses}>
                {this.props.required ?
                    <label className="required" htmlFor={this.props.fieldId}>{this.props.labelName}</label> :
                    <label htmlFor={this.props.fieldId}>{this.props.labelName}</label>
                }
                {!this.props.editState ?
                    <p className="subscribeForm-values">{destination}<input type="hidden" name={this.props.fieldName} value={this.props.value} /></p> :
                    countriesList
                }
            </div>
        );
    }
});

var DatePicker = React.createClass({
    render: function() {
        var wrapperClasses;

        if (!this.props.display) {
            wrapperClasses = "small-12 medium-6 column hide"
        }
        else {
            wrapperClasses = "small-12 medium-6 column";
        }

        return (
            <div className={wrapperClasses}>
                <label htmlFor={this.props.fieldId}>{this.props.labelName}</label><br />
                <select id={this.props.fieldId + "dy"} name={this.props.fieldName + "-dy"}><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
                <select id={this.props.fieldId} name={this.props.fieldName + "-mn"}><option value=""></option><option value="1">Jan</option><option value="2">Feb</option><option value="3">Mar</option><option value="4">Apr</option><option value="5">May</option><option value="6">Jun</option><option value="7">Jul</option><option value="8">Aug</option><option value="9">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option></select>
                <select id={this.props.fieldId + "yr"} name={this.props.fieldName + "-yr"}><option value=""></option><option value="1901">1901</option><option value="1902">1902</option><option value="1903">1903</option><option value="1904">1904</option><option value="1905">1905</option><option value="1906">1906</option><option value="1907">1907</option><option value="1908">1908</option><option value="1909">1909</option><option value="1910">1910</option><option value="1911">1911</option><option value="1912">1912</option><option value="1913">1913</option><option value="1914">1914</option><option value="1915">1915</option><option value="1916">1916</option><option value="1917">1917</option><option value="1918">1918</option><option value="1919">1919</option><option value="1920">1920</option><option value="1921">1921</option><option value="1922">1922</option><option value="1923">1923</option><option value="1924">1924</option><option value="1925">1925</option><option value="1926">1926</option><option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option><option value="2025">2025</option><option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option><option value="2029">2029</option><option value="2030">2030</option><option value="2031">2031</option><option value="2032">2032</option><option value="2033">2033</option><option value="2034">2034</option><option value="2035">2035</option><option value="2036">2036</option><option value="2037">2037</option><option value="2038">2038</option><option value="2039">2039</option><option value="2040">2040</option><option value="2041">2041</option><option value="2042">2042</option><option value="2043">2043</option><option value="2044">2044</option><option value="2045">2045</option><option value="2046">2046</option><option value="2047">2047</option><option value="2048">2048</option><option value="2049">2049</option><option value="2050">2050</option><option value="2051">2051</option><option value="2052">2052</option><option value="2053">2053</option><option value="2054">2054</option><option value="2055">2055</option><option value="2056">2056</option><option value="2057">2057</option><option value="2058">2058</option><option value="2059">2059</option><option value="2060">2060</option><option value="2061">2061</option><option value="2062">2062</option><option value="2063">2063</option><option value="2064">2064</option><option value="2065">2065</option><option value="2066">2066</option><option value="2067">2067</option><option value="2068">2068</option><option value="2069">2069</option><option value="2070">2070</option><option value="2071">2071</option><option value="2072">2072</option><option value="2073">2073</option><option value="2074">2074</option><option value="2075">2075</option><option value="2076">2076</option><option value="2077">2077</option><option value="2078">2078</option></select>
            </div>
        );
    }
});

var FutureTrips = React.createClass({
    getInitialState: function() {
        return {
            hasFutureTrip: true
        }
    },
    renderFutureTrips: function() {
        this.setState({
            hasFutureTrip: $('#fieldzjiyhl-y').is(':checked')
        });
    },
    render: function() {
        return (
            <div>
                <RadioGroup name="cm-f-zjiyhl" onChange={this.renderFutureTrips}>
                <div className="small-12 column">
                    <span className="subscribeForm-form-question">Do you have any future trips?</span>
                    <div className="subscribeForm-form-checkbox Radio">
                        <Radio value="1087823" id="fieldzjiyhl-y" />
                        <label htmlFor="fieldzjiyhl-y">
                            <span className="Radio-button"></span>
                            Yes
                        </label>
                    </div>
                    <div className="subscribeForm-form-checkbox Radio">
                        <Radio value="1087824" id="fieldzjiyhl-n" />
                        <label htmlFor="fieldzjiyhl-n">
                            <span className="Radio-button"></span>
                            No
                        </label>
                    </div>
                </div>
                </RadioGroup>
                <CountryPicker labelName="Where?" fieldId="fieldahkkjt" fieldName="cm-fo-ahkkjt" display={this.state.hasFutureTrip} editState={this.props.editState} required={this.state.hasFutureTrip} countries={this.props.countries}/>
                <DatePicker labelName="When?" fieldId="fieldahkkjj" fieldName="cm-fd-ahkkjj" display={this.state.hasFutureTrip}/>
            </div>
        );
    }
});

var FutureTripsDisplay = React.createClass({
    render: function() {
        var classes = this.props.where ? "small-12 medium-6 column" : "small-12 medium-6 column end";

        return (
            <div>
                <div className={classes}>
                    <label>Future Trips</label>
                    {this.props.where ?
                        <p className="subscribeForm-values">{this.props.where}<input type="hidden" name="cm-fo-ahkkjt" value={this.props.where} /></p> :
                        <p className="subscribeForm-values">None</p>
                    }
                </div>
                {this.props.where && this.props.when ?
                    <div className="small-12 medium-6 column"><label>When?</label><p className="subscribeForm-values">{this.props.when}</p></div> : false
                }
            </div>
        );
    }
});

var SubscriptionOption = React.createClass({
    setSubscription: function(event) {
        var isChecked = this.props.subscriptionValues ? false : true;

        this.props.onChange(isChecked);
    },
    render: function() {
        return (
            <div className="small-12 column">
                <div className="subscribeForm-form-subscribe Checkbox">
                    <input type="checkbox" id={this.props.fieldId} name={this.props.fieldName} value="yes" checked={this.props.subscriptionValues} onChange={this.setSubscription} />
                    <label htmlFor={this.props.fieldId}>
                        <span className="Checkbox-button"></span>
                        {this.props.labelName}
                        <p className="Checkbox-description">{this.props.description}</p>
                    </label>
                </div>
            </div>
        );
    }
});

var SubmissionForm = React.createClass({
    getInitialState: function() {
        return {
            countries: [],
            heroHeader: 'Welcome Nomad!',
            heroSubHeader: 'Thanks for subscribing and joining our community of passionate travelers.',
            editState: true,
            subscriptionValues: [true, true, true],
            formValues:[
                {"name": "cm-f-ahkkjr", "value": ""},
                {"name": "cm-f-ahkkjy", "value": ""},
                {"name": "cm-vliuud-vliuud", "value": ""},
                {"name": "cm-fo-atudju", "value": ""},
                {"name": "ccm-f-zjiyhl", "value": ""},
                {"name": "cm-fo-ahkkjt", "value": ""},
                {"name": "cm-fd-ahkkjj-dy", "value": ""},
                {"name": "cm-fd-ahkkjj-mn", "value": ""},
                {"name": "cm-fd-ahkkjj-yr", "value": ""},
                {"name": "cm-f-ajkiur", "value": ""},
                {"name": "cm-f-ajkiuj", "value": ""},
                {"name": "cm-f-ajkiut", "value": ""}
            ]
        }
    },
    componentDidMount: function() {
        var _this = this;
        $.get('/js/country.json').then(function(data) {
            _this.setState({
                countries: data
            });
        });

        InitializeDatepicker();
        $('#fieldzjiyhl-y').prop('checked', true);
    },
    editForm: function(event) {
        event.preventDefault();
        var currentEditState = this.state.editState;

        this.setState({
            editState: currentEditState ? false : true
        });

        setTimeout(function() {
            InitializeDatepicker();
            $('#fieldzjiyhl-y').prop('checked', true);
        }, 150);
    },
    setSubscription: function(index, event) {
        var subscriptionValues = this.state.subscriptionValues;
        subscriptionValues[index] = this.state.subscriptionValues[index] ? false : true;

        this.setState({
            subscriptionValues: subscriptionValues
        });
    },
    selectAllSubscriptionOptions: function(event){
        event.preventDefault();
        this.setState({
            subscriptionValues: [true, true, true]
        });
    },
    removeAllSubscriptionOptions: function(event){
        event.preventDefault();
        this.setState({
            subscriptionValues: [false, false, false]
        });
    },
    render: function() {
        var formValues = {};

        this.state.formValues.forEach(function(x) {
            formValues[x.name] = x.value
        });

        var futureTripsDestination;

        if (formValues["cm-fo-ahkkjt"]) {
            this.state.countries.forEach(function(item) {
                if (item.data.value == formValues["cm-fo-ahkkjt"]) {
                    futureTripsDestination = item.data.country;
                }
            });
        }

        var futureTripsDate = formValues["cm-fd-ahkkjj-dy"] + ' ' + GetMonth(formValues["cm-fd-ahkkjj-mn"]) + ' ' + formValues["cm-fd-ahkkjj-yr"];

        return (
            <div>
                <Hero header={this.state.heroHeader} subHeader={this.state.heroSubHeader} />
                <section className="subscribeForm">
                    <form id="subForm" className="form" onSubmit={this.submit}>
                        <div className="row">
                            <div className="medium-offset-2 small-12 medium-8 column">
                                {this.state.editState ?
                                    <div className="subscribeForm-header panel reverse Pattern Pattern--monoDark"><h2>A little about you</h2></div> :
                                    <div className="subscribeForm-header panel reverse Pattern Pattern--monoDark"><h2>My details</h2><div className="subscribeForm-header-links"><a href="#" onClick={this.editForm}>Edit</a></div></div>
                                }
                            </div>
                            <div className="medium-offset-2 small-12 medium-8  column end">
                                <div className="subscribeForm-form">
                                    <Field labelName="First Name" fieldId="fieldahkkjr" fieldName="cm-f-ahkkjr" placeholder="Jon" required="true" type="text" textValue={formValues["cm-f-ahkkjr"]} editState={this.state.editState}/>
                                    <Field labelName="Last Name" fieldId="fieldahkkjy" fieldName="cm-f-ahkkjy" placeholder="Snow" required="true" type="text" textValue={formValues["cm-f-ahkkjy"]} editState={this.state.editState} />
                                    <Field labelName="Email" fieldId="fieldEmail" fieldName="cm-vliuud-vliuud" placeholder="jon.snow@winterfell.com" required="true" type="email" textValue={formValues["cm-vliuud-vliuud"]} editState={this.state.editState} />
                                    <CountryPicker labelName="Country of Residence" fieldId="fieldatudju" fieldName="cm-fo-atudju" required="true" display="true" value={formValues["cm-fo-atudju"]} editState={this.state.editState} countries={this.state.countries}/>
                                    {this.state.editState ?
                                        <FutureTrips editState={this.state.editState}  countries={this.state.countries} /> :
                                        <FutureTripsDisplay where={futureTripsDestination} when={futureTripsDate}  />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="medium-offset-2 small-12 medium-8 column">
                                <div className="subscribeForm-header panel reverse Pattern Pattern--monoDark">
                                    <h2>I want to receive:</h2>
                                    <div className="subscribeForm-header-links">
                                        <a href="#" onClick={this.selectAllSubscriptionOptions}>Select All</a> | <a href="#" onClick={this.removeAllSubscriptionOptions}>Select None</a>
                                    </div>
                                </div>
                            </div>
                            <div className="medium-offset-2 small-12 medium-8 column end">
                                <div className="subscribeForm-form js-formCheckboxList">
                                    <SubscriptionOption fieldId="fieldajkiur" fieldName="cm-f-ajkiur" labelName="Nomads News" description="Travel inspiration and information delivered twice a month" subscriptionValues={this.state.subscriptionValues[0]} onChange={this.setSubscription.bind(this, 0)} />
                                    <SubscriptionOption fieldId="fieldajkiuj" fieldName="cm-f-ajkiuj" labelName="World Nomads Offers" description="Our quarterly travel insurance deals, campaigns and partner offers" subscriptionValues={this.state.subscriptionValues[1]} onChange={this.setSubscription.bind(this, 1)} />
                                    <SubscriptionOption fieldId="fieldajkiut" fieldName="cm-f-ajkiut" labelName="Scholarship News" description="Travel scholarship updates and the latest opportunities to hone your travel photography, filmmaking and writing skills." subscriptionValues={this.state.subscriptionValues[2]} onChange={this.setSubscription.bind(this, 2)} />
                                    <div className="small-12 column subscribeForm-form-save">
                                        <button className="button arrow primary">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        );
    },
    submit: function(event) {
        event.preventDefault();
        var formData = ($('#subForm').serializeArray());

        this.setState({
            editState: false,
            formValues: formData
        });
    }
});

ReactDOM.render(
    <SubmissionForm />,
    document.querySelector('#submissionForm')
);