import { useState } from "react"
import { MODES } from "../constants"

function LocationResult({ location, mode, handleChangeMode }) {
    return (
        <>
            {location && (
                <>
                    <button onClick={handleChangeMode}>
                        {mode === MODES.Celsius ? 'Change to ' + MODES.Fahrenheit : 'Change to ' + MODES.Celsius}
                    </button>
                    <section>
                        <h3>
                            {location.name}, {location.region}, {location.country}
                        </h3>
                    </section>
                </>
            )}
        </>
    )
}

function WeatherResult({ weatherData, mode }) {
    return (
        <>{weatherData && (
            <section>
                {mode === MODES.Celsius ? (
                    <div>
                        <p><b>Temperature:</b> {weatherData.temp_c} {MODES.Celsius}</p>
                        <p><b>Thermal sensation:</b> {weatherData.feelslike_c} {MODES.Celsius}</p>
                    </div>
                ) : (
                    <div>
                        <p><b>Temperature:</b> {weatherData.temp_f} {MODES.Fahrenheit}</p>
                        <p><b>Thermal sensation:</b> {weatherData.feelslike_f} {MODES.Fahrenheit}</p>
                    </div>
                )}
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