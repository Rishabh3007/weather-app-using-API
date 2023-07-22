const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temperature = document.getElementById('temperature');
const temp_status = document.getElementById('status');
const dataHide = document.querySelector('.middle_layer');
const day = document.getElementById('day');
const today_date = document.getElementById('today_date');


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = new Date();

day.innerText = days[date.getDay()];
const currentDate = date.getDate();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getFullYear();
today_date.innerText = `${currentDate} ${month} ${year}`;

const getInfo = async (e) => {
    e.preventDefault();
    let city = cityName.value;
    if(city === ""){
        city_name.innerText = `Please enter city before search`;
        city_name.classList.add('improper_city');
        dataHide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=70e889b818193f05be85e5bcd86fe71c&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            city_name.classList.remove('improper_city');
            city_name.innerText = `${data.name}, ${data.sys.country}`;
            temperature.innerText = data.main.temp;
            // console.log(data.weather[0].main);
            const tempMood = data.weather[0].main;
            // condition to check sunny or cloudy
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }

            dataHide.classList.remove('data_hide');
        }
        catch(error){
            city_name.innerText = `Please enter the city name properly`;
            city_name.classList.add('improper_city');
            console.error();
            dataHide.classList.add('data_hide');
        }
    }
};

submitBtn.addEventListener('click', getInfo);