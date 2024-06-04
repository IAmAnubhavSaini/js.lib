class Conversions {
    static inches(value) {
        return {
            toCentiMeters() {
                return value * 2.54;
            },
            toFeet() {
                return value * 0.0834;
            }
        }
    }
    static miles(value) {
        return {
            toFeet() {
                return value * 5280;
            },
            toMeters() {
                return value * 1609.34;
            }
        }
    }
    static meters(value) {
        return {
            toInches() {
                return value * 39.3701;
            },
            toCentiMeters() {
                return value * 100;
            }
        }
    }
}

module.exports = Conversions;
