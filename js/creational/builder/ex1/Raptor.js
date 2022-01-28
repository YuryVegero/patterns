export class Raptor {
  constructor(build) {
    if (arguments.length === 1 && this.validateBuild(build)) {
      Object.defineProperties(this, {
        'specimenId': {
          value: build.specimenId,
          writable: false
        },
        'speed': {
          value: build.speed,
          writable: false
        },
        'plumage': {
          value: build.plumage,
          writable: false
        }
      });
    }
  }

  static Builder = class {
    constructor(specimenId) {
      this.specimenId = specimenId;
    }

    withSpeed(speed) {
      this.speed = speed;
      return this;
    }

    withPlumage(plumage) {
      this.plumage = plumage;
      return this;
    }

    build() {
      return new Raptor(this);
    }
  };

  validateBuild(build) {
    return (String(build.constructor) === String(Raptor.Builder));
  }
}
