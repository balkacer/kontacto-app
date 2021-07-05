export default class Optiphone {
    constructor(continentCode: number, countryCode: number, regionCode: number, registerCode: number, registerLavelCode: number)
    {
        this.continentCode = continentCode;
        this.countryCode = countryCode;
        this.regionCode = regionCode;
        this.registerCode = registerCode;
        this.registerLavelCode = registerLavelCode;
    }

    private continentCode: number;
    private countryCode: number;
    private regionCode: number;
    private registerCode: number;
    private registerLavelCode: number;

    public new(): string
    {
        const continent = this.continentCode < 10 ? `0${this.continentCode}` : this.continentCode.toString();
        const country = this.countryCode < 10 ? `0${this.countryCode}` : this.countryCode.toString();
        const region = this.regionCode < 10 ? `0${this.regionCode}` : this.regionCode.toString();
        const registerCode = this.registerCode < 10 ? `000${this.registerCode}` : this.registerCode < 100 ? `00${this.registerCode}` : this.registerCode < 1000 ? `0${this.registerCode}` : this.registerCode.toString();
        const registerLavel = this.registerLavelCode < 10 ? `0${this.registerLavelCode}` : this.registerLavelCode.toString();

        return [continent, country, region, registerCode, registerLavel].join('-');
    }
}

export class TestOptiphone {
    public newRamdom(): string
    {
        const getRandomInt = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        const optiphone = new Optiphone(getRandomInt(1, 99),getRandomInt(1, 99),getRandomInt(1, 99),getRandomInt(1, 9999), getRandomInt(0, 99));

        return optiphone.new()
    }
}

console.log(new TestOptiphone().newRamdom());

// 01-01-05-0001-00