export function Customer(first, last, status) {
  this.first = first;
  this.last = last;
  this.status = status;

  this.say = function () {
    console.log("name: " + this.first + " " + this.last +
      ", status: " + this.status);
  };
}
