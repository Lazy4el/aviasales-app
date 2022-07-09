class Service {
  baseUrl = `https://aviasales-test-api.kata.academy/`;

  // Запросы
  _getResponse = async (url, option = {}) => {
    const request = await fetch(this.baseUrl + url, option);
    const response = await request.json();
    return response;
  };

  // Получаем ID
  getId = async () => {
    const url = `search `;
    let response = await this._getResponse(url);
    return response;
  };

  // Получаем список билетов
  getTikets = async (id) => {
    const url = `tickets?searchId=${id}`;
    let response = await this._getResponse(url);
    return response;
  };
}

export default new Service();
