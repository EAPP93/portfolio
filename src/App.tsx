import  { useState, useEffect } from 'react';
import './App.scss';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2024-10-27T00:00:00').getTime();

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;

      if (timeRemaining <= 0) {
        // Mantenimiento finalizado
        clearInterval(countdownInterval);
      } else {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      }
    };

    // Actualiza el contador cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="maintenance-page"> 
      <div className="maintenance-content"> 
        <h1 className="h1">Estoy mudando la web a un nuevo servicio</h1> 
        <h2 className="h2">¡Pronto estará de vuelta con una nueva versión del portafolio!</h2> 
        <div className="countdown"> 
          <span className="countdown-number">{days}</span>
          <p className="countdown-label">días</p> 
          <span className="countdown-number">{hours}</span> 
          <p className="countdown-label">horas</p> 
          <span className="countdown-number">{minutes}</span> 
          <p className="countdown-label">minutos</p> 
          <span className="countdown-number">{seconds}</span> 
          <p className="countdown-label">segundos</p> 
        </div>
      </div>
    </div>
  );
}

export default App;
