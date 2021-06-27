export default class ConvertorTool {
    data = null;
    constructor(data) {
        this.data = data;
    }
    stringToBase64() {
        return btoa(this.data);
    }
    base64ToString() {
        return atob(this.data);
    }
}