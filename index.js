let eastWest = [
'1st Avenue',
'2nd Avenue',
'3rd Avenue',
'Lexington Avenue',
'Park',
'Madison Avenue',
'5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name=name
    this.startDate=new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate) {
    return parseInt(endDate, 10) - parseInt(this.startDate.getFullYear(), 10);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation=beginningLocation;
    this.endingLocation=endingLocation;
  }

  avenueFinder(avenueName) {
    return eastWest.indexOf(avenueName)
  }

  blocksTravelled() {
    let horizontalDistance=
    this.avenueFinder(this.beginningLocation.horizontal) -
    this.avenueFinder(this.endingLocation.horizontal);
    let verticalDistance=(this.beginningLocation.vertical - this.endingLocation.vertical)
    return Math.abs(horizontalDistance)+ Math.abs(verticalDistance);
  }

  estimatedTime(rushHour) {
    return rushHour ? Math.round((this.blocksTravelled()) /2) : Math.round((this.blocksTravelled()) /3);
  }
}
