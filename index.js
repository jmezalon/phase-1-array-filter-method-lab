// Code your solution here
function findMatching(drivers, str) {
    const filtered = drivers.filter(el => {
        let temp = str.slice(0,1).toLowerCase() + str.slice(1, str.length);
        if (el === temp || el === str) {
            return el
        }
    });

    return filtered ? filtered : []
}

const fuzzyMatch = (drivers, str) => {
    let temp = str.slice(0,1).toLowerCase() + str.slice(1, str.length)
  let tempLength = temp.length;

  const matchDrivers = drivers.filter(driver => {
    let name = driver.slice(0, tempLength)
    if (name === temp || name === str) {
      return name
    }
  })
  
  return matchDrivers
}

function matchName(drivers, str) {
    return drivers.filter(el => el.name === str)
  }