        const clock = document.getElementById('clock'); 
        const date1 = document.getElementById('date');
        let date = new Date();
        date1.innerHTML = date.toLocaleDateString();
        clock.innerHTML = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

        setInterval(function () {
            let time = new Date();
            clock.innerHTML = time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
            checkAlarm(time);
        }, 1000); 

        const alarmStatus = document.getElementById('alarmStatus');
        const alarmSound = document.getElementById('alarmSound');
        let alarmTime = null;

        function setAlarm() {
            const timeInput = document.getElementById('alarmTime').value;
            const ampm = document.getElementById('ampm').value.toUpperCase();
            if (timeInput) {
                let [hours, minutes] = timeInput.split(":");
                hours = parseInt(hours);
                if (ampm === "PM" && hours !== 12) {
                    hours += 12;
                } else if (ampm === "AM" && hours === 12) {
                    hours = 0;
                }
                alarmTime = new Date();
                alarmTime.setHours(hours, minutes, 0);
                alarmTime = alarmTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
                alarmStatus.innerHTML = `Alarm set for ${alarmTime}`;
            }
        }

        function checkAlarm(now) {
            const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
            if (alarmTime === currentTime) {
                alarmSound.play();
                alarmStatus.innerHTML = "⏰ Alarm ringing!";
                alarmTime = null;
            }
        }