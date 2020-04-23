import faker from 'faker';

export class Company {
  companyName: string;

  companyPhrase: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.companyPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
          <div>
          <h3>Company: ${this.companyName}</h3>
          <p>Catchphrase: ${this.companyPhrase}</p>
          </div>
          `;
  }
}
