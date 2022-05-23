class Temperature {
    celsius;
    constructor(c) {
        this.celsius = c;
    }
    setCelsius(c) {
        this.celsius = c;
    }
    convertToFahrenheit() {
        return 9/5*this.celsius+32;
    }
    convertToKelvins() {
        return this.celsius+273.15;
    }
}