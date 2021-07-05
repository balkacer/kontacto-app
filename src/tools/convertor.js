export default class ConvertorTool {
    data = null;
    constructor(data) {
        this.data = data;
    }
    itb() {
        let imageBase64 = '';
        let file = this.data;
        console.log('antes de too');
        console.log(file);
        let reader = new FileReader();      
        reader.onload = function () {
            imageBase64 = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
            console.log('dentro del onload');
        }
        reader.readAsDataURL(file);
        console.log('antes del return');
        return imageBase64;
    }
    stb() {
        return btoa(this.data);
    }
    bts() {
        return atob(this.data);
    }
    dts() {
        return new Date(this.data).toISOString().slice(0,10);
    }
    std()
    {
        var dateTry = new Date(this.data);

        if (!dateTry.getTime())
        {
            console.error("Bad Date! date value inserted: " + this.data);
        }

        var tz = this.data.trim().match(/(Z)|([+-](\d{2})\:?(\d{2}))$/);

        if (!tz)
        {
            var newTzOffset = dateTry.getTimezoneOffset() / 60;
            var newSignStr = (newTzOffset >= 0) ? '-' : '+';
            var newTz = newSignStr + ('0' + Math.abs(newTzOffset)).slice(-2) + ':00';

            this.data = this.data.trim() + newTz;
            dateTry = new Date(this.data);

            if (!dateTry.getTime())
            {
                console.error("Bad Date! date value inserted: " + this.data);
            }
        }

        return dateTry;
    }
}