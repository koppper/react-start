// Создание класса SwapiService для взаимодействия с API Star Wars (SWAPI)
class SwapiService {
    _apiBase = 'https://swapi.co/api';  // Базовый URL API

    // Метод getResource для выполнения HTTP-запроса к API по указанному URL
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);  // Использование fetch для выполнения запроса
        if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`);  // Обработка ошибок HTTP
        return await res.json();  // Возврат результата в формате JSON
    }

    // Метод getAllPeople для получения всех персонажей из API
    async getAllPeople() {
        const res = await this.getResource(`/people/`);  // Вызов метода getResource с конкретным URL
        return res.results;  // Возврат массива персонажей
    }

    // Метод getPerson для получения информации о конкретном персонаже по его ID
    getPerson(id) {
        return this.getResource(`/people/${id}`);  // Вызов метода getResource с конкретным URL для персонажа
    }

    // Метод getAllPlanets для получения всех планет из API
    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);  // Вызов метода getResource с конкретным URL
        return res.results;  // Возврат массива планет
    }

    // Метод getPlanet для получения информации о конкретной планете по её ID
    getPlanet(id) {
        return this.getResource(`/planet/${id}`);  // Вызов метода getResource с конкретным URL для планеты
    }

    // Метод getAllStarships для получения всех звездолётов из API
    async getAllStarships() {
        const res = await this.getResource(`/starships/`);  // Вызов метода getResource с конкретным URL
        return res.results;  // Возврат массива звездолётов
    }

    // Метод getStarship для получения информации о конкретном звездолёте по его ID
    getStarship(id) {
        return this.getResource(`/starships/${id}`);  // Вызов метода getResource с конкретным URL для звездолёта
    }
}

// Создание экземпляра класса SwapiService
const swapi = new SwapiService();
// Вызов метода getPerson с параметром ID (например, 3) и вывод имени персонажа в консоль
swapi.getPerson(3).then(p => {
    console.log(p.name);
});
