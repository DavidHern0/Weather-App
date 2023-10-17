import { useState } from "react"
import { MODES } from "../constants"
import { Button } from "react-bootstrap";

function LocationResult({ location, mode, handleChangeMode }) {
    return (
        <>
            {location && (
                <div className="d-flex flex-column align-items-center">
                    <Button onClick={handleChangeMode} variant="light" className="my-4 w-75">
                        {mode === MODES.Celsius ? "Change to " + MODES.Fahrenheit : "Change to " + MODES.Celsius}
                    </Button>
                    <section>
                        <h3>
                            {location.name}, {location.region}, {location.country}
                        </h3>
                    </section>
                </div>
            )}
        </>
    )
}

function WeatherResult({ weatherData, mode }) {
    return (
        <>{weatherData && (
            <section>
                <p><b>Temperature:</b> {mode === MODES.Celsius ? weatherData.temp_c : weatherData.temp_f} {mode}</p>
                <p><b>Thermal sensation:</b> {mode === MODES.Celsius ? weatherData.feelslike_c : weatherData.feelslike_f} {mode}</p>
                <img src={weatherData.condition.icon} alt={weatherData.condition.text} title={weatherData.condition.text} />
            </section>
        )}
        </>
    )
}

export function Weather({ location, weatherData }) {
    const [mode, setMode] = useState(MODES.Celsius)

    const handleChangeMode = () => {
        if (mode === MODES.Celsius) {
            setMode(MODES.Fahrenheit)
        } else {
            setMode(MODES.Celsius)
        }
    }

    return (
        <>
            <LocationResult location={location} mode={mode} handleChangeMode={handleChangeMode} />
            <WeatherResult weatherData={weatherData} mode={mode} />
        </>
    )
}